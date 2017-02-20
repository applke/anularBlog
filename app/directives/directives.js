app.directive("navbar", ['$routeParams', '$location', function ($routeParams, $location) {
    return {
        templateUrl: "template/navbar.html",
        controller: function ($scope) {
            $scope.dev = '';
            $scope.menu = [
                {
                    name: "home",
                    location: "/"
                },
                {
                    name: "blog",
                    location: "/blog"
                },
                {
                    name: "video",
                    location: "/video"
                },
                {
                    name: "photo",
                    location: "/photo"
                }
            ];
            $scope.active = -1;
            $scope.isActive = function (id) {
                return id === $scope.active ? 'active' : '';
            };

            $scope.$on("$routeChangeSuccess", function () {

                var loc = $location.path();
                for (var i = 0; i < $scope.menu.length; i++) {
                    if (loc === $scope.menu[i].location) {

                        return $scope.active = i;

                    }
                }
                $scope.active = -1;

            });


        }
    }
}]);


app.directive("photostory", [function () {
    return {
        templateUrl: "/template/photoStory.html",
        controller: function ($scope) {
            $scope.activeImage=-1;
            $scope.active = function (id) {
                $scope.activeImage = id;
            };
            $scope.images = [{
                imageTitle: "Зачем скрывать свою красоту?",
                imageStory: "Обнаж11ай свою душу и показывай ее светлую сторону!",
                imageUrl: "/images/img1.jpg"
            }, {
                imageTitle: "Видишь эту красоту?",
                imageStory: "Врядли ты сможешь ее ощутить без легкости в своем уме и спокойной музыки.",
                imageUrl: "/images/img2.jpg"
            }, {
                imageTitle: "Это все вдохновение!",
                imageStory: "Ты можешь так же.",
                imageUrl: "/images/img3.jpg"
            }, {
                imageTitle: "Завтра снова рутина?",
                imageStory: "Затяни свои проблемы потуже и ощути свою свободу!",
                imageUrl: "/images/img4.jpg"

            }];
        }
    };
}]);
