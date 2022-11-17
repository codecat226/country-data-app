import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { FaHeart } from 'react-icons/fa';
import { Countries, CountriesProps } from '../types';
import { addFav } from '../features/favourites/favouritesSlice';

const TableBody = ({ country }: CountriesProps) => {
  const { name, capital, region, population, alpha3Code } = country;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [btnColor, setBtnColor] = useState<string>('');

  const formatCode = (code: string): string => {
    const lowerCode = code.toLowerCase();
    return lowerCode;
  };
  const handleNameClick = (name: string) => {
    navigate('/country', {
      state: {
        countryName: formatCode(name)
      }
    });
  };
  //add the clicked item into the favourites array.
  const handleClick = (country: Countries) => {
    dispatch(addFav(country));
    btnColor === '' ? setBtnColor('favSelected') : setBtnColor('');
  };
  return (
    <tr>
      <td
        className="countryLink"
        onClick={() => {
          handleNameClick(alpha3Code);
        }}>
        {name}
      </td>
      <td>{region}</td>
      <td>{capital}</td>
      <td>{(population / 1000000).toFixed(2)}m</td>
      <td>
        <button
          className="favouritesButton iconButton"
          onClick={() => {
            handleClick(country);
          }}>
          <FaHeart className={btnColor} />
        </button>
      </td>
    </tr>
  );
};

export default TableBody;
