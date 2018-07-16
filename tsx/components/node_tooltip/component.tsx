import * as React from "react";
import Props from "./props";
import Style from "./style";
import { Group, Rect, Text } from 'react-konva';
import * as Konva from "konva";

const maxChar = 175;
const maxLine = 7;
const fontSize = 15;

const hashCode = function (data: string) {
  var hash = 0,
    i, char;
  if (data.length == 0) return hash;
  let l = data.length;
  for (let i = 0; i < l; i++) {
    char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return hash;
};

const Component = (props: Props) => {
  let x = props.nodeData.x + (props.nodeData.placeholder / 2) + (props.nodeData.width / 2);
  let width = fontSize * 14;
  let padding = props.padding / 2;
  let descriptionPadding = 2 + fontSize;
  let linksLabelPadding = descriptionPadding + (maxLine * fontSize);
  let linksPadding = linksLabelPadding + fontSize;
  let fullheight = (2 + fontSize) + (maxLine * fontSize) + fontSize +
    (props.nodeData.links ? (props.nodeData.links.length * fontSize) : 0) + (fontSize / 2);
  let tooltipWidth = width - padding;
  return (<Group x={x} y={props.nodeData.y} width={width} height={fullheight}>

    { /* Hover hellper */}
    <Rect x={- (padding / 2)} width={width} height={fullheight} fill={'transparent'} />

    <Group width={tooltipWidth}>
      { /* Tooltip Background */}
      <Rect width={tooltipWidth} height={fullheight} fill={'black'} />

      { /* Node Label */}
      <Text y={2} x={padding / 2} width={tooltipWidth - padding} align={'center'}
        fill={'white'} text={props.nodeData.label || 'No Label'} fontSize={fontSize - 3} />

      { /* Node Description */}
      <Text y={descriptionPadding} x={padding / 2} width={tooltipWidth - padding}
        align={props.nodeData.description ? 'left' : 'center'}
        fill={'white'} text={props.nodeData.description
          ? props.nodeData.description.substr(0, maxChar)
          : 'No Description'} fontSize={fontSize - 3} height={maxLine * fontSize} />

      { /* Links Label */}
      <Text x={padding / 2} y={linksLabelPadding} width={tooltipWidth - padding} align={'center'}
        fill={'white'} text={props.nodeData.links ? 'Links' : 'No Link'} fontSize={fontSize - 3} />

      { /* Node links */}
      {props.nodeData.links && props.nodeData.links.map((link: string, index: number) =>
        <Text key={`${hashCode(link)}${index}`} y={linksPadding + (fontSize * index)}
          width={tooltipWidth - padding} align={'center'} fill={'gold'} text={link.substr(0, 21)}
          onClick={() => window.open(link, "_blank")} fontSize={fontSize - 3} height={fontSize} />)}
    </Group>
  </Group>);
};

export default Component;