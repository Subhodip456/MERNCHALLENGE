import React from 'react'
import Books from './components/Books';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Checkout from './components/Checkout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
