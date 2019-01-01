import * as constants from './constants';

export const customerDefaultState = {
  isLoading: false,
  list: [],
};

export const customerReducers = (state = customerDefaultState, { type, payload }) => {
  switch (type) {
    case constants.CUSTOMER_LIST_LOAD_REQUEST:
      return { ...state, isLoading: true };
    case constants.CUSTOMER_LIST_LOAD_SUCCESS:
      return { ...state, isLoading: false, list: payload.records };
    case constants.CUSTOMER_LIST_LOAD_ERROR:
      return { ...state, isLoading: false, list: [] };
    default:
      return state;
  }
};
