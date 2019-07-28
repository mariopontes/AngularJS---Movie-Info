angular.module('main')
    .controller('videoController', function ($scope, videosAPI, $routeParams, $http, config) {
        if ($routeParams.id) {
            $http.get(`${config.baseUrl}${$routeParams.id}?api_key=${config.keyApi}&language=pt-BR`)
                .then((result) => {
                    $scope.videoDetalhe = result.data;
                    console.log($scope.videoDetalhe);
                });
        };

        if ($routeParams.nb) {
            $http.get(`${config.baseUrl}now_playing?api_key=${config.keyApi}&language=pt-BR&page=${$routeParams.nb}`)
                .then((result) => {
                    result.data.results.forEach(element => {
                        if (element.backdrop_path == null) {
                            element.backdrop_path = 'img_not_found';
                        };
                    });

                    $scope.videosPaginados = result.data;
                });
        };

        videosAPI.buscaVideos()
            .then((results) => {
                $scope.videos = results.data;
            });

    });