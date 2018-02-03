/* global angular */

module.exports = function (parentModuleName) {
    
    var AppStateEvents = function ($trace, $transitions) {
        
        $trace.enable("TRANSITION");
        
        $transitions.onBefore({ }, function (transition) {
            
            //
        });
        
        $transitions.onCreate({ }, function (transition) {
            
            //
        });
        
        $transitions.onStart({ }, function (transition) {
            
            //
        });
        
        $transitions.onEnter({ }, function (transition) {
            
            //
        });
        
        $transitions.onExit({ }, function (transition) {
            
            //
        });
        
        $transitions.onSuccess({ }, function (transition) {
            
            //
        });
        
        $transitions.onError({ }, function (transition) {
            
            //
        });
    };
    
    AppStateEvents.$inject = [ "$trace", "$transitions" ];
    
    angular.module(parentModuleName)
        .run(AppStateEvents);
};