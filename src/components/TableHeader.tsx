import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useAppDispatch } from '../app/hooks';
import { sortAlpha, sortPop, sortReg, sortCap } from '../features/countries/countriesSlice';

const TableHeader = () => {
  const dispatch = useAppDispatch();

  const handleSort = (payload: { bool: boolean; type: string }) => {
    switch (payload.type) {
      case 'alpha':
        dispatch(sortAlpha(payload.bool));
        break;
      case 'region':
        dispatch(sortReg(payload.bool));
        break;
      case 'capital':
        dispatch(sortCap(payload.bool));
        break;
      case 'pop':
        dispatch(sortPop(payload.bool));
        break;
      default:
        console.log('error');
    }
  };

  return (
    <thead>
      <tr>
        <th scope="col">
          NAME
          <button
            aria-label="name arrowdown"
            className="sortIconsB"
            onClick={() => {
              handleSort({ bool: true, type: 'alpha' });
            }}>
            <FaArrowDown className="sortIcons" />
          </button>
          <button
            aria-label="name arrowup"
            className="sortIconsB"
            onClick={() => {
              handleSort({ bool: false, type: 'alpha' });
            }}>
            <FaArrowUp className="sortIcons" />
          </button>
        </th>
        <th scope="col">
          REGION
          <button
            aria-label="region arrowdown"
            className="sortIconsB"
            onClick={() => {
              handleSort({ bool: true, type: 'region' });
            }}>
            <FaArrowDown className="sortIcons" />
          </button>
          <button
            aria-label="region arrowup"
            className="sortIconsB"
            onClick={() => {
              handleSort({ bool: false, type: 'region' });
            }}>
            <FaArrowUp className="sortIcons" />
          </button>
        </th>
        <th scope="col">
          CAPITAL
          <button
            aria-label="capital arrowdown"
            className="sortIconsB"
            onClick={() => {
              handleSort({ bool: true, type: 'capital' });
            }}>
            <FaArrowDown className="sortIcons" />
          </button>
          <button
            aria-label="capital arrowup"
            className="sortIconsB"
            onClick={() => {
              handleSort({ bool: false, type: 'capital' });
            }}>
            <FaArrowUp className="sortIcons" />
          </button>
        </th>
        <th scope="col">
          POPULATION
          <button
            aria-label="population arrowdown"
            className="sortIconsB"
            onClick={() => {
              handleSort({ bool: true, type: 'pop' });
            }}>
            <FaArrowDown className="sortIcons" />
          </button>
          <button
            aria-label="population arrowup"
            className="sortIconsB"
            onClick={() => {
              handleSort({ bool: false, type: 'pop' });
            }}>
            <FaArrowUp className="sortIcons" />
          </button>
        </th>
        <th scope="col">FAVOURITES</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
