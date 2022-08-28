import { object, string } from 'yup';

const isRequiredFunc = (value: string) => `${value} is required`;

export const loginSchema = object().shape({
  phoneNumber: string().required(isRequiredFunc('Phone Number')),
  password: string().required(isRequiredFunc('Password')),
});
