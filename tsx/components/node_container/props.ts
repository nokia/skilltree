import { IInput } from "../../interfaces/nodes";

export default interface props {
  nodeData: IInput;
  padding: number;
  strokeWidth?: number;
  strokeColor?: string;
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
  onDrag?: boolean;
  onLevelUpdate: (input: IInput, level: number) => void;
}