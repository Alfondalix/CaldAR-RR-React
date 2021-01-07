const validAddress = /\w\s\d/;

export const required = (value) => (value ? undefined : 'Required');
export const addressValid = (value) =>
  value && !value.match(validAddress) ? 'Invalid Addres' : undefined;
export const nameValid = (value) =>
  value && value.length > 3 ? undefined : 'Invalid name';
export const phoneValid = (value) =>
  value && value.length > 7 ? undefined : 'Phone Number is too short';

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
