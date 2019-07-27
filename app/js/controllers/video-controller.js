angular.module('main')
    .controller('videoController', function ($scope, videosAPI, $routeParams, $http) {
        $scope.titulo = 'teste';
        const keyApi = "836e6df687832ba77e5908b9d89f4e88"
        let valor_inicial = 1;

        if ($routeParams.id) {
            $http.get(`https://api.themoviedb.org/3/movie/${$routeParams.id}?api_key=${keyApi}&language=pt-BR`)
                .then((result) => {
                    $scope.videoDetalhe = result.data
                    console.log($scope.videoDetalhe)
                })
        }

        if ($routeParams.nb) {
            $http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${keyApi}&language=pt-BR&page=${$routeParams.nb}`)
                .then((result) => {
                    result.data.results.forEach(element => {
                        if (element.backdrop_path == null) {
                            element.backdrop_path = 'img_not_found';
                            console.log(element.backdrop_path)
                        }
                    });

                    $scope.videosPaginados = result.data;
                })
        }

        videosAPI.buscaVideos(valor_inicial)
            .then((results) => {
                $scope.videos = results.data
            })
    })