import "core-js/stable";
import "regenerator-runtime/runtime";

import LoginValidator from "./modules/LoginValidator";

new LoginValidator(".form-register").init();
new LoginValidator(".form-login").init();
