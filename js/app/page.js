define(
    ["underscore", "render"],
    function( _, Render ){
        var Page = function(){};

        Page.prototype.render = function( options ){
            var renderer = new Render( options.template );

            renderer
                .generate( options.data );

            if( typeof options.mechanism === "string" ){
                renderer[ options.mechanism ]( options.node );
            }
            else{
                if( typeof options.mechanism === "function" ){
                    renderer.raw( options.mechanism );
                }
            }

            if( typeof options.bind === "function" ){
                renderer.bind( options.bind );
            }
        };

        return Page;
    }
);
