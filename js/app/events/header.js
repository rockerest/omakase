define(
    ["jquery", "event"],
    function( $, Event ){
        var HeaderEvents = function(){};

        HeaderEvents.prototype.registerEvents = function( binder ){
            this.binder = binder;

            this.registerHeaderEvents();
        };

        HeaderEvents.prototype.registerHeaderEvents = function(){
            this.binder( "rlc.click.header.logo", function( e ){
                window.location = "/#/";
            });
        };

        return HeaderEvents;
    }
);
