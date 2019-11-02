import React from "react";
import { SentenceTree } from "react-sentence-tree";
import { TreeBank } from "./treebank.jsx";

function App() {
  return (
    <React.Fragment>
      <div style={{ display: "flex", height: "40em" }}>
        <SentenceTree header={true} textField={true} />
        <SentenceTree header={true} textField={true} type={"dependency"} />
      </div>
      {TreeBank}
    </React.Fragment>
  );
}

export default App;
