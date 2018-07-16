import { IInput } from "../../interfaces/nodes";

export default interface props {
  nodeData: IInput[];
  padding?: number;
  width?: number;
  strokeColor?: string;
}