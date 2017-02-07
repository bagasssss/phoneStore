(function(){
	'use strict';

	angular.module("store.directives", ["store.services"])

		.directive("storeDirective", function(storeService){
			return {
				restrict: "E",
				templateUrl: "Views/storeTemplate.html",
				controllerAs: "ctrl",
				controller: function() {
					var vm = this;

					vm.phones = [];
					vm.cart = [];
					vm.totalCost =0;

					activate();

					function activate() {
						getDataFromFile();
					};

					function getDataFromFile(){
						storeService.getData().success(function(data){
							vm.phones = data;
							console.log("data in controller");
							console.log(data);
						})
					};

					vm.addToCart = function(phone) {
						vm.cart.push(phone);
						console.log("added to cart: ");
						console.log(phone);
						calculateTotal();
					};

					function calculateTotal() {
						var total =0;
						for(var i=0; i<vm.cart.length; i++) {
							total=total+vm.cart[i].price;
						};
						vm.totalCost = Math.round((total) * 100) / 100;
					};



				}
			}
		})






})();