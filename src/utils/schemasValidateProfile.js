import * as yup from 'yup';

export const schemaUserName = yup
  .string()
  .min(6, 'User Name must be at least 6 digits long')
  .max(20, 'User Name must not be longer than 20 digits')
  .matches(/^[aA-zZ\s]+$/, 'User Name can only have letters')
  .required('User Name Required');

export const schemaEmail = yup
  .string()
  .email('Invalid email')
  .required('Email Required');

export const schemaUserType = yup.string().required();

export const schemaFullname = yup
  .string()
  .min(6, 'Full name must be at least 6 digits long')
  .max(22, 'Full name must not be longer than 22 digits')
  .matches(/^[aA-zZ\s]+$/, 'Full name can only have letters')
  .required();

export const schemaCel = yup
  .string()
  .min(10, 'The number must be at least 10 digits')
  .max(12, 'The number must not exceed 12 digits.')
  .required();

export const schemaDni = yup
  .string()
  .min(8, 'The number must be at least 8 digits')
  .max(8, 'The number must be at least 8 digits')
  .required();

export const schemaImage = yup.string().required();

export const schemaCheckTerms = yup
  .boolean()
  .oneOf([true], 'you must accept the terms')
  .required();

export const schemaPassword = yup
  .string()
  .min(8, 'Password must be at least 8 Character')
  .required('Password Required')
  .matches(
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
    'Must Contain 6 Characters, One Lowercase, One Number and One Special Case Character',
  );
export const SignUpSchema = yup.object().shape({
  userName: schemaUserName,
  email: schemaEmail,
  password: schemaPassword,
  check: schemaCheckTerms,
});
export const LogInSchema = yup.object().shape({
  email: schemaEmail,
  password: schemaPassword,
});

export const validateSchema = (inputname, inputValue) => {
  if (inputname === 'User') {
    console.log(`validate ${inputname}`);
    return schemaUserName.validate(inputValue);
  } else if (inputname === 'Email') {
    console.log(`validate ${inputname}`);
    return schemaEmail.validate(inputValue);
  } else if (inputname === 'Usertype') {
    console.log(`validate ${inputname}`);
    return schemaUserType.validate(inputValue);
  } else if (inputname === 'Fullname') {
    console.log(`validate ${inputname}`);
    return schemaFullname.validate(inputValue);
  } else if (inputname === 'Cel') {
    console.log(`validate${inputname}`);
    return schemaCel.validate(inputValue);
  } else if (inputname === 'Dni') {
    console.log(`validate ${inputname}`);
    return schemaDni.validate(inputValue);
  } else if (inputname === 'Image') {
    console.log(`validate ${inputname}`);
    return schemaImage.validate(inputValue);
  } else {
    console.log('no se pudo validar');
  }
};

export const validateCredentials = (credentials = {}, SignUp = false) => {
  return SignUp
    ? SignUpSchema.validate(credentials)
    : LogInSchema.validate(credentials);
};
