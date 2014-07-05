// for angular modules

angular.module('app', ['ng', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.when('/', '/dashboard').otherwise('/');
  $stateProvider.state('login', {
    controller: 'loginController'
  });
  $stateProvider.state('dashboard', {
    controller: 'dashboardController'
  });
})
.run(function($rootScope) {
  console.log('App.run()');
});
