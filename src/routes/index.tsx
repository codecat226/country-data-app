import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Error, Country, Favourites } from '../pages';

//create routes for different pages
const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
