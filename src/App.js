import React from "react";
import GlobalStyle from "./styles";

import bg from "./img.png";

function App() {
  return (
    <>
      <GlobalStyle />
      <img src={bg} alt="t" />
    </>
  );
}

export default App;
