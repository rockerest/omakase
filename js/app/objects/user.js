define(
    ["cookies"],
    function( Cookies ){
        var User = function(){};

        User.prototype.isAuthenticated = function(){
            var auth = Cookies( "authentication" );

            return auth == 1;
        };

        return User;
    }
);
