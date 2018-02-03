/* global _, angular, jQuery */

module.exports = function (parentModulePath) {
    
    var appRoot = jQuery("body");
    
    if (0 < appRoot.length) {
        
        var appModule = _.fnCall(require("./app.module"));
        
        appRoot.ready(function () {
            
            angular.bootstrap(appRoot, [ appModule ]);
        });
    }
};