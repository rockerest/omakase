define(
    ["module"],
    function( module ){
        var Config = module.config();

        window.rlc = window.rlc || {};
        window.rlc.config = Config;

        return Config;
    }
);
