import * as React from "react";
import AppNavigator from "./navigator/AppNavigator";
import { Provider } from "react-redux";
import store from "./store/store";
import "src/App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
}

export default App;
