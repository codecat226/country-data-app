import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateFavourites, Countries } from '../../types';

const initialState: InitialStateFavourites = {
  favourites: []
};

//createSlice for favourites array
const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: initialState,
  reducers: {
    //push the item which has been selected by onClick
    addFav: (state, action: PayloadAction<Countries>) => {
      //if object already exists in the array, dont add
      if (
        state.favourites.find((item) => item.alpha3Code === action.payload.alpha3Code) === undefined
      ) {
        state.favourites.push(action.payload);
      } else {
        state.favourites = state.favourites.filter(
          (item) => item.alpha3Code !== action.payload.alpha3Code
        );
      }
    },
    sortAlpha: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        state.favourites = state.favourites.slice().sort((a, b): number => {
          return a.name === b.name ? 0 : a.name > b.name ? -1 : 1;
        });
      } else {
        state.favourites = state.favourites.slice().sort((a, b): number => {
          return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
        });
      }
    },
    sortReg: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        state.favourites = state.favourites.slice().sort((a, b): number => {
          return a.region === b.region ? 0 : a.region > b.region ? -1 : 1;
        });
      } else {
        state.favourites = state.favourites.slice().sort((a, b): number => {
          return a.region === b.region ? 0 : a.region < b.region ? -1 : 1;
        });
      }
    },
    sortCap: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        state.favourites = state.favourites.slice().sort((a, b): number => {
          return a.capital === b.capital ? 0 : a.capital > b.capital ? -1 : 1;
        });
      } else {
        state.favourites = state.favourites.slice().sort((a, b): number => {
          return a.capital === b.capital ? 0 : a.capital < b.capital ? -1 : 1;
        });
      }
    },
    sortPop: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        state.favourites = state.favourites.slice().sort((a, b): number => {
          return a.population === b.population ? 0 : a.population > b.population ? -1 : 1;
        });
      } else {
        state.favourites = state.favourites.slice().sort((a, b): number => {
          return a.population === b.population ? 0 : a.population < b.population ? -1 : 1;
        });
      }
    }
  }
});

export const { addFav, sortAlpha, sortPop, sortReg, sortCap } = favouritesSlice.actions;
export default favouritesSlice.reducer;
