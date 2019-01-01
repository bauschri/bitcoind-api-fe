import React from 'react';
import PropTypes from 'prop-types';

import {
  FormGroup, Label, Input,
} from 'reactstrap';


const InputField = ({identifier, label, onChange, value, placeholder}) => (
  <FormGroup>
    <Label for={identifier}>{label}</Label>
    <Input type="text" name={identifier} id="SupplierName" placeholder={placeholder} onChange={onChange} value={value} />
  </FormGroup>
);

InputField.propTypes = {
  identifier: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
