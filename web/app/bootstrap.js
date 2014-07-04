define(['require', 'angular', 'app/app'], function(require, angular) {
  require(['libs/requirejs-domready/domReady!'], function(document) {
    console.log('RequireJS domReady...');
    angular.element(document).ready(function(){
      console.log('RequireJS domReady Angular/jQuery ready...');
      angular.resumeBootstrap();
      console.log('Bootstrapping complete');
    });
  });
});
