const router = require("express").Router();
const projectRoutes = require("./projectRoutes");

// Book routes
router.use("/projectRoutes", projectRoutes);

module.exports = router;
