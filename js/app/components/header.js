define(
    ["render", "bindings/header"],
    function( Render, Bindings ){
        var Header = function(){
            this.renderer = new Render( "content/header.html" );
        };

        Header.prototype.generate = function( data ){
            this.renderer.generate( data );

            return this;
        };

        Header.prototype.output = function(){
            this.renderer.output( "body > header" );

            return this;
        };

        Header.prototype.bind = function(){
            this.renderer.bind( Bindings.header );

            return this;
        };

        return Header;
    }
);
