var constants       = {
    // ------------------------------------------------- POST EVENTS -------------------------------------------------

    // Create Announce Mockup
    CREATE_ANNOUNCE_REQUEST     : '/vehicles',
    CREATE_ANNOUNCE_RESPOSNE    : '{}',

    // Add Favourite Anounnce Mockup
    ADD_FAV_ANOUNCE_ROUTE     : '/favorite-ads',
    ADD_FAV_ANOUNCE_RESPONSE  : '{}',

    // ------------------------------------------------- GET EVENTS -------------------------------------------------

    GET_FAV_ANNOUNCES_ROUTE     : '/favorite-ads',
    GET_FAV_ANNOUNCES_RESPOSNE  : '{}'

}
module.exports = function(express,path){

    var app = express.Router();

    // ------------------------------------------------- POST EVENTS -------------------------------------------------

    app.route(constants.CREATE_ANNOUNCE_REQUEST).post(function (req,res) {
        var response = constants.CREATE_ANNOUNCE_RESPOSNE;
        res.send(response);
    });

    app.route(constants.ADD_FAV_ANOUNCE_ROUTE).post(function (req,res) {
        var response = constants.ADD_FAV_ANOUNCE_RESPONSE;
        res.send(response);
    });

    // ------------------------------------------------- GET EVENTS -------------------------------------------------

    app.route(constants.GET_FAV_ANNOUNCES_ROUTE).get(function (req,res) {
        var response = constants.GET_FAV_ANNOUNCES_RESPOSNE;
        res.send(response);
    });

    return app;
};