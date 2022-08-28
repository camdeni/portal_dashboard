import React from 'react';

export interface InputFieldProps {
  type: 'text' | 'password' | 'email' | 'number';
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
