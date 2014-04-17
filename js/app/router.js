define(
    ["require", "module", "sammy", "underscore", "render"],
    function( require, module, Sammy, _, Render ){
        var Router = {},
            r = window.rlc.config.routers,
            app = new Sammy(),
            routerCount = 0;


        Router.start = function(){
            var tmpl = new Render( "content/template.html" ),
                head = new Render( "content/header.html" );

            tmpl
                .generate( {} ) // body-specific data
                .output( "body" )
                .bind( function(){
                    head
                        .generate( {} ) // header-specific data
                        .output( "body > header" )
                        .bind( function(){} ); // header bindings
                });

            Router.registerRoutes();
        };

        Router.registerRoutes = function(){
            var data = {
                    "sammy": app
                };

            _( r ).each( function( name, i ){
                require(
                    ["routers/" + name],
                    function( r ){
                        r.register( data );
                        routerCount++;
                    }
                );
            });

            Router.watch();
        };

        Router.watch = function(){
            if( routerCount === _( r ).size() ){
                app.run( '#/' );
            }
            else{
                setTimeout( function(){ Router.watch(); }, 10 );
            }
        };

        return Router;
    }
);
