define(
    ["require", "underscore"],
    function( require, _ ){
        var Events = {},
            e = window.omakase.config.events;

        Events.startup = function(){
            Events.watch();
        };

        Events.bind = function( name, callback ){
            if( document.attachEvent ){
                document.attachEvent( name, callback );
            }
            else{
                document.addEventListener( name, callback, false );
            }
        };

        Events.watch = function(){
            _( e ).each( function( co ){
                require(
                    ["events/" + co],
                    function( c ){
                        var C = new c();
                        C.registerEvents( Events.bind );
                    }
                );
            });
        };

        Events.fire = function( target, name, params ){
            if( !params ){
                params = {
                    "bubbles": true
                }
            }

            var e = new Event( name, params );
            target.dispatchEvent( e );
        };

        return Events;
    }
);
