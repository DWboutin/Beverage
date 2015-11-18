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
  if(!data.description) {
    errors.description = 'Required';
  }
  if(!data.packages) {
    errors.packages = 'Required';
  }
  return errors;
}