angular.module("main")
    .factory("chartistService", function ($http, config) {

        this.buscaInfo = function () {
            return $http.get(`${config.baseUrl}now_playing?api_key=${config.keyApi}&language=pt-BR&page=1`)
        };
        return { buscaInfo: this.buscaInfo };
    });
