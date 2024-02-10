import * as Yup from 'yup'


export const addUserSchema = Yup.object({
    first_name:Yup.string().min(2).max(25).required("Please Enter Your First name"),
    last_name:Yup.string().min(2).max(25).required("Please Enter Your Last name"),
    email:Yup.string().email().required("Please Enter your email"),
    address:Yup.string().min(6).required("Please Enter your Address"),
    company_name:Yup.string().min(2).max(25).required("Please Enter Your Company Name"),
    
})
