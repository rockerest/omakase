define(
    ["page"],
    function( Page ){
        var Error = function(){
            this.root = "body div#main";
        };

        Error.prototype = new Page();

        Error.prototype.def = function( data ){
            this.render({
                "node": this.root,
                "mechanism": "output",
                "template": "content/error/default.html",
                "data": data,
                "bind": function(){}
            });
        };

        return Error;
    }
);
