
var helpApp = angular.module('help', []);

/**
 * Help content controller
 */
helpApp.controller('HelpContentCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.site = null;
	$scope.resources = [];
	$scope.error = null;

	$scope.filter = null;
	$scope.displayedResources = [];
	$scope.appLabels = { 
		"kenyaemr.registration": "Registration", 
		"kenyaemr.intake": "Triage", 
		"kenyaemr.medicalEncounter": "Clinician", 
		"kenyaemr.medicalChart": "Chart", 
		"kenyaemr.reports": "Reports", 
		"kenyaemr.admin": "Admin" 
	};

	/**
	 * Initializes the controller by loading content.json
	 */
	$scope.init = function() {
		$http.get('content.json')
			.success(function(data) {
				$scope.site = data.site;
				$scope.resources = data.resources;

				// Update page title which is outside of controller scope
				document.title = $scope.site.title;

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

				$scope.refresh();
			})
			.error(function() {
				$scope.error = 'Unable to fetch content.json. Ensure that this file exists in the root directory.';
			});
	};

	/**
	 * Initializes the controller
	 */
	$scope.refresh = function() {
		// Optionally filter resources by name
		if ($scope.filter) {
			var regex = new RegExp($scope.filter, 'gi');
			$scope.displayedResources = _.filter($scope.resources, function(resource) {
				return resource.name.search(regex) >= 0;
			});
		} else {
			$scope.displayedResources = $scope.resources;	
		}
	};

	/**
	 * Utility method to check if a given string ends with another
	 */
	function endsWith(string, pattern) {
		var d = string.length - pattern.length;
		return d >= 0 && string.indexOf(pattern, d) === d;
	}

}]);