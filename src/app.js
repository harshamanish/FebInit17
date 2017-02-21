var MyApp = angular.module("myapp",["ngRoute"]);

//Run here
MyApp.run(function(){
   console.log("Application Started.");
});


//Config here
MyApp.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
	
	$routeProvider
		.when('/inbox', {
			templateUrl: 'view/inbox.html',
			controller: 'InboxCtrl',
			controllerAs: 'InboxCtrl'
		})
		.when('/sent', {
			templateUrl: 'view/sent.html',
			controller: 'SentCtrl',
			controllerAs: 'SentCtrl'
		})
		.when('/trash', {
			templateUrl: 'view/trash.html',
			controller: 'TrashCtrl',
			controllerAs: 'TrashCtrl'
		})
		.otherwise({
			redirectTo: '/inbox'
		})
});

MyApp.controller("InboxCtrl",function(sampleService){
    var InboxCtrl = this;
	debugger;
	InboxCtrl.modal={
	   appName:sampleService.appName,
	   emails:[{
				 subject:"Inbox Message 1"
			   },{
				 subject:"Inbox Message 2"
			   },{
				 subject:"Inbox Message 3"
			   }]
	}
	
	InboxCtrl.updateAppName=function(){
		sampleService.updateName(InboxCtrl.modal.appName)
	}
});

MyApp.controller("SentCtrl",function(sampleService){
    var SentCtrl = this;
	SentCtrl.modal={
	   appName:sampleService.appName,
	   emails:[{
				 subject:"Sent Message 1"
			   },{
				 subject:"Sent Message 2"
			   },{
				 subject:"Sent Message 3"
			   }]
	}
	
	SentCtrl.updateAppName=function(){
		sampleService.updateName(SentCtrl.modal.appName)
	}
});


MyApp.controller("TrashCtrl",function(){
    var TrashCtrl = this;
	TrashCtrl.modal={
	   emails:[{
				 subject:"Trash Message 1"
			   },{
				 subject:"Trash Message 2"
			   },{
				 subject:"Trash Message 3"
			   }]
	}
});


MyApp.service("sampleService",function(){
    this.appName="Email Client";
	this.updateName=function(val){
		this.appName=val;
	}
});






