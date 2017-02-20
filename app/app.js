var app = angular.module("MangoTea", ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'template/home.html'
        }).when('/story', {
        templateUrl: 'template/home.html',
        controller: 'storyCtrl'
    }).when('/video', {
        templateUrl: 'template/home.html',
        controller: 'videoCtrl'
    }).when('/blog', {
        templateUrl: "template/blog.html",
        controller: "blogCtrl"
    })
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


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var px = 100;
    //>=, not <=
    if (scroll >= px) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("scroll_header");
    }
    if (scroll <= px) {
        //clearHeader, not clearheader - caps H
        $(".navbar").removeClass("scroll_header").animate("slow");
    }
}); //missing );