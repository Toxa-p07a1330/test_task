import * as React from "react";
import Home from "./pages/Home";
import DropDownContextProvider from "./context/DropDownContext";


let App = ()=>{
  return <>
    <DropDownContextProvider>
        <Home/>
    </DropDownContextProvider>
  </>
}

export default App;
