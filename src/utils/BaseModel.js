
const BaseModel = function (data) {
  const base = {};
  base._data = data || {};
  base._changedFields = {};
  base.isNew = function () {
    return !this._data.id
  }
  base.getId = function () {
    return this._data.id
  }
  base.setField = function (key, val) {
    this._changedFields[key] = val;
    this._data[key] = val;
  }
  base.getField = function (key) {
    return this._data[key];
  }
  base.getChangedFields = function () {
    return this._changedFields;
  }
  base.toJSON = function () {
    return this._data;
  }
  return base;
}

export default BaseModel;
