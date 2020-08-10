import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} : </label>
      <input
        type={type}
        name={name}
        className={classnames('form-control', { 'is-invalid': error })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

TextInputGroup.defaultProps = {
  type: 'text',
  error: '',
};

export default TextInputGroup;
