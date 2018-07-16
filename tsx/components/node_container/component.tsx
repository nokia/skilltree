import * as React from "react";
import { Arrow, Image as KIMage, Stage, Layer, Line, Rect, Text, Group } from 'react-konva';
import * as Konva from 'konva';
import Props from "./props";
import State from "./state";
import Style from "./style";

class Component extends React.Component<Props, State> {
  //private _lastLevel: number = 0;

  constructor(props: Props) {
    super(props);
    this.state = {
      loaded: false,
      image: null,
      strokeColor: props.strokeColor || 'gold',
      maxLevel: props.nodeData.maxLevel || 10
    };
  }

  private notFoundImageUrl = (width: number, height: number) =>
    `https://via.placeholder.com/${width}x${height}/FFD700/FF0000?text=404`;

  private errorImageUrl = (width: number, height: number) =>
    `https://via.placeholder.com/${width}x${height}/FF0000/FFF?text=!`;

  private levelModificationHandler = (event: any) => {
    event.evt.preventDefault();
    switch (event.evt.button) {
      case 0:
        (!this.props.nodeData.currentLevel || this.props.nodeData.currentLevel < this.state.maxLevel) &&
          this.props.onLevelUpdate(this.props.nodeData, this.props.nodeData.currentLevel
            ? this.props.nodeData.currentLevel + 1 : 1);
        break;
      case 2:
        this.props.nodeData.currentLevel > 0 &&
          this.props.onLevelUpdate(this.props.nodeData, this.props.nodeData.currentLevel - 1);
        break;
      default:
        break;
    }
  }

  public componentDidUpdate() {
    if (this.props.nodeData.currentLevel === this.state.maxLevel
      && this.state.strokeColor !== 'red')
      this.setState({ strokeColor: 'red' });
    if (this.props.nodeData.currentLevel < this.state.maxLevel && this.state.strokeColor === 'red')
      this.setState({ strokeColor: this.props.strokeColor || 'gold' });
  }

  public componentDidMount() {
    //Node image async loader
    const image = new Image(this.props.nodeData.width, this.props.nodeData.height);
    image.src = this.props.nodeData.imageUrl ||
      this.notFoundImageUrl(this.props.nodeData.width, this.props.nodeData.height);
    image.onerror = (event) => (image.src =
      this.errorImageUrl(this.props.nodeData.width, this.props.nodeData.height));
    image.onload = () => this.setState({ image, loaded: true });
  }

  public render() {
    const width = this.props.nodeData.width;
    const height = this.props.nodeData.height;
    const centerPos = (this.props.nodeData.placeholder / 2) - (width / 2);
    const padding = this.props.padding / 2;
    const stroke = this.props.strokeWidth || 3;
    return (<Group x={this.props.nodeData.x}
      y={this.props.nodeData.y}
      width={this.props.nodeData.placeholder} height={height}>

      { /* Hover hellper */}
      <Group onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave} onClick={this.levelModificationHandler}>

        { /* Node image */}
        {!this.state.loaded
          ? <Rect width={width - padding - stroke} height={height - padding - stroke}
            x={centerPos + (stroke / 2)} y={stroke / 2} fill={'transparent'}
            strokeWidth={stroke} stroke={this.state.strokeColor} />
          : <KIMage width={width - padding - stroke} height={height - padding - stroke}
            x={centerPos + (stroke / 2)} y={stroke / 2} image={this.state.image}
            strokeWidth={stroke} stroke={this.state.strokeColor} />}

        { /* Level counter */}
        {(!this.props.nodeData.currentLevel || this.props.nodeData.currentLevel === 0) && <Rect width={width - padding - stroke}
          height={height - padding - stroke}
          x={centerPos + (stroke / 2)} y={stroke / 2} fill={'rgba(0, 0, 0, 0.5)'} />}
        <Group x={centerPos + (padding / 2)} y={height - 15 - (stroke / 2)} width={width - padding} height={15}>
          <Rect width={width - padding} height={15} fill={'black'} />
          <Text y={2} text={`${this.props.nodeData.currentLevel || 0}/${this.state.maxLevel}`} width={width - padding}
            height={13} fill={'white'} align={'center'} />
        </Group>

      </Group>
    </Group>);
  }
}

export default Component;