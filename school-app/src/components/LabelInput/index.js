/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import React from 'react';
import { Label } from './styled';

export default function LabelInput({
  title,
  type,
  value,
  setValue,
  placeholder,
}) {
  return (
    <Label>
      {title}:
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </Label>
  );
}

LabelInput.defaultProps = {
  type: 'text',
  placeholder: '',
};

LabelInput.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  setValue: PropTypes.func.isRequired,
};
