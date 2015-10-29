export default function recipeValidation(data, props) {
  const errors = {};
  if(!data.title) {
    errors.title = 'Required';
  }
  if(!data.tags) {
    errors.tags = 'Required';
  }
  if(!data.code) {
    errors.code = 'Required';
  }
  return errors;
}