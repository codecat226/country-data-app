import { createSlice } from '@reduxjs/toolkit';
import { InitialStateTheme } from '../../types';

const initialState: InitialStateTheme = {
  theme: 'light'
};

//create slice just to change one 'theme' string
const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    switchLight: (state) => {
      state.theme = 'light';
    },
    switchDark: (state) => {
      state.theme = 'dark';
    }
  }
});

export const { switchDark, switchLight } = themeSlice.actions;
export default themeSlice.reducer;
