define(
    ["routers/base", "controllers/login"],
    function( Base, Controller, User ){
        var Login = function( data ){
                this.data = data;
                this.dmz = true;
                this.blacklist = [ "default" ];
            },
            page = new Controller();

        Login.prototype = new Base();

        Login.prototype.register = function(){
            this.registerDefault( this.data );
        };

        Login.prototype.registerDefault = function( data ){
            var self = this;

            data.sammy.before( "#/", function( context ){
                self.filter(
                    function(){
                        context.redirect( "#/dashboard/" );
                    },
                    undefined,
                    "default"
                );
            });

            data.sammy.get( "#/", function( context ){
                page.home( data );
            });
        };

        return Login;
    }
);
