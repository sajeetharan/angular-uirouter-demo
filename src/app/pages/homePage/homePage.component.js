/* globals _, angular */

module.exports = function (parentModuleName) {
    
    var HomePageController = function ($state) {
        
        var ctrl = this;
        
        var ctrlParams = [
            "test"
        ];
        
        var getParams = function (paramObj) {
            
            var paramChain = _.chain(paramObj);
            
            return paramChain
                .pick.apply(paramChain, ctrlParams)
                .mapObject((param) => {
                    
                    return String(param);
                })
                .value();
        };
        
        ctrl.$onInit = function () {
            
            ctrl.params = getParams($state.params);
        };
    };
    
    HomePageController.$inject = [ "$state" ];
    
    var HomePageComponent = {
        controller: "homePageController",
        template: require("./homePage.component.html"),
        bindings: {
            //
        }
    };
    
    angular.module(parentModuleName)
        .controller("homePageController", HomePageController)
        .component("homePageComponent", HomePageComponent);
};