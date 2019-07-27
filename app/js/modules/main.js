angular.module("main", ['ngRoute', 'ngResource'])

    .config(function ($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "app/templates/videos.html",
                controller: "videoController"
            })
            .when("/video/:id", {
                templateUrl: "app/templates/information.html",
                controller: "videoController"
            })
            .when("/video/page/:nb", {
                templateUrl: "app/templates/videos-paginados.html",
                controller: "videoController"
            })

        $routeProvider.otherwise({ redirectTo: "/home" });

    })