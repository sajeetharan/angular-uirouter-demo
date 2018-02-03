/* global angular */

module.exports = function (parentModuleName) {
    
    var DebugWriter = function () {
        
        console.debug("Test from AngularJS app.");
    };
    
    DebugWriter.$inject = [ ];
    
    angular.module(parentModuleName)
        .run(DebugWriter);
};