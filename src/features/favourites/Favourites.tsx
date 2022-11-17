import React from 'react';
import { useAppSelector } from '../../app/hooks';
import Navbar from '../../components/Navbar';
import TableHeaderF from '../../components/TableHeaderF';
import TableBody from '../../components/TableBody';

export const Favourites = () => {
  const theme = useAppSelector((state) => state.themeR.theme);
  const favouritesData = useAppSelector((state) => state.favourtiesR.favourites);
  return (
    <main className={theme}>
      <Navbar />
      <div className="mainScreen">
        <h1 className="countriesHeading">Favourites</h1>
        <table>
          <TableHeaderF />
          <tbody>
            {favouritesData.map((favourite) => {
              return <TableBody key={favourite.alpha3Code} country={favourite} />;
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};
