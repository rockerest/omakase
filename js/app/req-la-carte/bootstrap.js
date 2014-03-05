requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "paths": {
        "jquery":       ["//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min", "../../../vendor/jquery/dist/jquery.min"],
        "sammy":        "../../../vendor/sammy/lib/min/sammy-latest.min",
        "underscore":   "../../../vendor/underscore/underscore"
    }
});

require(
    ["init"],
    function( Init ){
        Init.startApp();
    }
);
