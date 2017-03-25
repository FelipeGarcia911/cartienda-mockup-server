var constants = {

    // ------------------------------------------------- POST EVENTS -------------------------------------------------

    // Login User Mockup
    LOGIN_USER_ROUTE    : '/authenticate',
    LOGIN_USER_RESPONSE : '{}',

    // Register User Mockup
    REGISTER_USER_ROUTE     : '/register',
    REGISTER_USER_RESPONSE  : '{}',

    // Reset Password User Mockup
    RESET_PASSWORD_ROUTE     : '/account/reset_password/finish',
    RESET_PASSWORD_RESPONSE  : '{}',

    // Request Reset Password User Mockup
    REQUEST_RESET_PASSWORD_ROUTE      : '/account/reset_password/init',
    REQUEST_RESET_PASSWORD_RESEPONSE  : '{}',

    // ------------------------------------------------- GET EVENTS -------------------------------------------------

    // Activate User
    ACTIVATE_USER_ROUTE     : '/activate',
    ACTIVATE_USER_RESPONSE  : '{}'

};

module.exports = function(express,path){

    var app = express.Router();

    // ------------------------------------------------- POST EVENTS -------------------------------------------------

    app.route(constants.LOGIN_USER_ROUTE).post(function (req,res) {
        var response = constants.LOGIN_USER_RESPONSE;
        res.send(response);
    });

    app.route(constants.REGISTER_USER_ROUTE).post(function (req,res) {
        var response = constants.REGISTER_USER_RESPONSE;
        res.send(response);
    });

    app.route(constants.RESET_PASSWORD_ROUTE).post(function (req,res) {
        var response = constants.RESET_PASSWORD_RESPONSE;
        res.send(response);
    });

    app.route(constants.REQUEST_RESET_PASSWORD_ROUTE).post(function (req,res) {
        var response = constants.REQUEST_RESET_PASSWORD_RESEPONSE;
        res.send(response);
    });

    // ------------------------------------------------- GET EVENTS -------------------------------------------------

    app.route(constants.ACTIVATE_USER_ROUTE).get(function (req,res) {
        var response = constants.ACTIVATE_USER_RESPONSE;
        res.send(response);
    });

    return app;
};