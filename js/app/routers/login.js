define(
    ["controllers/login"],
    function( Controller ){
        var Login = {},
            page = new Controller();

        Login.register = function( data ){
            Login.registerDefault( data );
        };

        Login.registerDefault = function( data ){
            data.sammy.get( "#/", function( context ){
                page.home( data );
            });
        };

        return Login;
    }
);
