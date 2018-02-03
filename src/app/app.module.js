/* global _, angular */

module.exports = function (parentModulePath) {
    
    var moduleName = "appModule";
    var moduleDirectory = "app";
    
    var modulePath = (!_.isEmpty(parentModulePath)) ?
        [ parentModulePath, moduleDirectory ].join("/") :
        moduleDirectory;
    
    var dependencyNames = _.union([
            // named modules, e.g. "ngSanitize"
            "ngSanitize",
            "ui.router"
        ],
        _.ngRequire([
            // child modules, e.g. "pages"
            "pages"
        ], modulePath));
    
    var memberPaths = [
        // module members, e.g. "ng.component"
        "app.states",
        "app.component",
        "app.scripts"
    ];
    
    angular.module(moduleName, dependencyNames);
    
    _.ngRequire(memberPaths, modulePath, moduleName);
    
    return moduleName;
};