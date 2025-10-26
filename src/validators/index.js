import {body} from "express-validator";

const userRegisterValidator=()=>{
    return[
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email required")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username required")
            .isLowercase()
            .withMessage("Username must be lowercase")
            .isLength({min:3})
            .withMessage("Username must be atleast 3 characters"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password required")
            .isLength({min:5})
            .withMessage("Password must be atleast 5 characters"),
        body("fullname")
            .optional()
            .trim()   
    ]
}
const userLoginValidator=()=>{
    return [
        body("email")
        .optional()
        .isEmail()
        .withMessage("email is invalid"),
        body("password")
        .notEmpty().withMessage("Password is required"),

    ]
}
export {
    userRegisterValidator,
    userLoginValidator
}