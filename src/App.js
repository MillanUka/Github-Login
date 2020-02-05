import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "../src/Components/LoginComponent";
import HeaderComponent from "../src/Components/HeaderComponent";

function App() {
  return (
    <div className="App" id="App">
      <HeaderComponent />
      <br></br>
      <LoginComponent />
    </div>
  );
}

export default App;
