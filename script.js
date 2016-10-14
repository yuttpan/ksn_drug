//var app1 = angular.module('App1', []);

 app.controller('PersonAge1',[
  '$scope','$http',
  function ($scope, $http){
  // Initialize the model variables
  $scope.firstName = "John";
  console.log("$scope.firstName");
  
  
  //$scope.onload = function(){
        $http.get('php/personage1.php').success(function(data){
            $scope.persons = data;
      console.log($scope.persons);
        $scope.uname = "cuye"; 
        console.log($scope.uname);
        });
    //}
  
  
  
}]);

 app.controller('PersonAge2',[
  '$scope','$http',
  function ($scope, $http){
  // Initialize the model variables
  $scope.firstName = "John";
  console.log("$scope.firstName");
  
  
  //$scope.onload = function(){
        $http.get('php/personage2.php').success(function(data){
            $scope.persons = data;
      console.log($scope.persons);
        $scope.uname = "cuye"; 
        console.log($scope.uname);
        });
    //}
  
  
  
}]);


app.controller('PersonAge3',[
  '$scope','$http',
  function ($scope, $http){
  // Initialize the model variables
  $scope.firstName = "John";
  console.log("$scope.firstName");
  
  
  //$scope.onload = function(){
        $http.get('php/personage3.php').success(function(data){
            $scope.persons = data;
      console.log($scope.persons);
        $scope.uname = "cuye"; 
        console.log($scope.uname);
        });
    
}]);

app.controller('PersonAge4',[
  '$scope','$http',
  function ($scope, $http){
  // Initialize the model variables
  $scope.firstName = "John";
  console.log("$scope.firstName");
  
  
  //$scope.onload = function(){
        $http.get('php/personage4.php').success(function(data){
            $scope.persons = data;
      console.log($scope.persons);
        $scope.uname = "cuye"; 
        console.log($scope.uname);
        });
    //}
  
  
  
}]);

app.controller('PersonAge5',[
  '$scope','$http',
  function ($scope, $http){
  // Initialize the model variables
  $scope.firstName = "John";
  console.log("$scope.firstName");
  
  
  //$scope.onload = function(){
        $http.get('php/personage5.php').success(function(data){
            $scope.persons = data;
      console.log($scope.persons);
        $scope.uname = "cuye"; 
        console.log($scope.uname);
        });
    //}
  
  
  
}]);

app.controller('PersonAge6',[
  '$scope','$http',
  function ($scope, $http){
  // Initialize the model variables
  $scope.firstName = "John";
  console.log("$scope.firstName");
  
  
  //$scope.onload = function(){
        $http.get('php/personage6.php').success(function(data){
            $scope.persons = data;
      console.log($scope.persons);
        $scope.uname = "cuye"; 
        console.log($scope.uname);
        });
    //}
  
  
  
}]);

app.controller('personAge1Pcu',[
  '$scope','$http','$routeParams','$location',
  function ($scope, $http, $routeParams){
  // Initialize the model variables
   var id = $routeParams.id;
    //var id1 = $routeParams.id1;
  console.log(id);
  
  
  //$scope.onload = function(){
      $http.get('php/person_age_1_pcu.php?id='  + id).success(function(data){
        $scope.p1 = data;
        $scope.p2 = $scope.p1[0].hospitalname ;
    console.log($scope.p2);
    
   // $obj = json_decode($scope.p1)
    //    $scope.uname = "cuye"; 
        //console.log($obj);
     });
    //}
  
  
  
}]);

app.controller('personAge1Vill',[
  '$scope','$http','$routeParams','$location',
  function ($scope, $http, $routeParams){
  // Initialize the model variables
   var pcu = $routeParams.id;
   var vill = $routeParams.id1;
  console.log(vill,pcu);
 

  
 
     $http.get('php/person_age_1_vill.php?id='+ pcu + '&vill='+ vill).success(function(data){
    $scope.p1 = data;
        $scope.p2 = $scope.p1[0].hospitalname ;
         $scope.hcode = $scope.p1[0].hospitalcode ;
    console.log($scope.p1);
    
   // $obj = json_decode($scope.p1)
    //    $scope.uname = "cuye"; 
        //console.log($obj);
  });
    
  
  
  
}]);
    app.directive('myWidget', function() {
return {
// กำหนดให้เป็นแบบ element
restrict: 'E',
// กำหนดการแสดงผล เป็น HTML Code
 templateUrl: 'template/personAgeTemplate.html', 
}
});
   
   app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
   .when('/PersonsAge1', {
        templateUrl: 'pages/person/person_age_1.html', 
        controller: 'PersonAge1'
      })
      
       .when('/PersonsAge2', {
        templateUrl: 'pages/person/person_age_2.html', 
        controller: 'PersonAge2'
      })
      .when('/PersonsAge3', {
        templateUrl: 'pages/person/person_age_3.html', 
        controller: 'PersonAge3'
      })
      
      .when('/PersonsAge4', {
        templateUrl: 'pages/person/person_age_4.html', 
        controller: 'PersonAge4'
      })
      
      .when('/PersonsAge5', {
        templateUrl: 'pages/person/person_age_5.html', 
        controller: 'PersonAge5'
      })
      
      .when('/PersonsAge6', {
        templateUrl: 'pages/person/person_age_6.html', 
        controller: 'PersonAge6'
      })
      
      .when('/personAge1Pcu/:id', {
        templateUrl: 'pages/person/person_age_1_pcu.html', 
     controller : 'personAge1Pcu'
      })
      .when('/personAge1Vill/:id/:id1', {
        templateUrl: 'pages/person/person_age_1_vill.html', 
     controller : 'personAge1Vill'
      })
      }]);