var app = angular.module('ngApp', ['ngRoute', 'angular-loading-bar', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/search-list.html',
        controller: 'SearchListCtrl'
      }).
      when('/users/:username', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      }).
      when('/repos/:login/:name', {
        templateUrl: 'views/repo.html',
        controller: 'RepoCtrl'
      }).
      when('/users/:username/repos', {
        templateUrl: 'views/repo-list.html',
        controller: 'RepoListCtrl'
      }).
      when('/users/:username/follow/:follow', {
        templateUrl: 'views/user-list.html',
        controller: 'FollowListCtrl'
      }).
      when('/bind', {
        templateUrl: 'views/bind.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

