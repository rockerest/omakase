requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "paths":{
        "lib":          "../../../vendor",

        "jquery":       ["//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min", "../../../vendor/jquery/jquery.min"],
        "sammy":        "../../vendor/sammy/lib/sammy",
        "underscore":   "../../vendor/underscore/underscore",
        "moment":       "../../vendor/moment/min/moment.min"
    },
    "shim":{
        "sammy":{
            "deps": ["jquery"]
        }
    },
    "config":{
        "router":{
            "controllers":[
                "login"
            ]
        }
    }
});

require(
    ["jquery", "init"],
    function( $, Init ){
        $(function(){
            Init.startApp();
        });
    }
);
