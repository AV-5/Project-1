import { Router } from "express";
import { login, logoutUser, registerUser } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userLoginValidator, userRegisterValidator } from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

// router.post("/register", registerUser);
router.route("/register").post(userRegisterValidator(),validate,registerUser);
router.route("/login").post(userLoginValidator(),validate,login);
router.route("/logout").post(verifyJWT,logoutUser);
// router.route("/logout").post(logoutUser);
export default router;
