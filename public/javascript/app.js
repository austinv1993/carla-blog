var app = angular.module('blog', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('main', {
				url: '/main',
				controller: 'mainCtrl',
				templateUrl: './views/main.html'
		})
    $urlRouterProvider.otherwise('/main')
})