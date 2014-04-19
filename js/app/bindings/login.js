define(
    ["jquery", "event"],
    function( $, Event ){
        var LoginBinding = {};

        LoginBinding.home = function(){
            $( 'button[type="submit"]' ).on( "click", function( e ){
                Event.fire( this, "omakase.click.login.home.authenticate" );
                return false;
            });
        };

        return LoginBinding;
    }
);
