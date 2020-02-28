import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App" id="App">
      <Header />
      <br></br>
      <Search />
    </div>
  );
}

export default App;
