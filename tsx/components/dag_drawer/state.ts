import { IInput } from "../../interfaces/nodes";

export default interface state {
  tree: IInput[];
  selectedNode: IInput;
  showTooltip: boolean;
  scale: number;
}