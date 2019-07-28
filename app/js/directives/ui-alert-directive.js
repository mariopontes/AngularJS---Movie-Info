angular.module('main')
    .directive('uiAlert', function () {
        return {
            templateUrl: 'app/templates/ui-alert.html',
            replace: true,
            restrict: 'AE',
            scope: {
                title: '@'
            },
            transclude: true
        }
    })

