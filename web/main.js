window.name = 'NG_DEFER_BOOTSTRAP!';

requirejs({

  paths: {
    'jquery': 'libs/jquery/jquery',
    'angular': 'libs/angular/angular',
    'angular-ui/router': 'libs/angular-ui-router/release/angular-ui-router'
  },

  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'angular-ui/router': {
      deps: ['angular']
    },
    'jquery': {
      exports: 'jQuery'
    }
  }
}, ['app/index'], function() {
  console.log('RequireJS Main init done');
});
