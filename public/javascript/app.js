angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	
	
	
	$stateProvider
		.state('main', {
				url: '/main',
				controller: 'mainCtrl',
				templateUrl: './views/main.html'
		})
    $urlRouterProvider.otherwise('/main')
})