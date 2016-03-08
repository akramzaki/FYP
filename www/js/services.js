angular.module('app.services', [])

.factory('DriverFactory', [function(){
	return [
		{
			name : "Abu",
			id: "123",
			rating: "5"
		},
		{
			name : "Ali",
			id: "456",
			rating: "5"
		},
		{
			name : "Ahmad",
			id: "789",
			rating: "5"
		}
	];

}])

.service('BlankService', [function(){

}]);

