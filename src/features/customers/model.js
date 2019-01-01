import { customerActions } from './index';

const Customer = function (data) {
  const customer = {};
  customer._data = data || {};
  customer._changedFields = {};

  customer.isNew = function () {
    return !this._data.id
  }

  customer.getId = function () {
    return this._data.id
  }

  customer.set = function (key, val) {
    this._changedFields[key] = val;
    this._data[key] = val;
  }

  customer.get = function (key) {
    return this._data[key];
  }

  customer.toJSON = function () {
    return {
      name: this.getFullName(),
    }
  }

  customer.save = function() {
    if (this.isNew()) {
      return customerActions.create(this.toJSON())
    } else {
      return customerActions.update(this.getId(), this.toJSON())
    }
  }

  return customer;
}

export default Customer;
