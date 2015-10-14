'use strict';

angular.module('zenilanApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


