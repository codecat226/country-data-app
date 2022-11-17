import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchCountries } from './countriesSlice';
import TableBody from '../../components/TableBody';
import TableHeader from '../../components/TableHeader';
import Searchbar from '../../components/Searchbar';
import Pagination from '../../components/Pagination';

const Countries = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeR.theme);
  const { filteredCountries, loading, error } = useAppSelector((state) => state.countriesR);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(35);
  const classes = theme === 'dark' ? 'tableDark' : '';

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  // const nPages = Math.ceil(filteredCountries.length / postsPerPage);
  const indexLast = currentPage * postsPerPage;
  const indexFirst = indexLast - postsPerPage;
  const currentPosts = filteredCountries.slice(indexFirst, indexLast);
  const totalPosts: number = filteredCountries.length;

  //pagination function
  const paginate = (pageN: number): void => {
    setCurrentPage(pageN);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <main className="mainScreen">
      <h1 className="countriesHeading">Country Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <Searchbar />
      <table className={classes}>
        <TableHeader />
        <tbody>
          {currentPosts.map((country) => {
            return <TableBody key={country.alpha3Code} country={country} />;
          })}
        </tbody>
      </table>
      <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} />
    </main>
  );
};

export default Countries;
