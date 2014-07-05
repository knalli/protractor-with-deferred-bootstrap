
angular.module('app').controller('MyController', function($scope, $rootScope, $timeout, $location) {
  $scope.data = {
    valid: false
  };
  console.log('MyController init done');

  $timeout(function(){
    $rootScope.loaded = true;
    console.log('MyController timeout done');
  }, 2000);

  $rootScope.session = {valid: false};
  $rootScope.$watch('session.valid', function(valid) {
    if (!valid) {
      $timeout(function(){
        $location.url('/login');
      }, 100);
    }
  });
  $scope.doLogin = function(username, password) {
    $rootScope.session.loading = true;
    $timeout(function(){
      $rootScope.session.loading = false;
      $rootScope.session.valid = true;
      $rootScope.session.username = username;
      $location.url('/dashboard');
    }, 1000);
  };
  $scope.doLogout = function() {
    $rootScope.session.loading = true;
    $timeout(function(){
      $rootScope.session.loading = false;
      $rootScope.session.valid = false;
      $rootScope.session.username = null;
    }, 500);
  };
});
