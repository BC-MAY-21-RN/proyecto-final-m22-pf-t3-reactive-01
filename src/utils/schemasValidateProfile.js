import * as Yup from 'yup';

const schemaInputUser = Yup.string()
  .min(6, 'Too Short!')
  .max(20, 'Too Long!')
  .required('Name Required');

const schemaInputEmail = Yup.string()
  .email('Invalid email')
  .required('Email Required');

const schemaInputUserType = Yup.string().required();

const schemaInputFullname = Yup.string()
  .min(6, 'Too Short!')
  .max(22, 'Too Long!')
  .required();

const schemaInputCel = Yup.string()
  .min(10, 'Too Short!')
  .max(12, 'Too Long!')
  .required();

const schemaInputDni = Yup.number().required();

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
