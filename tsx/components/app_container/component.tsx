import * as React from "react";
import Props from "./props";
import Style from "./style";
import Context from '../../context';
import DAGDrawer from "../dag_drawer";

const Component = (props: Props) => {
  return (<React.Fragment>
    <Context.Consumer>
      {(context) => <DAGDrawer inputData={context.inputData} />}
    </Context.Consumer>
  </React.Fragment>);
};

export default Component;