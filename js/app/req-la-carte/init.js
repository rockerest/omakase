define(
    ["jquery"],
    function( $ ){
        var Init = {};

        Init.startApp = function(){
            $(function(){
                $( ".preloader" ).hide();
                console.log( "App started." );
            });
        };

        return Init;
    }
)
