const {
  getStudent__controller,
  getTeacher__controller,
  deleteTeacher__controller,
  getuser__controller
} = require("../controllers/userController");

const { adminAuthentication } = require("../middlewares/authentication");
const { requireLogin } = require("../middlewares/requireLogin");

const router = require("express").Router();

router.get(
  "/student",
  requireLogin,
  adminAuthentication,
  getStudent__controller
);
router.get(
  "/user",
  requireLogin,
  adminAuthentication,
  getuser__controller
);
router.get(
  "/teacher",
  requireLogin,
  adminAuthentication,
  getTeacher__controller
);

router.delete(
  "/delete/:id",
  requireLogin,
  adminAuthentication,
  deleteTeacher__controller
);

module.exports = router;
