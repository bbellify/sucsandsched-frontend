import * as yup from 'yup';


const registerSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username cannot be blank'),
    first_name: yup
        .string()
        .trim()
        .required('first name cannot be blank'),
    password: yup
        .string()
        .trim()
        .required('create new password')
        .min(4, 'password must be 4 characters long')
        // set minimum for password dynamically so it can be shorter in dev environment
})

export default registerSchema