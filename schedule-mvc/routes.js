const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contactController = require("./src/controllers/contactController");

// Home route
route.get("/", homeController.index);

// Login routes
route.get("/login", loginController.index);
route.post("/login/register", loginController.register);
route.post("/login/signin", loginController.signin);
route.get("/login/logout", loginController.logout);

//Contact routes
route.get("/contact", contactController.index);
route.post("/contact", contactController.register);
route.post("/contact/update/:id", contactController.update);
route.get("/contact/:id", contactController.edit);
route.get("/contact/delete/:id", contactController.delete);

module.exports = route;
