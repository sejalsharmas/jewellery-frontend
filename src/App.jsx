import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Detail from './views/detail/Detail';
import Edit from './views/edit/Edit';
import Add from './views/Add/Add';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App