angular.module('app.controllers', [])
  
.controller('gETITCtrl', function($scope) {

})
      
.controller('statusCtrl', function($scope) {

})
   
.controller('DriversCtrl', function($scope, DriverFactory) {
	$scope.drivers = DriverFactory;
})
   
.controller('DriverDetailCtrl', function($scope, $stateParams, DriverFactory) {
	$scope.drivers = DriverFactory;

	$scope.driver = $scope.drivers[$stateParams.driverId];
})