import { object, string } from 'yup';

const isRequiredFunc = (value: string) => `${value} is required`;

export const loginSchema = object().shape({
  phone_number: string().required(isRequiredFunc('Phone Number')),
  password: string().required(isRequiredFunc('Password')),
});
