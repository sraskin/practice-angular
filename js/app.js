(function(){
	var app = angular.module('store', [ ]);
	
	app.controller('StoreController', function(){
		this.products = gems;
	});
	var gems = [ 
		{
			name: 'Product 1',
			price: 2,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			canPurchase: true,
			soldOut: false,
			image: 'image/sunset_lady.jpg'

		},
		{
			name: 'Product 2',
			price: 3,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
			canPurchase: true,
			soldOut: false,
			image: 'image/sunset_lady.jpg'
		}
	];
})();