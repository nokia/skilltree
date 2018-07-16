export interface ILevel {
  level: number;
  index: number;
}

export interface IInput {
  id: number;
  parents: number[];
  parentNodes?: ILevel[];
  childNodes?: ILevel[];
  weight?: number;
  x?: number;
  y?: number;
  placeholder?: number;
  width?: number;
  height?: number;
  level: number;
  index: number;
  // Plus data
  label?: string;
  imageUrl?: string;
  description: string;
  links?: string[];
  maxLevel?: number;
  currentLevel?: number;
  parentNodesLevel?: { minimumLevel: number, parentId: number }[]
}