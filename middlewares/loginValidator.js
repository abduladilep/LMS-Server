const { body, validationResult } = require("express-validator");

module.exports = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email required"),
  body("password").not().isEmpty().withMessage("Password required"),
]

module.exports.login_validator = (req, res, next) => {
  console.log("oggggggggggg");
  const errors = validationResult(req).formatWith((errors) => errors.msg);
  if (!errors.isEmpty()) {
    console.log("fcgcfcgc");
    return res.status(400).json({ errors: errors.mapped() });
  }
  next();
};
