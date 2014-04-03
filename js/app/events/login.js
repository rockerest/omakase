define(
    ["event", "jquery"],
    function( Event, $ ){
        var LoginEvents = function(){};

        LoginEvents.prototype.registerEvents = function( binder ){
            this.binder = binder;

            this.registerHomeEvents();
        };

        LoginEvents.prototype.registerHomeEvents = function(){
            this.binder( "rlc.click.login.home.authenticate", function( e ){
                var clicked = e.target,
                    $clicked = $( clicked ),
                    data = {
                        "username": $clicked.siblings( '[name="username"]' ).val(),
                        "password": $clicked.siblings( '[name="password"]' ).val()
                    };

                console.info( data );
            });
        };

        return LoginEvents;
    }
)
