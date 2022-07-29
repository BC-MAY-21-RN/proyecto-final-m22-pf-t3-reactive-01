import * as Yup from 'yup';

const schemaInputUser = Yup.string()
  .min(6, 'The user name must be at least 6 digits long')
  .max(20, 'The user name must not be longer than 20 digits')
  .matches(/^[aA-zZ\s]+$/,'Is not in correct format')
  .required('Name Required');

const schemaInputEmail = Yup.string()
  .email('Invalid email')
  .required('Email Required');

const schemaInputUserType = Yup.string().required();

const schemaInputFullname = Yup.string()
  .min(6, ' The full name must be at least 6 digits long')
  .max(22, ' The fullname must not be longer than 22 digits')
  .matches(/^[aA-zZ\s]+$/,'Is not in correct format')
  .required();

const schemaInputCel = Yup.string()
  .min(10, 'The number must be at least 10 digits')
  .max(12, 'The number must not exceed 12 digits.')
  .required();

const schemaInputDni = Yup.string()
.min(8, ' The number must be at least 8 digits')
.max(8, ' The number must be at least 8 digits')
.required()

const schemaInputImage = Yup.string().required();

const validateSchema = (inputname, inputValue) => {
  if (inputname === 'User') {
    console.log(`validate ${inputname}`);
    return schemaInputUser.validate(inputValue);
  } else if (inputname === 'Email') {
    console.log(`validate ${inputname}`);
    return schemaInputEmail.validate(inputValue);
  } else if (inputname === 'Usertype') {
    console.log(`validate ${inputname}`);
    return schemaInputUserType.validate(inputValue);
  } else if (inputname === 'Fullname') {
    console.log(`validate ${inputname}`);
    return schemaInputFullname.validate(inputValue);
  } else if (inputname === 'Cel') {
    console.log(`validate${inputname}`);
    return schemaInputCel.validate(inputValue);
  } else if (inputname === 'Dni') {
    console.log(`validate ${inputname}`);
    return schemaInputDni.validate(inputValue);
  }else if (inputname === 'Image') {
    console.log(`validate ${inputname}`);
    return schemaInputImage.validate(inputValue);
  }  else {
    console.log('no se pudo validar');
  }
};
export default validateSchema;
