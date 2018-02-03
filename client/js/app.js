/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* global _ */\n\n_.mixin(__webpack_require__(1));\n\n_.fnCall(__webpack_require__(6));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* global _, document, window */\n\nmodule.exports = (function () {\n    \n    var self = { };\n    \n    var req = __webpack_require__(7);\n    \n    function encodeUTF8 (utf8String) {\n        \n        return unescape(encodeURIComponent(utf8String));\n    }\n    \n    function decodeUTF8 (encodedString) {\n        \n        return decodeURIComponent(escape(encodedString));\n    }\n    \n    self.fnApply = function (fnToApply, paramArray) {\n        \n        if (_.isFunction(fnToApply)) {\n            \n            return (_.isArray(paramArray)) ? \n                fnToApply.apply(fnToApply, paramArray) : \n                fnToApply.call(fnToApply, paramArray);\n        }\n        else {\n            \n            return _.noop();\n        }\n    };\n    \n    self.fnCall = function (fnToCall) {\n        \n        if (_.isFunction(fnToCall)) {\n        \n            var args = _.values(arguments).slice(1);\n            \n            return fnToCall.apply(fnToCall, args);\n        }\n        else {\n            \n            return _.noop();\n        }\n    };\n    \n    self.ngRequire = function (modulePathArray, parentModulePath, parentModuleName) {\n        \n        var moduleNames = [ ];\n        \n        var modulePathIndex = 0;\n        \n        while (modulePathIndex < modulePathArray.length) {\n            \n            var modulePath = modulePathArray[ modulePathIndex ];\n            \n            if (!_.isEmpty(parentModuleName)) {\n                \n                var moduleFullPath = [ \".\", parentModulePath, [ modulePath, \"js\" ].join(\".\") ].join(\"/\");\n                \n                req(moduleFullPath)(parentModuleName);\n            }\n            else {\n                \n                var moduleFullPath = [ \".\", parentModulePath, modulePath, \"index.js\" ].join(\"/\");\n                \n                var moduleName = req(moduleFullPath)(parentModulePath);\n                \n                moduleNames.push(moduleName);\n            }\n            \n            modulePathIndex += 1;\n        }\n        \n        return moduleNames;\n    };\n    \n    self.parseBool = function (value) {\n        \n        return /^true$/i.test(value);\n    };\n    \n    self.promiseChain = function (promiseQueue) {\n        \n        return promiseQueue.reduce(function (previous, next) {\n            \n            return previous.thne(function (results) {\n                \n                return next(results);\n            });\n        });\n    };\n    \n    return self;\n}());\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/mixins.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/mixins.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("/* global _, angular */\n\nmodule.exports = function (parentModulePath) {\n    \n    var moduleName = \"appModule\";\n    var moduleDirectory = \"app\";\n    \n    var modulePath = (!_.isEmpty(parentModulePath)) ?\n        [ parentModulePath, moduleDirectory ].join(\"/\") :\n        moduleDirectory;\n    \n    var dependencyNames = _.union([\n            // named modules, e.g. \"ngSanitize\"\n            \"ngSanitize\",\n            \"ui.router\"\n        ],\n        _.ngRequire([\n            // child modules, e.g. \"pages\"\n            \"pages\"\n        ], modulePath));\n    \n    var memberPaths = [\n        // module members, e.g. \"ng.component\"\n        \"app.states\",\n        \"app.component\",\n        \"app.scripts\"\n    ];\n    \n    angular.module(moduleName, dependencyNames);\n    \n    _.ngRequire(memberPaths, modulePath, moduleName);\n    \n    return moduleName;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/app.module.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/app.module.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* global _, angular, jQuery */\n\nmodule.exports = function (parentModulePath) {\n    \n    var appRoot = jQuery(\"body\");\n    \n    if (0 < appRoot.length) {\n        \n        var appModule = _.fnCall(__webpack_require__(2));\n        \n        appRoot.ready(function () {\n            \n            angular.bootstrap(appRoot, [ appModule ]);\n        });\n    }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/index.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/index.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("/* global _, angular */\n\nmodule.exports = function (parentModulePath) {\n    \n    var moduleName = \"homePageModule\";\n    var moduleDirectory = \"homePage\";\n    \n    var modulePath = (!_.isEmpty(parentModulePath)) ?\n        [ parentModulePath, moduleDirectory ].join(\"/\") :\n        moduleDirectory;\n    \n    var dependencyNames = _.union([\n            // named modules, e.g. \"ngSanitize\"\n        ],\n        _.ngRequire([\n            // child modules, e.g. \"pages\"\n        ], modulePath));\n    \n    var memberPaths = [\n        // module members, e.g. \"ng.component\"\n        \"homePage.component\"\n    ];\n    \n    angular.module(moduleName, dependencyNames);\n    \n    _.ngRequire(memberPaths, modulePath, moduleName);\n    \n    return moduleName;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/pages/homePage/homePage.module.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/pages/homePage/homePage.module.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("/* global _, angular */\n\nmodule.exports = function (parentModulePath) {\n    \n    var moduleName = \"pagesModule\";\n    var moduleDirectory = \"pages\";\n    \n    var modulePath = (!_.isEmpty(parentModulePath)) ?\n        [ parentModulePath, moduleDirectory ].join(\"/\") :\n        moduleDirectory;\n    \n    var dependencyNames = _.union([\n            // named modules, e.g. \"ngSanitize\"\n        ],\n        _.ngRequire([\n            // child modules, e.g. \"pages\"\n            \"homePage\"\n        ], modulePath));\n    \n    var memberPaths = [\n        // module members, e.g. \"ng.component\"\n        \"pages.states\",\n        \"pages.scripts\"\n    ];\n    \n    angular.module(moduleName, dependencyNames);\n    \n    _.ngRequire(memberPaths, modulePath, moduleName);\n    \n    return moduleName;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/pages/pages.module.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/pages/pages.module.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* global _, document, window */\n\nmodule.exports = function () {\n    \n    _.fnCall(__webpack_require__(3));\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/init.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./app/app.component.js\": 8,\n\t\"./app/app.module.js\": 2,\n\t\"./app/app.scripts.js\": 10,\n\t\"./app/app.states.js\": 11,\n\t\"./app/index.js\": 3,\n\t\"./app/pages/homePage/homePage.component.js\": 12,\n\t\"./app/pages/homePage/homePage.module.js\": 4,\n\t\"./app/pages/homePage/index.js\": 14,\n\t\"./app/pages/index.js\": 15,\n\t\"./app/pages/pages.module.js\": 5,\n\t\"./app/pages/pages.scripts.js\": 16,\n\t\"./app/pages/pages.states.js\": 17,\n\t\"./index.js\": 0,\n\t\"./init.js\": 6,\n\t\"./mixins.js\": 1\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) // check for number or string\n\t\tthrow new Error(\"Cannot find module '\" + req + \"'.\");\n\treturn id;\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 7;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src ^\\.\\/.*\\.js$/\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src_^\\.\\/.*\\.js$/?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* globals angular */\n\nmodule.exports = function (parentModuleName) {\n    \n    var AppController = function () {\n        \n        var ctrl = this;\n        \n        ctrl.$onInit = function () {\n            \n            //\n        };\n    };\n    \n    AppController.$inject = [ ];\n    \n    var AppComponent = {\n        controller: \"appController\",\n        template: __webpack_require__(9),\n        bindings: {\n            //\n        }\n    };\n    \n    angular.module(parentModuleName)\n        .controller(\"appController\", AppController)\n        .component(\"appComponent\", AppComponent);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/app.component.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/app.component.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n    <h1>AngularJS UI-Router Demo App</h1>\\n    <hr />\\n    <div ui-view=\\\"content\\\"></div>\\n</div>\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/app.component.html\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/app.component.html?");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("/* global angular */\n\nmodule.exports = function (parentModuleName) {\n    \n    var AppStateEvents = function ($trace, $transitions) {\n        \n        $trace.enable(\"TRANSITION\");\n        \n        $transitions.onBefore({ }, function (transition) {\n            \n            //\n        });\n        \n        $transitions.onCreate({ }, function (transition) {\n            \n            //\n        });\n        \n        $transitions.onStart({ }, function (transition) {\n            \n            //\n        });\n        \n        $transitions.onEnter({ }, function (transition) {\n            \n            //\n        });\n        \n        $transitions.onExit({ }, function (transition) {\n            \n            //\n        });\n        \n        $transitions.onSuccess({ }, function (transition) {\n            \n            //\n        });\n        \n        $transitions.onError({ }, function (transition) {\n            \n            //\n        });\n    };\n    \n    AppStateEvents.$inject = [ \"$trace\", \"$transitions\" ];\n    \n    angular.module(parentModuleName)\n        .run(AppStateEvents);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/app.scripts.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/app.scripts.js?");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

eval("/* global _, angular */\n\nmodule.exports = function (parentModuleName) {\n    \n    var Resolve = {\n        // resolve methods\n    };\n    \n    var States = {\n        \"app\": {\n            path: \"\",\n            routing: null,\n            definition: {\n                name: \"app\",\n                url: \"\",\n                onEnter: function () {\n                    \n                    console.info(\"App state entered.\");\n                },\n                params: {\n                    //\n                },\n                resolve: {\n                    //\n                },\n                views: {\n                    \"app@\": {\n                        component: \"appComponent\"\n                    }\n                },\n                abstract: true\n            }\n        }\n    };\n    \n    var AppRouting = function ($stateProvider) {\n        \n        _.each(States, function (state) {\n            \n            $stateProvider.state(state.definition);\n        });\n    };\n    \n    AppRouting.$inject = [ \"$stateProvider\" ];\n    \n    var DefaultRouting = function ($locationProvider, $urlRouterProvider) {\n        \n        // $locationProvider.hashPrefix(\"!\");\n        \n        $locationProvider.html5Mode(true);\n        \n        $urlRouterProvider.when(\"/\", _.fnCall(function () {\n            \n            var BaseRouting = function ($state, $timeout) {\n                \n                $timeout(function () {\n                    \n                    $state.transitionTo(\"homePage\");\n                });\n            };\n            \n            BaseRouting.$inject = [ \"$state\", \"$timeout\" ];\n            \n            return BaseRouting;\n        }));\n    };\n    \n    angular.module(parentModuleName)\n        .config(AppRouting)\n        .config(DefaultRouting);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/app.states.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/app.states.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* globals _, angular */\n\nmodule.exports = function (parentModuleName) {\n    \n    var HomePageController = function ($state) {\n        \n        var ctrl = this;\n        \n        var ctrlParams = [\n            \"test\"\n        ];\n        \n        var getParams = function (paramObj) {\n            \n            var paramChain = _.chain(paramObj);\n            \n            return paramChain\n                .pick.apply(paramChain, ctrlParams)\n                .mapObject((param) => {\n                    \n                    return String(param);\n                })\n                .value();\n        };\n        \n        ctrl.$onInit = function () {\n            \n            ctrl.params = getParams($state.params);\n        };\n    };\n    \n    HomePageController.$inject = [ \"$state\" ];\n    \n    var HomePageComponent = {\n        controller: \"homePageController\",\n        template: __webpack_require__(13),\n        bindings: {\n            //\n        }\n    };\n    \n    angular.module(parentModuleName)\n        .controller(\"homePageController\", HomePageController)\n        .component(\"homePageComponent\", HomePageComponent);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/pages/homePage/homePage.component.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/pages/homePage/homePage.component.js?");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n    <h2>Home Page</h2>\\n    <br />\\n    <div>Test:&nbsp;<span ng-bind=\\\"$ctrl.params.test\\\" /></div>\\n</div>\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/pages/homePage/homePage.component.html\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/pages/homePage/homePage.component.html?");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function (parentModulePath) {\n    \n    return __webpack_require__(4)(parentModulePath);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/pages/homePage/index.js\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/pages/homePage/index.js?");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function (parentModulePath) {\n    \n    return __webpack_require__(5)(parentModulePath);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/pages/index.js\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/pages/index.js?");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

eval("/* global angular */\n\nmodule.exports = function (parentModuleName) {\n    \n    var DebugWriter = function () {\n        \n        console.debug(\"Test from AngularJS app.\");\n    };\n    \n    DebugWriter.$inject = [ ];\n    \n    angular.module(parentModuleName)\n        .run(DebugWriter);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/pages/pages.scripts.js\n// module id = 16\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/pages/pages.scripts.js?");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

eval("/* global _, angular */\n\nmodule.exports = function (parentModuleName) {\n    \n    var Resolve = {\n        // resolve methods\n    };\n    \n    var States = {\n        \"homePage\": {\n            path: \"/home\",\n            routing: null,\n            definition: {\n                parent: \"app\",\n                name: \"homePage\",\n                url: \"/home?test\",\n                params: {\n                    test: null\n                },\n                resolve: {\n                    //\n                },\n                views: {\n                    \"content@app\": {\n                        component: \"homePageComponent\"\n                    }\n                }\n            }\n        }\n    };\n    \n    var PageRouting = function ($stateProvider) {\n        \n        _.each(States, function (state) {\n            \n            $stateProvider.state(state.definition);\n        });\n    };\n    \n    PageRouting.$inject = [ \"$stateProvider\" ];\n    \n    var UrlRouting = function ($urlRouterProvider) {\n        \n        _.each(States, function (state) {\n            \n            if (!!state.routing) {\n                \n                $urlRouterProvider.when(state.path, state.routing);\n            }\n        });\n    };\n    \n    UrlRouting.$inject = [ \"$urlRouterProvider\" ];\n    \n    angular.module(parentModuleName)\n        .config(PageRouting)\n        .config(UrlRouting);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/pages/pages.states.js\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/app/pages/pages.states.js?");

/***/ })
/******/ ]);