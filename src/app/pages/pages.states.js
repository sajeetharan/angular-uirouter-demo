/* global _, angular */

module.exports = function (parentModuleName) {
    
    var Resolve = {
        // resolve methods
    };
    
    var States = {
        "homePage": {
            path: "/home",
            routing: null,
            definition: {
                parent: "app",
                name: "homePage",
                url: "/home?test",
                params: {
                    test: null
                },
                resolve: {
                    //
                },
                views: {
                    "content@app": {
                        component: "homePageComponent"
                    }
                }
            }
        }
    };
    
    var PageRouting = function ($stateProvider) {
        
        _.each(States, function (state) {
            
            $stateProvider.state(state.definition);
        });
    };
    
    PageRouting.$inject = [ "$stateProvider" ];
    
    var UrlRouting = function ($urlRouterProvider) {
        
        _.each(States, function (state) {
            
            if (!!state.routing) {
                
                $urlRouterProvider.when(state.path, state.routing);
            }
        });
    };
    
    UrlRouting.$inject = [ "$urlRouterProvider" ];
    
    angular.module(parentModuleName)
        .config(PageRouting)
        .config(UrlRouting);
};