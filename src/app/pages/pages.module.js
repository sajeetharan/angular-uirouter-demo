/* global _, angular */

module.exports = function (parentModulePath) {
    
    var moduleName = "pagesModule";
    var moduleDirectory = "pages";
    
    var modulePath = (!_.isEmpty(parentModulePath)) ?
        [ parentModulePath, moduleDirectory ].join("/") :
        moduleDirectory;
    
    var dependencyNames = _.union([
            // named modules, e.g. "ngSanitize"
        ],
        _.ngRequire([
            // child modules, e.g. "pages"
            "homePage"
        ], modulePath));
    
    var memberPaths = [
        // module members, e.g. "ng.component"
        "pages.states",
        "pages.scripts"
    ];
    
    angular.module(moduleName, dependencyNames);
    
    _.ngRequire(memberPaths, modulePath, moduleName);
    
    return moduleName;
};