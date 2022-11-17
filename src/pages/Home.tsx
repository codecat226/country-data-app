import React from 'react';
import { useAppSelector } from '../app/hooks';
import Countries from '../features/countries/Countries';
import Navbar from '../components/Navbar';

//Home page component, set theme class here
export const Home = () => {
  const theme = useAppSelector((state) => state.themeR.theme);

  return (
    <div className={theme}>
      <Navbar />
      <Countries />
    </div>
  );
};
