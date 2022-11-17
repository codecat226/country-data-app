import React, { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchCountry } from './countrySlice';
import Navbar from '../../components/Navbar';

export const Country = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const theme = useAppSelector((state) => state.themeR.theme);
  const classes = `countryPage ${theme}`;
  const { country, error } = useAppSelector((state) => state.countryR);
  const {
    name,
    flag,
    nativeName,
    borders,
    capital,
    population,
    languages,
    currencies,
    timezones,
    alpha3Code,
    region
  } = country;
  const countryCode: string = location.state.countryName;

  useEffect(() => {
    dispatch(fetchCountry(countryCode));
  }, [dispatch, countryCode]);

  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <main className={classes}>
      {error && <p>Error</p>}
      <Navbar />
      <div className="countryInfo">
        <div className="countryInfo__Div">
          <h1>{country.name}</h1>
          <img className="imgFlag" src={flag} alt={name} />
          <p>Native Name: {nativeName}</p>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <p className="arrayList">Borders:&nbsp;</p>
          {borders?.map((border) => {
            return (
              <p className="arrayList" key={nanoid()}>
                {border}&nbsp;
              </p>
            );
          })}
          <br />
          <p className="arrayList">Languages:&nbsp;</p>
          {languages?.map((language) => {
            return (
              <p className="arrayList" key={nanoid()}>
                {language.name}&nbsp;
              </p>
            );
          })}
          <br />
          <p className="arrayList">Currencies:&nbsp;</p>
          {currencies?.map((currency) => {
            return (
              <p className="arrayList" key={nanoid()}>
                {currency.name}&nbsp;
              </p>
            );
          })}
          <p>Region: {region}</p>
          <p className="arrayList">Time Zones:&nbsp;</p>
          {timezones?.map((timezone) => {
            return (
              <p className="arrayList" key={nanoid()}>
                {timezone}&nbsp;
              </p>
            );
          })}
          <p>Country Code: {alpha3Code}</p>
          <button
            onClick={() => {
              handleClick();
            }}
            className="backArrowButton">
            <FaArrowLeft className="backArrow" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};
