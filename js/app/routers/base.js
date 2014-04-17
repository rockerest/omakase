define(
    [ "underscore", "objects/user" ],
    function( _, User ){
        var RouterBase = function(){
            this.dmz = true;
            this.blacklist = [];
            this.whitelist = [];
            this.user = new User();
        };

        RouterBase.prototype.controllerRequiresAuthentication = function(){
            return this.dmz;
        };

        RouterBase.prototype.actionRequiresAuthentication = function( action ){
            if( this.dmz ){
                return _( this.blacklist ).has( action );
            }
            else{
                return !_( this.whitelist ).has( action );
            }
        };

        RouterBase.prototype.filter = function( allow, disallow, action ){
            allow       = allow     || function(){};
            disallow    = disallow  || function(){};
            action      = action    || "----------";

            if( this.controllerRequiresAuthentication() ){
                if( this.actionRequiresAuthentication( action ) ){
                    allow();
                }
                else{
                    this.user.isAuthenticated() ? allow() : disallow();
                }
            }
            else{
                if( this.actionRequiresAuthentication( action ) ){
                    this.user.isAuthenticated() ? allow() : disallow();
                }
                else{
                    allow();
                }
            }
        };

        return RouterBase;
    }
);
