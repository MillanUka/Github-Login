import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "./Components/Login";
import HeaderComponent from "./Components/Header";

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
