import { IInput } from "../../interfaces/nodes";

export default interface props {
  nodeData: IInput;
  padding: number;
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
}