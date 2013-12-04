
var helpApp = angular.module('help', []);

/**
 * 
 */
helpApp.controller('HelpResources', ['$scope', '$http', function($scope, $http) {

	$scope.filter = null;
	$scope.error = null;
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
		$http.get('content.json')
			.success(function(data) {
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
					if (endsWith(resource.file, '.pdf')) {
						resource.icon = 'images/pdf.png';
					} else if (endsWith(resource.file, '.mp4')) {
						resource.icon = 'images/video.png';
					} else {
						resource.icon = 'images/generic.png';
					}	
				});
			})
			.error(function() {
				$scope.error = 'Unable to fetch content.json. Ensure that this file exists in the root directory.';
			});
	};

	/**
	 * Utility method to check if a given string ends with another
	 */
	function endsWith(string, pattern) {
		var d = string.length - pattern.length;
		return d >= 0 && string.indexOf(pattern, d) === d;
	}

}]);