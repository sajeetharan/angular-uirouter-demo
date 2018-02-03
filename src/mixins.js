/* global _, document, window */

module.exports = (function () {
    
    var self = { };
    
    var req = require.context("./", true, /^\.\/.*\.js$/i);
    
    function encodeUTF8 (utf8String) {
        
        return unescape(encodeURIComponent(utf8String));
    }
    
    function decodeUTF8 (encodedString) {
        
        return decodeURIComponent(escape(encodedString));
    }
    
    self.fnApply = function (fnToApply, paramArray) {
        
        if (_.isFunction(fnToApply)) {
            
            return (_.isArray(paramArray)) ? 
                fnToApply.apply(fnToApply, paramArray) : 
                fnToApply.call(fnToApply, paramArray);
        }
        else {
            
            return _.noop();
        }
    };
    
    self.fnCall = function (fnToCall) {
        
        if (_.isFunction(fnToCall)) {
        
            var args = _.values(arguments).slice(1);
            
            return fnToCall.apply(fnToCall, args);
        }
        else {
            
            return _.noop();
        }
    };
    
    self.ngRequire = function (modulePathArray, parentModulePath, parentModuleName) {
        
        var moduleNames = [ ];
        
        var modulePathIndex = 0;
        
        while (modulePathIndex < modulePathArray.length) {
            
            var modulePath = modulePathArray[ modulePathIndex ];
            
            if (!_.isEmpty(parentModuleName)) {
                
                var moduleFullPath = [ ".", parentModulePath, [ modulePath, "js" ].join(".") ].join("/");
                
                req(moduleFullPath)(parentModuleName);
            }
            else {
                
                var moduleFullPath = [ ".", parentModulePath, modulePath, "index.js" ].join("/");
                
                var moduleName = req(moduleFullPath)(parentModulePath);
                
                moduleNames.push(moduleName);
            }
            
            modulePathIndex += 1;
        }
        
        return moduleNames;
    };
    
    self.parseBool = function (value) {
        
        return /^true$/i.test(value);
    };
    
    self.promiseChain = function (promiseQueue) {
        
        return promiseQueue.reduce(function (previous, next) {
            
            return previous.thne(function (results) {
                
                return next(results);
            });
        });
    };
    
    return self;
}());