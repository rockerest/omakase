define(
    ["require", "module", "sammy", "underscore", "render", "event", "components/header"],
    function( require, module, Sammy, _, Render, Event, Header ){
        var Router = {},
            routes = window.rlc.config.routers,
            app = new Sammy(),
            routerCount = 0;


        Router.start = function(){
            var tmpl = new Render( "content/template.html" ),
                head = new Header();

            Event.bind( "rlc.core.routing.load.done", function(){
                app.run( '#/' );
            });

            tmpl
                .generate( {} ) // body-specific data
                .output( "body" )
                .bind( function(){
                    head
                        .generate( {} ) // header-specific data
                        .output()
                        .bind();
                });

            Router.registerRoutes();
        };

        Router.registerRoutes = function(){
            var data = {
                    "sammy": app
                };

            app.notFound = function(){
                this.runRoute( "get", "#/error/404", {"triggeringLocation": this.last_location[1]} );
                return false;
            };

            _( routes ).each( function( name, i ){
                require(
                    ["routers/" + name],
                    function( r ){
                        var R = new r( data );
                        R.register();
                        routerCount++;

                        if( routerCount === _( routes ).size() ){
                            Event.fire( document, "rlc.core.routing.load.done" );
                        }
                    }
                );
            });
        };

        return Router;
    }
);
