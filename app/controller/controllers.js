module.exports = function (app) {

    app.controller("myAppCtrl", function ($scope, $location) {

        $(document).on('click', '#more', function(event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 500);
        });
    });

    app.controller("blogCtrl", [function ($scope) {
        console.log("Blog Ctrl");
    }]);
    app.controller("storyCtrl", function () {

    });

    app.controller("videoCtrl", function () {

    });


    app.controller("photoCtrl", function ($rootScope,$scope,$timeout) {




        $timeout(function () {
           $("#ph").masonry();
        },1000);




    });

};