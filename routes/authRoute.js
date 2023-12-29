const {
  login__controller,
  register__controller,
  adduser
} = require("../controllers/authController");


const { login_validator} = require("../middlewares/loginValidator");
const registerValidator = require("../middlewares/registerValidator");
const loginValidator = require("../middlewares/loginValidator");

const router = require("express").Router();

router.post("/login", loginValidator,login_validator,login__controller)

router.post("/register",registerValidator, registerValidator.register_validator ,register__controller)
router.post("/adduser", registerValidator,adduser)

module.exports = router;
