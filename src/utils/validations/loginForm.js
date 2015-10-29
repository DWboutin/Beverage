export default function loginValidation(data, props) {
  const errors = {};
  if(!data.username) {
    errors.username = 'Required';
  }
  if(!data.password) {
    errors.password = 'Required';
  }
  return errors;
}