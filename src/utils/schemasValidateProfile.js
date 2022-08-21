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

export const schemaAddress = yup
  .string()
  .min(8, 'The number must be at least 8 digits')
  .max(24, 'The number must be at least 8 digits')
  .required();

  export const schemaCountry = yup
  .string()
  .min(5, 'The number must be at least 8 digits')
  .max(18, 'The number must be at least 8 digits')
  .required();

  export const schemaState = yup
  .string()
  .min(5, 'The number must be at least 8 digits')
  .max(30, 'The number must be at least 8 digits')
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
    return schemaUserName.validate(inputValue);
  } else if (inputname === 'Email') {
    return schemaEmail.validate(inputValue);
  } else if (inputname === 'Usertype') {
    return schemaUserType.validate(inputValue);
  } else if (inputname === 'Fullname') {
    return schemaFullname.validate(inputValue);
  } else if (inputname === 'Cel') {
    return schemaCel.validate(inputValue);
  } else if (inputname === 'Address') {
    return schemaAddress.validate(inputValue);
  } else if (inputname === 'Image') {
    return schemaImage.validate(inputValue);
  }else if (inputname === 'Country') {
    return schemaCountry.validate(inputValue);
  }else if (inputname === 'State') {
    return schemaState.validate(inputValue);
  } else {
    console.log('no se pudo validar');
  }
};

export const validateCredentials = (credentials = {}, SignUp = false) => {
  return SignUp
    ? SignUpSchema.validate(credentials)
    : LogInSchema.validate(credentials);
};
