/* global _, angular */

module.exports = function (parentModuleName) {
    
    var Resolve = {
        // resolve methods
    };
    
    var States = {
        "app": {
            path: "",
            routing: null,
            definition: {
                name: "app",
                url: "",
                onEnter: function () {
                    
                    console.info("App state entered.");
                },
                params: {
                    //
                },
                resolve: {
                    //
                },
                views: {
                    "app@": {
                        component: "appComponent"
                    }
                },
                abstract: true
            }
        }
    };
    
    var AppRouting = function ($stateProvider) {
        
        _.each(States, function (state) {
            
            $stateProvider.state(state.definition);
        });
    };
    
    AppRouting.$inject = [ "$stateProvider" ];
    
    var DefaultRouting = function ($locationProvider, $urlRouterProvider) {
        
        // $locationProvider.hashPrefix("!");
        
        $locationProvider.html5Mode(true);
        
        $urlRouterProvider.when("/", _.fnCall(function () {
            
            var BaseRouting = function ($state, $timeout) {
                
                $timeout(function () {
                    
                    $state.transitionTo("homePage");
                });
            };
            
            BaseRouting.$inject = [ "$state", "$timeout" ];
            
            return BaseRouting;
        }));
    };
    
    angular.module(parentModuleName)
        .config(AppRouting)
        .config(DefaultRouting);
};