export default function registerValidation(data, props) {
  const errors = {};
  if(!data.email){
    errors.email = 'Required';
  }else{
    if(!validateEmail(data.email)){
      errors.email = 'You must enter a valid address';
    }
  }
  if(!data.username) {
    errors.username = 'Required';
  }
  if(!data.password) {
    errors.password = 'Required';
  }
  return errors;
}

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}