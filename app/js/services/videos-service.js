angular.module("main")
    .factory("videosAPI", function ($http, config) {

        this.buscaVideos = function () {
            return $http.get(`${config.baseUrl}now_playing?api_key=${config.keyApi}&language=pt-22`)
        };
        return { buscaVideos: this.buscaVideos };
    });
