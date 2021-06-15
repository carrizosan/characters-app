import { useEffect, useCallback, useReducer } from 'react';
import { FETCH_ACTIONS } from '../actions/fetch';
import { API } from '../constants/API';
import { fetchReducer, initialState } from '../reducers/fetch';

export const useFetch = (endpoint = '') => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const getData = useCallback(async () => {
    try {
      const { data } = await API.get(`${endpoint}`);
      dispatch({ type: FETCH_ACTIONS.SET_DATA, payload: data });
    } catch (e) {
      console.log(e);
      dispatch({ type: FETCH_ACTIONS.SET_ERROR });
    }
  }, [endpoint]);

  useEffect(() => {
    getData();
  }, [endpoint, getData]);

  return state;
};
