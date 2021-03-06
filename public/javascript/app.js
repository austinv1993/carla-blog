var app = angular.module('blog', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('main', {
				url: '/main',
				controller: 'mainCtrl',
				templateUrl: './views/main.html'
		})
		.state('create', {
				url: '/create',
				controller: 'createCtrl',
				templateUrl: './views/create.html'
		})
        .state('edit', {
            url: '/edit/:postId',
            controller: 'editCtrl',
            templateUrl: './views/edit.html'
        })
		.state('list', {
        	url: '/list',
        	controller: 'listCtrl',
        	templateUrl: './views/list.html'
    	});

    $urlRouterProvider.otherwise('/main')

});