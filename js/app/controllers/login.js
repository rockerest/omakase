define(
    ["page", "bindings/login"],
    function( Page, Bindings ){
        var Login = function(){
            this.root = "body div#main";
        };

        Login.prototype = new Page();

        Login.prototype.home = function(){
            this.render({
                "title": "Log In",
                "node": this.root,
                "mechanism": "output",
                "template": "content/login/home.html",
                "data": {},
                "bind": Bindings.home
            });
        };

        return Login;
    }
);
