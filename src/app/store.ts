import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import countriesSlice from '../features/countries/countriesSlice';
import countrySlice from '../features/country/countrySlice';
import themeSlice from '../features/theme/themeSlice';
import favouritesSlice from '../features/favourites/favouritesSlice';

//default config for persist-redux, added blacklist for reducers not in need
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['countriesR', 'countryR']
};

//combine all reducers so they can be passed easier to the store
const reducer = combineReducers({
  countriesR: countriesSlice,
  countryR: countrySlice,
  themeR: themeSlice,
  favourtiesR: favouritesSlice
});

//create a persistedReducer for the store, pass in previous config and reducers
const persistedReducer = persistReducer(persistConfig, reducer);

//create the store:
export const store = configureStore({
  reducer: persistedReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself for typescript check
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
