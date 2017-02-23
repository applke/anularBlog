require('angular');
require('angular-route');
require('angular-animate');
var app = angular.module("MangoTea", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            template: require('../template/home.html')
        }).when('/story', {
        template: require('../template/home.html'),
        controller: 'storyCtrl'
    }).when('/video', {
        template: require('../template/home.html'),
        controller: 'videoCtrl'
    }).when('/blog', {
        template: require('../template/blog.html'),
        controller: "blogCtrl"
    }).when('/photo',{
        template: require('../template/photo.html'),
        controller:"photoCtrl"
    })
        .otherwise({
        template: require('../template/home.html')
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var px = 100;
        if (scroll >= px) {
            $(".navbar").addClass("scroll_header");
        }
        if (scroll <= px) {
            $(".navbar").removeClass("scroll_header").animate("slow");
        }
    });
}]);

app.run(function ($rootScope, $timeout) {
    $rootScope.loadingState = false;

    $rootScope.$on("$routeChangeStart", function () {
        $rootScope.loadingState = true;
    });
    $rootScope.$on("$routeChangeSuccess", function () {
        $timeout(function () {
            $rootScope.loadingState = false;
        }, 500);
    });
});


require("./controller/controllers.js")(app);
require("./directives/directives.js")(app);
require("../bower_components/imagesloaded/imagesloaded");
require ('../less/index.less');