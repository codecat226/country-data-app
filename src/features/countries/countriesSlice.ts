import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Countries, InitialStateCountries } from '../../types';

const initialState: InitialStateCountries = {
  error: '',
  countries: [],
  filteredCountries: [],
  loading: true
};

//create asynchronous function to fetch data from API. Cannot be created within createSlice.
export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await fetch('https://restcountries.com/v2/all');
  const json = await response.json();
  return json;
});

//create countriesSlice
//use extraReducers to get the three promise states of fetching from API
const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    //functions for sorting the table with different columns
    sortAlpha: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        state.filteredCountries = [...state.filteredCountries].slice().sort((a, b): number => {
          return a.name === b.name ? 0 : a.name > b.name ? -1 : 1;
        });
      } else {
        state.filteredCountries = [...state.filteredCountries].slice().sort((a, b): number => {
          return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
        });
      }
    },
    sortReg: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        state.filteredCountries = [...state.filteredCountries].slice().sort((a, b): number => {
          return a.region === b.region ? 0 : a.region > b.region ? -1 : 1;
        });
      } else {
        state.filteredCountries = [...state.filteredCountries].slice().sort((a, b): number => {
          return a.region === b.region ? 0 : a.region < b.region ? -1 : 1;
        });
      }
    },
    sortCap: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        state.filteredCountries = [...state.filteredCountries].slice().sort((a, b): number => {
          return a.capital === b.capital ? 0 : a.capital > b.capital ? -1 : 1;
        });
      } else {
        state.filteredCountries = [...state.filteredCountries].slice().sort((a, b): number => {
          return a.capital === b.capital ? 0 : a.capital < b.capital ? -1 : 1;
        });
      }
    },
    sortPop: (state, action: PayloadAction<boolean>) => {
      if (action.payload === false) {
        state.filteredCountries = [...state.filteredCountries].slice().sort((a, b): number => {
          return a.population === b.population ? 0 : a.population > b.population ? -1 : 1;
        });
      } else {
        state.filteredCountries = [...state.filteredCountries].slice().sort((a, b): number => {
          return a.population === b.population ? 0 : a.population < b.population ? -1 : 1;
        });
      }
    },
    filterSearch: (state, action: PayloadAction<string>) => {
      const filteredCountries = [...state.countries].filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredCountries: action.payload.length > 0 ? filteredCountries : [...state.countries]
      };
    }
    // setcurrentPage: (state, action: PayloadAction<number>) => {
    //   state.currentPage = action.payload;
    // },
    // setCountriesPerPage: (state, action: PayloadAction<number>) => {
    //   state.countriesPerPage = action.payload;
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<Countries[]>) => {
        state.loading = false;
        state.countries = action.payload;
        state.filteredCountries = action.payload;
        state.error = '';
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        state.countries = [];
        //add default message so the type is not undefined
        state.error = action.error.message || 'Something went wrong';
      });
  }
});

export const { sortAlpha, sortPop, sortReg, sortCap, filterSearch } = countriesSlice.actions;
export default countriesSlice.reducer;
