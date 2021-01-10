const regex = /[A-Z]/;
const addressRegex = /\w\s\d/;
const emailValid = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const cuitValid = /^(20|23|27|30|33)([0-9]{9}|-[0-9]{8}-[0-9]{1})$/g;

export const required = (value) => (value ? undefined : 'Required');

export const addressValid = (value) =>
  value && !value.match(addressRegex) ? 'Invalid Addres' : undefined;

export const nameValid = (value) =>
  value && value.length > 3 ? undefined : 'Invalid name';

export const phoneValid = (value) =>
  value && value.length > 7 ? undefined : 'Phone Number is too short';

export const addressValidator = (values) =>
  !values.match(addressRegex) || values.length < 3
    ? 'Invalid Address'
    : undefined;

export const emailValidator = (values) =>
  !values.match(emailValid) ? 'Invalid Email' : undefined;

export const cuitValidator = (values) =>
  !values.match(cuitValid) ? 'Invalid Cuit' : undefined;

export const startTime = (value) =>
  /\d+:\d+/.test(value) ? undefined : 'Please, check the information';

export const endTime = (value) =>
  /\d+:\d+/.test(value) ? undefined : 'Please, check the information';

export const monthlyHours = (value) =>
  /[0-9]/.test(value) ? undefined : "Please, make sure it's a valid time";

export const nameBTValid = (value) =>
  value && value.length == 1 && value.match(regex) ? undefined : 'Invalid name';

export const descriptionValid = (value) =>
  value && value.length > 0 ? undefined : 'Description cant be empty';

export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);