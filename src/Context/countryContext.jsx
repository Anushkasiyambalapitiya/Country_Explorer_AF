import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Configure Axios instance with defaults
  const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
    timeout: 10000, // 10 second timeout
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Enhanced fetch with retry logic
  const fetchWithRetry = async (url, retries = 3) => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (err) {
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return fetchWithRetry(url, retries - 1);
      }
      throw err;
    }
  };

  // Fetch all countries
  const fetchAllCountries = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWithRetry('/all');
      setCountries(data);
    } catch (error) {
      console.error('Error fetching all countries:', error);
      setError('Failed to load countries. Please try again later.');
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  // Search countries by name
  const searchCountriesByName = async (name) => {
    if (!name) {
      setCountries([]);
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWithRetry(`/name/${name}`);
      setCountries(data);
    } catch (error) {
      console.error('Error searching countries:', error);
      setError('No countries found matching your search');
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter countries by region
  const filterCountriesByRegion = async (region) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWithRetry(`/region/${region}`);
      setCountries(data);
    } catch (error) {
      console.error('Error filtering by region:', error);
      setError('Failed to filter by region');
    } finally {
      setLoading(false);
    }
  };

  // Filter countries by language
  const filterCountriesByLanguage = async (language) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWithRetry(`/lang/${language}`);
      setCountries(data);
    } catch (error) {
      console.error('Error filtering by language:', error);
      setError('Failed to filter by language');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countries,
        loading,
        error,
        fetchAllCountries,
        searchCountriesByName,
        filterCountriesByRegion,
        filterCountriesByLanguage,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};