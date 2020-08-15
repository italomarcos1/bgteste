import React from "react";
import GlobalStyle from "./styles";

import bg from "./e.png";

function App() {
  return (
    <>
      <GlobalStyle />
      <img src={bg} alt="test" />
    </>
  );
}

export default App;
