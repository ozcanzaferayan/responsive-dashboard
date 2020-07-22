var gulp = require('gulp');
var favicons = require("favicons").stream,
    log = require("fancy-log");

gulp.task("default", function() {
    return gulp.src("./img/logo.png").pipe(favicons({
            appName: "Responsive Dashboard",
            appShortName: "Dashboard",
            appDescription: "Responsive dashboard implementation based on https://dribbble.com/shots/9963575-Responsive-Dashboard-animation-design",
            developerName: "Zafer AYAN",
            developerURL: "https://twitter.com/ZaferAyan",
            lang: "tr-TR",
            background: "#fff",
            theme_color: "#3326ae",
            appleStatusBarStyle: "black-translucent",
            path: "img/favicon",
            url: "https://ozcanzaferayan.github.io/fitness-admin-panel",
            display: "standalone",
            orientation: "portrait",
            scope: "/",
            start_url: "/?homescreen=1",
            version: 1.0,
            logging: false,
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: true,
                favicons: true,
                firefox: true,
                windows: true,
                yandex: true
            },
            html: "../../index_favicons.html",
            pipeHTML: true,
            replace: true
        }))
        .on("error", log)
        .pipe(gulp.dest("./img/favicon"));
});