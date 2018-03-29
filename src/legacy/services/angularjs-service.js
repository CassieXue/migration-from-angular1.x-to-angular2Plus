(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('AngularjsService', AngularjsService);

    /* @ngInject */
    function AngularjsService() {
        var service = {
            popup: popup
        };
        return service;

        function popup() {
            alert('这是angularjs的服务');
        }
    }

})();
