/* globals angular */

module.exports = function (parentModuleName) {
    
    var NgController = function () {
        
        var ctrl = this;
        
        ctrl.$onInit = function () {
            
            //
        };
    };
    
    NgController.$inject = [ ];
    
    var NgComponent = {
        controller: "ngController",
        template: require("./ng.component.html"),
        bindings: {
            //
        }
    };
    
    angular.module(parentModuleName)
        .controller("ngController", NgController)
        .component("ngComponent", NgComponent);
};