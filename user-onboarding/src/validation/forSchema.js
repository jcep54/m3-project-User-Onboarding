import * as yup from 'yup';
const formSchema = yup.object().shape({
    username : yup
        .string()
        .trim()
        .required('Username is required!')
        .min (3, 'You need at least 3 characters '),
    email : yup
        .string()
        .email('Must be a balid email address')
        .required('Email is required'),
    password : yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be 6 characters long'),
    terms: yup 
        .boolean()
        .oneOf([true], "Must accept the terms and conditons")
})

export default  formSchema;