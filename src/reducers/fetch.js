import { FETCH_ACTIONS } from '../actions/fetch';

export const initialState = {
  loading: true,
  error: false,
  data: {},
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIONS.SET_DATA:
      return {
        ...initialState,
        loading: false,
        data: {
          info: action.payload.info,
          results: action.payload.results,
        },
      };
    case FETCH_ACTIONS.SET_ERROR:
      return {
        ...initialState,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
