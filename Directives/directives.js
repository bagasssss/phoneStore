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
					vm.shippingCost = 12.99;
					vm.manufacturer = "";
					vm.goodsInCart =0;

					activate();

					function activate() {
						getDataFromFile();
					};

					function getDataFromFile(){
						storeService.getData().success(function(data){
							vm.phones = data;
						})
					};

					function changeCartLength() {
						vm.goodsInCart = vm.cart.length;
					};

					vm.addToCart = function(phone) {
						vm.cart.push(phone);
						calculateTotal();
						changeCartLength();
					};

					function calculateTotal() {
						var total =0;
						for(var i=0; i<vm.cart.length; i++) {
							total=total+vm.cart[i].price;
						};
						vm.totalCost = Math.round((total) * 100) / 100;
					};

					vm.changeManufacturer = function(manufacturer) {
						vm.manufacturer = manufacturer;
					};



				}
			}
		})






})();