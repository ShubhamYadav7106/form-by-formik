import * as Yup from "yup";

export const YupValidate=Yup.object({
    name:Yup.string().min(3).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Enter your email"),
    password:Yup.string().min(8).max(8).required("Please enter your password"),
    confirm_password:Yup.string().required("Confirm your password").oneOf([Yup.ref("password"),null],"Password does not match"),
});
