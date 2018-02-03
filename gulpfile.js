var gulp = require("gulp");
var path = require("path");

gulp.task("js", function () {
    
    var webpack = require("webpack");
    var webpackStream = require("webpack-stream");
    
    return gulp.src("./src/index.js")
        .pipe(webpackStream({
            output: {
                filename: "app.js"
            },
            module: {
                loaders: [
                    {
                        test: /\.html$/,
                        loader: "html-loader"
                    }
                ]
            },
            resolve: {
                alias: {
                    // library aliases
                },
                plugins: [
                    // webpack.ContextReplacementPlugin if necessary
                ]
            },
            devtool: "#eval"
        }, webpack))
        .pipe(gulp.dest("./build/app"));
});

gulp.task("css", function () {
    
    var concat = require("gulp-concat");
    var less = require("gulp-less");
    var sourcemaps = require("gulp-sourcemaps");
    
    // var LessPluginCleanCSS = require("less-plugin-clean-css");
    
    return gulp.src("./src/**/*.less", { base: "src" })
        .pipe(sourcemaps.init())
        .pipe(concat("app.less"))
        .pipe(less({
            plugins: [
                // new LessPluginCleanCSS()
            ]
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(path.resolve(__dirname, "build", "css")));
});

gulp.task("cssdebug", function () {
    
    var concat = require("gulp-concat");
    var less = require("gulp-less");
    
    return gulp.src("./src/**/*.less", { base: "src" })
        .pipe(concat("css-debug.less"))
        .pipe(gulp.dest("./debug"));
});

gulp.task("js-update", [ "js" ], function () {
    
    gulp.src("./build/app/app.js")
        .pipe(gulp.dest(path.resolve(__dirname, "client", "js")));
});

gulp.task("cssdev", [ "css" ], function () {
    
    gulp.watch("./src/**/*.less", { interval: 500 }, [ "css" ]);
});

gulp.task("jsdev", [ "js-update" ], function () {
    
    gulp.watch("./src/**/*.html", { interval: 500 }, [ "js-update" ]);
    gulp.watch("./src/**/*.js", { interval: 500 }, [ "js-update" ]);
});

gulp.task("webdev", [ "jsdev", "cssdev" ]);

gulp.task("default", [ "js", "css" ]);