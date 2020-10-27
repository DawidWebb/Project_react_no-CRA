import React from "react";

import Header from "./components/header/Header";
import StoreProvider from "./store/StoreProvider";

import "./App.scss";

const App = () => {
  return (
    <StoreProvider>
      <Header />
    </StoreProvider>
  );
};

export default App;
