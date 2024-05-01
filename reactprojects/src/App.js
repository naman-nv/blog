
import './App.css';
import React from 'react';


import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"/>



function App(){
  return(
    <>
    <Navbar/>
    <Router>
      <Routes>
       <Route path='/'element={<Sidebar/>}/>
       <Route path='/technologies' element={<technologies/>}/>
       <Route path='/Entertainment' element={<entertainment/>}/>

      </Routes>
    </Router>
    </>
  )
}
export default App;