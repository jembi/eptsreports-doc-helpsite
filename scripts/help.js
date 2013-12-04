
var helpApp = angular.module('help', []);

/**
 * 
 */
helpApp.controller('HelpResources', ['$scope', '$http', function($scope, $http) {

	$scope.filter = null;
	$scope.resources = [];
	$scope.appLabels = { 
		"kenyaemr.registration": "Registration", 
		"kenyaemr.intake": "Triage", 
		"kenyaemr.medicalEncounter": "Clinician", 
		"kenyaemr.medicalChart": "Chart", 
		"kenyaemr.reports": "Reports", 
		"kenyaemr.admin": "Admin" 
	};

	/**
	 * Initializes the controller
	 */
	$scope.init = function() {
		$scope.refresh();
	};

	/**
	 * Initializes the controller
	 */
	$scope.refresh = function() {
		$http.get('content.json').
			success(function(data) {
				// Optionally filter resources by name
				if ($scope.filter) {
					var regex = new RegExp($scope.filter, 'gi');
					$scope.resources = _.filter(data.resources, function(resource) {
						return resource.name.search(regex) >= 0;
					});
				} else {
					$scope.resources = data.resources;	
				}

				// Add icons for each resource
				_.each($scope.resources, function(resource) {
					resource.icon = 'images/pdf.png';	
				});
			});
	};

}]);