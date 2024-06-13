import './App.css';
import * as React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage context = {'this is homepage'}/>} />
        <Route path="/about" element={<Homepage context = {'this is about page'}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
