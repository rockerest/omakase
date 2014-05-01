define(
    ["require", "underscore", "jquery"],
    function( require, _, $ ){
        var Events = {};

        Events.startup = function(){
            Events.watch();
        };

        Events.bind = function( name, callback, object ){
            if( !object || !(object instanceof EventTarget) ){
                object = document;
            }

            $( object ).on( name, callback );
        };

        Events.unbind = function( name, callback, object ){
            if( !object || !(object instanceof EventTarget) ){
                object = document;
            }

            $( object ).off( name, callback );
        };

        Events.watch = function(){
            _( myVU.config.events ).each( function( co ){
                require(
                    ["events/" + co],
                    function( c ){
                        var C = new c();
                        C.registerEvents( Events.bind );
                    }
                );
            });
        };

        Events.fire = function( target, name, data ){
            if( !data ){
                data = {};
            }

            if( data.type ){
                throw new Error( "Data key cannot be 'type'" );
            }
            else{
                data.type = name;
                $( target ).trigger( data );
            }
        };

        return Events;
    }
);
