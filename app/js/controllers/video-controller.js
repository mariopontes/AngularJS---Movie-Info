angular.module('main')
    .controller('videoController', function ($scope, videosAPI, $routeParams, $http, config) {

        $scope.mostraTrailer = false;
        $scope.openTrailer = 'Assita o Trailer';

        if ($routeParams.id) {
            $http.get(`${config.baseUrl}${$routeParams.id}?api_key=${config.keyApi}&language=pt-BR`)
                .then(
                    (result) => { $scope.videoDetalhe = result.data; },
                    (err) => { $scope.errorDetail = err }
                );
        };

        if ($routeParams.nb) {
            $http.get(`${config.baseUrl}now_playing?api_key=${config.keyApi}&language=pt-BR&page=${$routeParams.nb}`)
                .then(
                    (result) => {
                        result.data.results.forEach(element => {
                            if (element.backdrop_path == null) {
                                element.backdrop_path = 'img_not_found';
                            };
                        });
                        $scope.videosPaginados = result.data;
                    },
                    (err) => { $scope.errorPagination = err }
                );
        };

        videosAPI.buscaVideos()
            .then(
                (results) => {
                    $scope.videos = results.data
                    $scope.valorArray = { valor: [] }

                    for (let i = 1; i < 4; i++) {
                        $scope.valorArray.valor.push(i)
                    }

                    $scope.videos.results.forEach(element => {
                        if (element.backdrop_path == null) {
                            element.backdrop_path = 'img_not_found';
                        };
                    });
                },
                (err) => { $scope.error = err }
            );



        $scope.carregarTrailer = function () {
            videosAPI.buscaUrl($routeParams.id)
                .then(
                    (results) => {
                        if (results.data.results.length != 0) {
                            let keyUrl;
                            let arrayTrailer = results.data.results;
                            let inputValue = document.getElementById('video');

                            for (let i = 0; i < arrayTrailer.length; i++) {
                                if (arrayTrailer[i].type == 'Trailer') {
                                    keyUrl = arrayTrailer[i].key;
                                    break;
                                }
                            }
                            $scope.mostraTrailer = !$scope.mostraTrailer;
                            let urlConcatenada = `https://www.youtube.com/embed/${keyUrl}`;
                            inputValue.src = urlConcatenada;

                            if ($scope.mostraTrailer) {
                                $scope.openTrailer = 'Fechar Trailer'
                            } else {
                                $scope.openTrailer = 'Assita o Trailer'
                            }

                        } else {
                            alert('Trailer indisponivel')
                        }
                    }
                );
        };

    });