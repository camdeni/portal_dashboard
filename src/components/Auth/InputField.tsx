import React from 'react';
import { InputFieldProps } from 'src/__types__/Auth';
import classname from 'classnames';
import style from './Auth.module.scss';

const InputField = ({
  type,
  onChange,
  placeholder,
  value,
  name,
}: InputFieldProps) => {
  return (
    <input
      type={type || 'text'}
      placeholder={placeholder}
      className={classname('input w-full max-w-xs', style.inputField)}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
export default InputField;
