import React from 'react';

export interface InputFieldProps {
  type: 'text' | 'password' | 'email' | 'number';
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
}

export interface LoginArgs {
  phone_number: string;
  password: string;
}

export interface AuthContextT {
  isAuth?: boolean;
  loading?: boolean;
  me?: any;
}
