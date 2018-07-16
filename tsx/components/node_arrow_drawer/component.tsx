import * as React from "react";
import Props from "./props";
import Style from "./style";
import { Arrow, Group, Rect } from 'react-konva';
import * as Konva from "konva";
import { IInput, ILevel } from "../../interfaces/nodes";

const Component = (props: Props) => {
  const width = props.width || 3;
  const pointerSize = width + (width / 1.5);
  const strokeColor = props.strokeColor || 'gold';
  const lines: JSX.Element[][] = props.nodeData.map((input: IInput) => {
    if (input.childNodes.length > 0) {
      let arrows: JSX.Element[] = input.childNodes.map((child: ILevel) => {
        let parentCenterPos = input.x + (input.placeholder / 2) -
          (input.width / 2) + props.padding;
        let childNode: IInput = props.nodeData.filter(_child =>
          _child.level === child.level && _child.index === child.index)[0];
        let childCenterPos = childNode.x + (childNode.placeholder / 2) -
          (childNode.width / 2) + props.padding;
        let parentY = input.y + input.height - (props.padding / 2);
        let points: number[] = [
          //parentCenterPos - (((input.childNodes.length / 2) - (input.childNodes.indexOf(child) + 1)) * width),
          parentCenterPos,
          parentY,
          parentCenterPos,
          //parentCenterPos - (((input.childNodes.length / 2) - (input.childNodes.indexOf(child) + 1)) * width),
          childNode.y - ((childNode.y - parentY) / 2),
          childCenterPos,
          childNode.y - ((childNode.y - parentY) / 2),
          childCenterPos,
          childNode.y - (pointerSize / 2) + 2
        ];
        return <Arrow key={`${child.level}${child.index}${input.x}${input.y}`}
          stroke={strokeColor} strokeWidth={width} points={points} pointerLength={pointerSize}
          pointerWidth={pointerSize} lineJoin={'bevel'} lineCap={'round'} />;
      });
      return arrows;
    } else {
      return null;
    }
  });
  return (<Group>
    {[].concat(...lines)}
  </Group>);
};

export default Component;