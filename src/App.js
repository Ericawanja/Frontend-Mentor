
import Wrapper from "./Components/Wrapper/Wrapper";
import Provider from "./Components/Provider/Provider";
import { Navbar } from "./Components/Navbar/Navbar";
import {  BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Mecury from './pages/Mecury/Mecury';
import Venus from './pages/Venus/Venus';
import Earth from './pages/Earth/Earth';
import Mars from './pages/Mars/Mars';
import Jupiter from './pages/Jupiter/Jupiter';
import Saturn from './pages/Saturn/Saturn';
import Uranus from './pages/Uranus/Uranus';
import Neptune from './pages/Neptune/Neptune';
import HomePage from "./Components/HomePage/HomePage";


function App() {
  const location = useLocation();
    const [activePlanet, setActivePlanet] = useState('/');
  return (
    <Provider>
      <Wrapper>
        <Navbar
        pathName = {location.pathname}
        onHover={setActivePlanet}
        activePlanet={activePlanet}
        
        />
        <AnimatePresence>
          
          <Routes>
           
            <Route path='/mercury' element={<Mecury/>}/>
            <Route path='/venus' element={<Venus/>}/>
            <Route path='earth' element={<Earth/>}/>
            <Route path='/mars' element={<Mars/>}/>
            <Route path='/jupiter' element={<Jupiter/>}/>
            <Route path='/saturn' element={<Saturn/>}/>
            <Route path='/uranus' element={<Uranus/>}/>
            <Route path='/neptune' element={<Neptune/>}/>
            <Route path='/' element={<HomePage activePlanet={activePlanet}/>}/>

          </Routes>
        
          
        </AnimatePresence>
      </Wrapper>
    </Provider>
  );
}

export default App;
