import * as Yup from "yup";

const phoneNumber = Yup.string()
  // .matches(/^[0-9]+$/, "Number only")
  .matches(/(0[3|5|7|8|9])+([0-9]{8})\b/, "Phone number is invalid")
  .min(10, "Phone must be 10 characters")
  .max(10, "Phone must be 10 characters")
  .required("This field is required");
const name = Yup.string()
  .min(2, "Name must be at least 2 characters")
  .required("This field is required");
const nameSize = Yup.string()
.min(1, "Name must be at least 2 characters")
.required("This field is required");

const email = Yup.string()
  .email("Email is invalid")
  .required("This field is required");
const address = Yup.string().required("This field is required");
const hometown = Yup.string().required("This field is required");
const date_opend = Yup.string().required("This field is required");
const description = Yup.string().min(
  15,
  "Description must be at least 15 characters"
);
const price = Yup.string()
  .required("This field is required")
  .matches(/^[0-9]+$/, "Number only");
const discount = Yup.string().matches(/^[0-9]+$/, "Number only");
const sale_on_days = Yup.string().matches(/^[0-9]+$/, "Number only");
const image = Yup.string().required("This field is required");
const active = Yup.boolean();
const type = Yup.string().required("This field is required");
const dob = Yup.string().required("This field is required").nullable();
const gender = Yup.string().required("This field is required");
const password = Yup.string().required("This field is required");
const branch = Yup.string().required("This field is required");
const position = Yup.string().required("This field is required");
const ratio = Yup.string().required("This field is required");
const uom = Yup.string().required("This field is required");
const duration = Yup.number().required("This field is required");
export const staffSchema = Yup.object().shape({
  phone_number: phoneNumber,
  name,
  //birthday,
  address,
 
});
export const MovieSchema = Yup.object().shape({
  name,
  active,
  duration,
  director : type,
  actors: type,
  categories: type,
});
export const drinksSchema = Yup.object().shape({
  name,
  description,
  price,
  discount,
  sale_on_days,
  image,
  active,
  type,
});
export const customerSchema = Yup.object().shape({
  phone_number: phoneNumber,
  name,
  gender,
  dob,
  active,
});
export const BranchSchema = Yup.object().shape({
  phoneNumber,
  name,
  address,
  dateOpened: date_opend,
  active,
});
export const ProviderSchema = Yup.object().shape({
  phoneNumber,
  name,
  address,
});

export const signinSchema = Yup.object().shape({
  username: name,
  password,
});


export const sizeSchema = Yup.object().shape({
  name: nameSize ,
  ratio,
});  

export const materialSchema = Yup.object().shape({
  name,
  uom,
});  

export const confirmPasswordSchema = Yup.object().shape({
   password: Yup
    .string()
    .required('Password is required')
    .min(5, 'Your password is too short.'),
  confirmpassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });