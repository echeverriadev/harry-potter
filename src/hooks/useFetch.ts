import { useState, useEffect } from 'react';
import { getCharacters } from '../helpers/get-characters';

export const useFetch = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setState({
          data: data as any,
          loading: false,
          error: null
        });
      })
      .catch((error) => {
        setState({
          data: [],
          loading: false,
          error: error
        });
      });

    return () => {
      setState({
        data: [],
        loading: true,
        error: null
      });
    };
  }, []);

  return state;
};
