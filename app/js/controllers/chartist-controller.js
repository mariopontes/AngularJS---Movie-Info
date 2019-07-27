angular.module('main')
    .controller('chartistController', function (chartistService) {
        var data = {
            labels: [],
            series: [[]
            ]
        };

        //consulta servico para buscar dados e montar grafico
        chartistService.buscaInfo()
            .then((results) => {
                results.data.results.forEach((element) => {
                    data.labels.push(element.title);
                    data.series[0].push(element.vote_average);
                });
                new Chartist.Line('.ct-chart', data);
            });
    });