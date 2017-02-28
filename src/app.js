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
		.when('/todo', {
			templateUrl: 'view/todo.html',
			controller: 'TodoCtrl',
			controllerAs: 'TodoCtrl'
		})
		.otherwise({
			redirectTo: '/inbox'
		})
});

MyApp.controller("InboxCtrl",function(sampleService,sampleFactory){
    var InboxCtrl = this;
	InboxCtrl.modal={
	   appName:sampleService.appName,
	   factoryName:sampleFactory.name,
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
	InboxCtrl.updateFactoryName=function(){
		sampleFactory.name = InboxCtrl.modal.factoryName;
	}
});

MyApp.controller("SentCtrl",function(sampleService,sampleFactory){
    var SentCtrl = this;
	SentCtrl.modal={
	   appName:sampleService.appName,
	   factoryName:sampleFactory.name,
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
	SentCtrl.updateFactoryName=function(){
		sampleFactory.name = SentCtrl.modal.factoryName;
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

MyApp.controller("TodoCtrl",function(){
    var TodoCtrl = this;
	TodoCtrl.modal={
	   searchStr:"",
	   newTask:"",
	   taskList:[
	      {taskName:"My task 1 ",status:"Completed" },
	      {taskName:"My task 2 ",status:"Pending"},
	      {taskName:"My task 3 ",status:"Pending"},
	      {taskName:"My task 4 ",status:"Pending"},
	      {taskName:"My task 5 ",status:"Pending"}
	   ]
	};
	
	TodoCtrl.completeTask=function(task){
	   task.status="Completed";
	}
	
	TodoCtrl.deleteTask=function(index){
	   TodoCtrl.modal.taskList.splice(index,1);
	}
	TodoCtrl.addTask=function(index){
	   TodoCtrl.modal.taskList.push({taskName:TodoCtrl.modal.newTask,status:"Pending"});
	   TodoCtrl.modal.newTask="";
	}
	
});


MyApp.service("sampleService",function(){
    this.appName="Email Client";
	
	this.updateName=function(val){
		this.appName=val;
	}
});

MyApp.factory("sampleFactory",function(){
   return {
      name:"Factory"
   }
});


//Directive Simple
MyApp.directive("date",function($filter){
   return {
	  template:$filter('date')(new Date(), "dd-MMM-yyyy-h:mm:ss a")
   }
});



MyApp.directive("date1",function($filter){
   return {
      scope:{
	   type:'@type'
	  },
      controller:function($scope){
	   $scope.time=$filter('date')(new Date(), "dd-MMM-yyyy-h:mm:ss a");
		setInterval(function(){
			$scope.time = $filter('date')(new Date(), "dd-MMM-yyyy-h:mm:ss a");
			$scope.$apply();
		},1000)
		
	  },
      templateUrl: "view/date1.html" 
   }
});


//Directive only attribute
MyApp.directive("date2",function($filter){
   return {
      restrict:'A',
	  template:$filter('date')(new Date(), "dd-MMM-yyyy-h:mm:ss a")
   }
});

//Directive only element
MyApp.directive("date3",function($filter){
   return {
      restrict:'E',
	  template:$filter('date')(new Date(), "dd-MMM-yyyy-h:mm:ss a")
   }
});






