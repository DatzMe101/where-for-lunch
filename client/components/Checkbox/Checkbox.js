import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, type = 'checkbox', name, onChange }) => (
  <input type={type} name={name} onChange={() => onChange(id)} />
);

Checkbox.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
