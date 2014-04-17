define(
    ["event", "jquery", "transfer", "cookies"],
    function( Event, $, Transfer, Cookies ){
        var LoginEvents = function(){},
            Transfer = new Transfer();

        LoginEvents.prototype.registerEvents = function( binder ){
            this.binder = binder;

            this.registerHomeEvents();
        };

        LoginEvents.prototype.registerHomeEvents = function(){
            this.binder( "rlc.click.login.home.authenticate", function( e ){
                var clicked = e.target,
                    $clicked = $( clicked ),
                    credentials = {
                        "username": $clicked.siblings( '[name="username"]' ).val(),
                        "password": $clicked.siblings( '[name="password"]' ).val()
                    };

                $.when(
                    Transfer.requestAuthentication( credentials )
                )
                .done( function( data, stat, x ){
                    Cookies( "authentication", 1 );
                    window.location = "/#/dashboard";
                })
                .fail( function( x, stat, t ){
                    console.log( x, stat, t );
                });
            });
        };

        return LoginEvents;
    }
);
