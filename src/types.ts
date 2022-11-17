export type InitialStateTheme = { theme: string };

export type InitialStateFavourites = { favourites: Countries[] };

export type InitialStateCountries = {
  error: string;
  countries: Countries[];
  filteredCountries: Countries[];
  loading: boolean;
};

export type InitialStateCountry = {
  error: string;
  country: Country;
  loading: boolean;
};

export type Countries = {
  name: string;
  capital: string;
  region: string;
  population: number;
  alpha3Code: string;
};

export type CountriesProps = {
  country: {
    name: string;
    capital: string;
    region: string;
    population: number;
    alpha3Code: string;
  };
};

export type Country = {
  name: string;
  nativeName: string;
  capital: string;
  population: number;
  languages: {
    name: string;
  }[];
  currencies: {
    name: string;
  }[];
  borders: string[];
  region: string;
  timezones: string[];
  alpha3Code: string;
  flag: string;
};

export type PaginationProps = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageN: number) => void;
};
