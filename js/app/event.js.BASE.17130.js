define(
    ["require", "underscore"],
    function( require, _ ){
        var Events = {},
            e = window.omakase.config.events;

        Events.startup = function(){
            Events.watch();
        };

        Events.bind = function( name, callback, object ){
            if( !object || !(object instanceof EventTarget) ){
                object = document;
            }

            if( object.attachEvent ){
                object.attachEvent( name, callback );
            }
            else{
                object.addEventListener( name, callback, false );
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

        Events.fire = function( target, name, data, params ){
            if( !params ){
                params = {
                    "bubbles": true
                }
            }

            var e = new Event( name, params );
            e.data = data;
            target.dispatchEvent( e );
        };

        return Events;
    }
);
