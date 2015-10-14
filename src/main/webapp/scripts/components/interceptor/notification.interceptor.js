 'use strict';

angular.module('zenilanApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-zenilanApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-zenilanApp-params')});
                }
                return response;
            }
        };
    });
