angular.module("main")
    .factory("videosAPI", function ($http, config) {

        this.buscaVideos = function () {
            return $http.get(`${config.baseUrl}now_playing?api_key=${config.keyApi}&language=pt-BR&page=1`)
        };
        return { buscaVideos: this.buscaVideos };
    });
