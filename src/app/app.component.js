/* globals angular */

module.exports = function (parentModuleName) {
    
    var AppController = function () {
        
        var ctrl = this;
        
        ctrl.$onInit = function () {
            
            //
        };
    };
    
    AppController.$inject = [ ];
    
    var AppComponent = {
        controller: "appController",
        template: require("./app.component.html"),
        bindings: {
            //
        }
    };
    
    angular.module(parentModuleName)
        .controller("appController", AppController)
        .component("appComponent", AppComponent);
};