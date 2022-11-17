import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { FaHeart, FaMoon, FaHome } from 'react-icons/fa';
import { switchDark, switchLight } from '../features/theme/themeSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeR.theme);
  const favourtiesArr = useAppSelector((state) => state.favourtiesR.favourites);
  //quantity of favourites to show next to heart in navbar
  const quantity = favourtiesArr.length;
  const classes = theme === 'dark' ? 'stickyNavDark' : 'stickyNav';

  //switch the theme class on click
  const handleClick = () => {
    theme === 'light' ? dispatch(switchDark()) : dispatch(switchLight());
  };

  return (
    <nav className={classes}>
      <ul>
        <li>
          <Link to="/" className="iconButton" aria-label="link to home">
            <FaHome size={20} />
          </Link>
        </li>
        <li>
          <button
            aria-label="theme-change button"
            className="iconButton"
            onClick={() => {
              handleClick();
            }}>
            <FaMoon />
          </button>
        </li>
        <li>
          <Link to="/favourites" className="iconButton">
            <FaHeart className="navbarHeartIcon" />
            {quantity}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
