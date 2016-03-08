angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

    .state('tabsController', {
      url: '/tab',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
        
    .state('tabsController.gETIT', {
      url: '/getit',
      views: {
        'tab-getit': {
          templateUrl: 'templates/gETIT.html'
        }
      }
    })
        
    .state('tabsController.status', {
      url: '/status',
      views: {
        'tab-status': {
          templateUrl: 'templates/status.html'
        }
      }
    })
         
    .state('tabsController.drivers', {
      url: '/drivers',
      views: {
        'tab-drivers': {
          templateUrl: 'templates/drivers.html',
          controller: 'DriversCtrl'
        }
      }
    })
    .state('tabsController.driver-information', {
      url: '/drivers/:driverId',
      views: {
        'tab-drivers': {
          templateUrl: 'templates/driver-detail.html',
          controller: 'DriverDetailCtrl'
        }
      }
    })  
    ;

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/tab/getit');
  

  

});