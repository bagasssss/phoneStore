(function(){
	'use strict';

	angular.module("store.services",[])

		.factory("storeService", function($http){
			var phonesPath = "phones.json";
			return {
				getData: function() {
					return $http({
						method: "GET",
						url: phonesPath
					}).success(function(response) {
						return response.data;
					})
				}
			}

		})



})();