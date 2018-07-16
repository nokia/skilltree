import * as React from "react";
import { Stage, Layer } from 'react-konva';
import Props from "./props";
import State from './state';
import { IInput } from "../../interfaces/nodes";
import PreProcessor from "../../workers/pre_processor";
import NodeContainer from "../node_container";
import NodeTooltip from "../node_tooltip";
import NodeArrowDrawer from "../node_arrow_drawer";
import NodeContext from "./context";
import { sortBy } from 'lodash';

class Component extends React.Component<Props, State> {
  private _preProcessorWorker: Worker = new Worker(PreProcessor);
  private _timer: any = null;

  private _defaultPadding: number = 20;
  private _lineWidth: number = 3;
  private _lineColor: string = 'gold';

  constructor(props: Props) {
    super(props);
    this._preProcessorWorker.onmessage =
      this._preProcessorWorkerOnMessage.bind(this);
    this._zoomHandler = this._zoomHandler.bind(this);
    this._levelUpdateHandler =
      this._levelUpdateHandler.bind(this);
    this.state = {
      tree: [],
      selectedNode: null,
      showTooltip: false,
      scale: 1
    };
  }

  private _showTooltip(input?: IInput) {
    if (this._timer !== null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
    if (input)
      this.setState({ selectedNode: input, showTooltip: true });
    else
      this.setState({ showTooltip: true });
  }

  private _hideTooltip() {
    if (this._timer === null) {
      this._timer = setTimeout(() =>
        this.setState({ showTooltip: false }), 50);
    }
  }

  private _preProcessorWorkerOnMessage(message: MessageEvent) {
    this.setState({ tree: message.data });
  }

  private _zoomHandler(event: any) {
    if ((this.state.scale - (event.evt.deltaY / 50)) > 0)
      this.setState({ scale: this.state.scale - (event.evt.deltaY / 50) });
  }

  private _levelUpdateHandler = (input: IInput, level: number) => {
    let tree: IInput[] = this.state.tree;
    let currentNode: IInput = tree[tree.indexOf(input)];
    let disabled = false;

    // child safety
    if (level < currentNode.currentLevel) {
      let childNodes: IInput[] = currentNode.childNodes.map(child =>
        tree.filter(childLeaf => childLeaf.level === child.level &&
          childLeaf.index === child.index)[0]);
      disabled = (childNodes.filter(childNode =>
        childNode.currentLevel && childNode.currentLevel > 0).length > 0);
    }

    // node safety
    if (!currentNode.currentLevel || level > currentNode.currentLevel && currentNode.parentNodes.length > 0) {
      let parents: IInput[] = currentNode.parentNodes.map(parent =>
        tree.filter(parentLeaf => parentLeaf.level === parent.level &&
          parentLeaf.index === parent.index)[0]);
      if (currentNode.parentNodesLevel && currentNode.parentNodesLevel.length > 0) {
        let parentNodes: IInput[] = parents.filter(parentNode =>
          parentNode.currentLevel && currentNode.parentNodesLevel
            .filter(requirement => parentNode.id === requirement.parentId &&
              parentNode.currentLevel >= requirement.minimumLevel).length > 0);
        disabled = !(parentNodes.length >= currentNode.parentNodesLevel.length);
      } else {
        let parents: IInput[] = currentNode.parentNodes.map(parent =>
          tree.filter(parentLeaf => parentLeaf.level === parent.level &&
            parentLeaf.index === parent.index)[0]);
        let parentNodes: IInput[] = parents.filter(parentNode =>
          parentNode.currentLevel && parentNode.currentLevel > 0);
        disabled = !(parentNodes.length === parents.length);
      }
    }

    if (!disabled) {
      var base_url = window.location.origin;
      console.log(`${base_url}/profile`)
      fetch(`${base_url}/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: (window as any).__USER_ID__,
          skillId: input.id,
          levelRequest: level
        }),
      }).then(response => {
        if (response.status === 200) {
          currentNode.currentLevel = level;
          this.setState({ tree });
        } else
          console.error('No no no!', response.status);
      }).catch(reason => {
        console.error(reason);
      });
    }
  }

  private _inputWorker(inputs: IInput[]) {
    // Find parent helper
    let _findParent = ((parentId: number, array: { id: number, parents: number[] }[][]) => {
      let level = -1;
      let index = -1;
      let searchLevel = 0;
      do {
        if (!array[searchLevel])
          throw `Parent does not exist (${parentId})`;
        let filteredElements = array[searchLevel].filter(element =>
          element.id === parentId);
        if (filteredElements.length > 0) {
          level = searchLevel;
          index = array[searchLevel].indexOf(filteredElements[0]);
        } else
          ++searchLevel;
      } while (level === -1);
      return { level, index };
    });

    // Weight calculator helper
    let _calculateWeight = ((level: number, index: number, array: IInput[][]) => {
      array[level][index]['weight'] = 1;
      if (array[level][index].childNodes.length > 0) {
        array[level][index]['weight'] = 0;
        array[level][index].childNodes.forEach(child => {
          let childWeight = _calculateWeight(child.level, child.index, array);
          childWeight /= array[child.level][child.index].parentNodes.length;
          array[level][index]['weight'] += childWeight;
        });
      }
      if (array[level][index]['weight'] < 1) {
        array[level][index]['weight'] = 1;
      }
      return array[level][index]['weight'];
    });

    let _inputs = inputs;

    // 1st STAGE: Sort parents in ascending
    _inputs.forEach(input => input.parents.sort((a: number, b: number) => a > b ? 1 : -1));

    // 2nd STAGE: Sort input in ascending by id
    _inputs = sortBy(inputs, [(input: IInput) => input.id]);
    //inputs.sort((a: IInput, b: IInput) => a.id - b.id);

    // 3rd STAGE:  Sort input in ascending by parents length
    _inputs.sort((a, b) => a.parents.length > b.parents.length ? 1 : -1);

    // 4th STAGE: Sort input in ascending by first dependecy id
    _inputs.forEach((input: IInput, inputIndex: number) => {
      let parentIndex: number = _inputs.indexOf(_inputs.filter(search =>
        search.id === input.parents[0])[0]);
      if (parentIndex > inputIndex)
      _inputs.splice(parentIndex, 0, _inputs.splice(inputIndex, 1)[0]);
    });

    var outputs: IInput[][] = [];

    // 5th STAGE: Create nested array with levels
    _inputs.forEach(input => {
      let level = -1;
      if (input.parents.length === 0)
        level = 0;
      else
        level = ++_findParent(input.parents[input.parents.length - 1], outputs).level;
      !outputs[level] && (outputs[level] = []);
      outputs[level].push(input);
    });

    // 6th STAGE: Sort each level's elements in ascending by first dependecy id
    outputs.forEach(level =>
      level.sort((a, b) => (a.parents[0] || 0) > (b.parents[0] || 0) ? 1 : -1));
    
    // 7th STAGE: Create each level's and each element's parentNodes
    // and childNodes list and remove the unnecessary parents property
    outputs.forEach((level, levelIndex) => level.forEach((child, childIndex) => {
      child['parentNodes'] = [];
      child['childNodes'] = [];
      child.parents.forEach((parent) =>
        child.parentNodes.push(_findParent(parent, outputs)));
      child.parentNodes.forEach((parent) =>
        outputs[parent.level][parent.index].
          childNodes.push({ level: levelIndex, index: childIndex }));
      delete child.parents;
    }));

    // 8th STAGE: Calaculate each level's and each element's weight by children's weight.
    outputs[0].forEach((child, childIndex) =>
      _calculateWeight(0, childIndex, outputs));

    this._preProcessorWorker.postMessage({
      defaultHeight: 50,
      defaultWidth: 50,
      defaultPadding: this._defaultPadding,
      input: outputs
    });
  }

  public componentWillMount() {
    this._inputWorker(this.props.inputData);
  }

  public render() {
    return (<div onContextMenu={(event) => event.preventDefault()}>
      <NodeContext.Provider value={this.state.tree}>
        <Stage width={window.innerWidth}
          height={window.innerHeight - 100}
          draggable={true}
          onWheel={this._zoomHandler}
          scaleX={this.state.scale}
          scaleY={this.state.scale}>
          <Layer x={0} y={0}>
            <NodeArrowDrawer strokeColor={this._lineColor} width={this._lineWidth}
              nodeData={this.state.tree} padding={this._defaultPadding} />
            {this.state.tree.map((input: IInput) =>
              <NodeContainer key={`${input.id}`} nodeData={input}
                padding={this._defaultPadding} strokeColor={this._lineColor}
                onMouseEnter={() => this._showTooltip(input)}
                onMouseLeave={() => this._hideTooltip()}
                onLevelUpdate={this._levelUpdateHandler} />)}
          </Layer>
          <Layer>
          </Layer>
          <Layer onMouseEnter={() => this._showTooltip()}
            onMouseLeave={() => this._hideTooltip()}>
            {this.state.showTooltip && <NodeTooltip padding={this._defaultPadding}
              nodeData={this.state.selectedNode} />}
          </Layer>
        </Stage>
      </NodeContext.Provider>
    </div>);
  }
};

export default Component;