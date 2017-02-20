var MyApp = angular.module("myapp",["ngRoute"]);

//Run here
MyApp.run(function(){
   console.log("Application Started.");
});


//Config here
MyApp.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
	
	$routeProvider
    .when('/', {
        templateUrl: 'view/inbox.html',
		controller: 'InboxCtrl',
        controllerAs: 'InboxCtrl'
    })
	.otherwise({
        redirectTo: '/'
    })
	
});