import styled from "styled-components";
import Wrapper from "./Components/Wrapper/Wrapper";
import Provider from "./Components/Provider/Provider";
import { Navbar } from "./Components/Navbar/Navbar";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Earth from "./pages/Earth/Earth";

function App() {
  //const [counter, setCounter] = useState('test')
  return (
    <Provider>
    <Wrapper>      
    <Navbar/>
    <Earth/>
    </Wrapper>
  </Provider>
  );
}

export default App;
