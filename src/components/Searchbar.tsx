import React, { useEffect, useState, ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useAppDispatch } from '../app/hooks';
import { filterSearch } from '../features/countries/countriesSlice';
import useDebounce from '../custom-hooks/useDebounce';

const Searchbar = () => {
  const [term, setTerm] = useState<string>('');
  const debouncedValue = useDebounce<string>(term, 500);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    dispatch(filterSearch(term));
  }, [dispatch, term, debouncedValue]);

  return (
    <div className="searchBar">
      <FaSearch />
      <input
        type="search"
        placeholder="Search a country..."
        onChange={handleChange}
        className="searchBarInput"
        value={term}
        name="search"
      />
    </div>
  );
};

export default Searchbar;
