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

            this.setTitle( options.title );
        };

        Page.prototype.setTitle = function( title ){
            var suffix = "Req-La-Carte";

            if( !title ){
                title = suffix;
            }
            else{
                title = title + " :: " + suffix;
            }

            document.title = title;
        };

        return Page;
    }
);
