define(
    ["require", "module", "sammy", "underscore", "render", "components/header"],
    function( require, module, Sammy, _, Render, Header ){
        var Router = {},
            r = window.rlc.config.routers,
            app = new Sammy(),
            routerCount = 0;


        Router.start = function(){
            var tmpl = new Render( "content/template.html" ),
                head = new Header();

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

            _( r ).each( function( name, i ){
                require(
                    ["routers/" + name],
                    function( r ){
                        var R = new r( data );
                        R.register();
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
