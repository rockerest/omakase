define(
    ["routers/base", "controllers/error"],
    function( Base, Controller ){
        var Error = function( data ){
                this.data = data;
                this.dmz = true;
            },
            page = new Controller();

        Error.prototype = new Base();

        Error.prototype.register = function(){
            this.data.sammy.get('#/error/:error(/)?', function( context ){
                switch( context.params.error ){
                    case "404":
                    default:
                        title = "Page Not Found";
                        break;
                }

                page.def( { attempt: context.params.triggeringLocation } );
            });
        };

        return Error;
    }
);
