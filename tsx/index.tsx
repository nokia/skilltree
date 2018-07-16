import * as React from "react";
import * as ReactDOM from "react-dom";

import Context from './context';
import AppContainer from "./components/app_container";

ReactDOM.render(
  <Context.Provider value={{
    inputData: JSON.parse((window as any).__INITIAL_DATA__)
  }}>
    <AppContainer />
  </Context.Provider>,
  document.getElementById('skilltree')
);