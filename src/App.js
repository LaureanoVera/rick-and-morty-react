import React, { Fragment } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import './index.css';

const App = () => {
  return (
    <Fragment>
      <Header
        title="Rick and Morty"
        text="Characters of the famous series"
      />
      <Characters />
    </Fragment>
  );
};

export default App;
