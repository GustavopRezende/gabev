import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Primeiro from './Pages/Primeiro';
import reportWebVitals from './reportWebVitals';
import Feed from './Pages/Feed'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Primeiro />} />
        <Route path="feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
 </React.StrictMode>
);

reportWebVitals();