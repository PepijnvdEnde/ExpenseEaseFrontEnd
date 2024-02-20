import React from "react";
import NavBar from "./navbar";

function App() {
    return (
      <div className="App">
        <NavBar />
        <header className=" mt-2 App-header">
         <div className="bg-[#7286D3] w-14">color 1</div>
         <div className="bg-[#8EA7E9] w-14">color 2</div>
         <div className="bg-[#E5E0FF] w-14">color 3</div>
         <div className="bg-[#FFF2F2] w-14">color 4</div>
        </header>
      </div>
    );
  }
  
  export default App;
  