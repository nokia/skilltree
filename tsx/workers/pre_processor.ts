import { IInput, ILevel } from "../interfaces/nodes";

const workerCode = () => {
  self.addEventListener('message', (message: ServiceWorkerMessageEvent) => {
    let defaultHeight: number = message.data.defaultHeight;
    let defaultWidth: number = message.data.defaultWidth;
    let defaultPadding: number = message.data.defaultPadding;
    let inputs: IInput[][] = message.data.input;
    inputs.forEach((level: IInput[], levelIndex: number) => {
      let firstParentId: number = -1;
      level.forEach((element: IInput, elementIndex: number) => {
        element.level = levelIndex;
        element.index = elementIndex;
        if (element.parentNodes.length > 0) {
          element.x = (inputs[element.parentNodes[0].level]
          [element.parentNodes[0].index].x + inputs[element.parentNodes[element.parentNodes.length - 1].level]
          [element.parentNodes[element.parentNodes.length - 1].index].x) / 2;
          let currentParentId = inputs[element.parentNodes[0].level]
          [element.parentNodes[0].index].id;
          if (firstParentId !== currentParentId) {
            firstParentId = currentParentId;
          } else {
            if (elementIndex > 0)
              element.x += level[elementIndex - 1].placeholder;
          }
        } else {
          element.x = (elementIndex > 0)
            ? level[elementIndex - 1].x + level[elementIndex - 1].placeholder
            : 0;
        }
        if (elementIndex > 0)
          (element.x < (level[elementIndex - 1].x + level[elementIndex - 1].placeholder))
            && (element.x = (level[elementIndex - 1].x + level[elementIndex - 1].placeholder));
        element.y = levelIndex * defaultHeight + (levelIndex * defaultPadding);
        element.placeholder = (element.weight * defaultWidth);
        element.height = defaultHeight;
        element.width = defaultWidth;
      });
    });
    let outputs: IInput[] = [].concat.apply([], inputs);
    postMessage(outputs);
  });
}

let code = workerCode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);

export default worker_script;