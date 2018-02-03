/* global _, angular */

module.exports = function (parentModulePath) {
    
    var moduleName = "moduleName";
    var moduleDirectory = "moduleDirectory";
    
    var modulePath = (!_.isEmpty(parentModulePath)) ?
        [ parentModulePath, moduleDirectory ].join("/") :
        moduleDirectory;
    
    var dependencyNames = _.union([
            // named modules, e.g. "ngSanitize"
        ],
        _.ngRequire([
            // child modules, e.g. "pages"
        ], modulePath));
    
    var memberPaths = [
        // module members, e.g. "ng.component"
    ];
    
    angular.module(moduleName, dependencyNames);
    
    _.ngRequire(memberPaths, modulePath, moduleName);
    
    return moduleName;
};