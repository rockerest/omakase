define(
    ["jquery", "event"],
    function( $, Event ){
        var HeaderBinding = {};

        HeaderBinding.header = function(){
            $( '#logo-container' ).on( "click", function( e ){
                Event.fire( this, "rlc.click.header.logo" );
                return false;
            });
        };

        return HeaderBinding;
    }
);
