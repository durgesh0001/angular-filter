'use strict';

/**
 * @ngdoc module
 * @name math
 * @description
 * reference to global Math object
 */

angular.module('math', [])
  .factory('$math', ['$window', function ($window) {

    return $window.Math;

  }]);