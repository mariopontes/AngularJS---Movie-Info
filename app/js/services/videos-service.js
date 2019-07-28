angular.module("main")
    .factory("videosAPI", function ($http, config) {

        this.buscaVideos = function () {
            return $http.get(`${config.baseUrl}now_playing?api_key=${config.keyApi}&language=pt-BR`)
        };

        this.buscaUrl = function (id) {
            return $http.get(`${config.baseUrl}${id}/videos?api_key=${config.keyApi}&language=pt-BR`)
        };

        return {
            buscaVideos: this.buscaVideos,
            buscaUrl: this.buscaUrl
        };
    });
