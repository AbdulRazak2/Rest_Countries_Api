import React, { useState, useEffect, useContext, useCallback } from 'react';
export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);
  const [state, setState] = useState('loading');

  const findCountryByName = useCallback(
    (name) => {
      if (!countries) return;
      return countries.find((country) => country.name.common === name);
    },
    [countries]
  );
  const findByAltSpelling = (altSpelling) => {
    console.log('findByAltSpelling');
    if (!countries) return;
    return countries.find((country) => country.cca3 === altSpelling);
  };
