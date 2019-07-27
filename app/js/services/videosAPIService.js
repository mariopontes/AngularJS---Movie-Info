angular.module("main")
    .factory("videosAPI", function ($http) {
        const keyApi = "836e6df687832ba77e5908b9d89f4e88"

        this.buscaVideos = function (valor) {
            return $http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${keyApi}&language=pt-BR&page=${valor}`)
        };
        return { buscaVideos: this.buscaVideos };
    });
