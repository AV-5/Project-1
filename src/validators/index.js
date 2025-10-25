import {body} from "express-validator";

const userRegisterValidator=()=>{
    return[
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email rrequired")
            .isEmail()
            .withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username required")
            .isLowercase()
            .withMessage("Username must me lowercase")
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

export {
    userRegisterValidator
}