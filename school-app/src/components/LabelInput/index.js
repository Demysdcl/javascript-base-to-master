/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import React from 'react';
import { Label } from './styled';

export default function LabelInput({
  title,
  type,
  value,
  field,
  setValue,
  placeholder,
}) {
  const handleChange = (inputValue) => {
    if (field) {
      const newEntity = { ...value };
      newEntity[field] = inputValue;
      setValue(newEntity);
    } else {
      setValue(inputValue);
    }
  };

  return (
    <Label>
      {title}:
      <input
        type={type}
        value={field ? value[field] : value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
    </Label>
  );
}

LabelInput.defaultProps = {
  type: 'text',
  placeholder: '',
  field: '',
};

LabelInput.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
  setValue: PropTypes.func.isRequired,
};
