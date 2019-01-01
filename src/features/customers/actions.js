import * as constants from './constants';

import CustomerService from './service';

export function fetchCustomers() {
  return async dispatch => {
    const onSuccess = (records) => {
      dispatch(customerListLoadSuccess(records));
    }
    const onError = (error) => {
      dispatch(customerListLoadError(error));
    }
    try {
      dispatch(customerListLoadRequest());
      const result = await CustomerService.fetch();
      return onSuccess(result.customers);
    } catch (error) {
      return onError(error)
    }
  }
}

export function createCustomer(data) {
  return CustomerService.create(data);
}

export function updateCustomer(id, data) {
  return CustomerService.update(id, data);
}

const customerListLoadRequest = () => {
  return {
    type: constants.CUSTOMER_LIST_LOAD_REQUEST,
  };
}

const customerListLoadSuccess = (records) => {
  return {
    type: constants.CUSTOMER_LIST_LOAD_SUCCESS,
    payload: {
      records
    }
  };
}

const customerListLoadError = (error) => {
  return {
    type: constants.CUSTOMER_LIST_LOAD_ERROR,
    payload: error
  };
}
