import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Country, InitialStateCountry } from '../../types';

const initialState: InitialStateCountry = {
  error: '',
  country: {} as Country,
  loading: true
};

export const fetchCountry = createAsyncThunk(
  'countries/fetchCountries',
  async (countryName: string | undefined) => {
    const response = await fetch('https://restcountries.com/v2/alpha/' + countryName);
    const json = await response.json();
    return json;
  }
);

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountry.fulfilled, (state, action: PayloadAction<Country>) => {
        state.loading = false;
        state.country = action.payload;
        state.error = '';
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.loading = false;
        state.country = {} as Country;
        //add default message so the type is not undefined
        state.error = action.error.message || 'Something went wrong';
      });
  }
});

export default countrySlice.reducer;
