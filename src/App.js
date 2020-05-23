import React from "react";
import { Provider } from "react-redux";
import Products from "./components/feature/Products/Products";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Products R Us</h1>
        </header>
        <Products />
      </div>
    </Provider>
  );
}

export default App;
