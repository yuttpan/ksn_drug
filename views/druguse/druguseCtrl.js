

'use strict'

app.controller('druguseCtrl', function($scope,$http,AppService) {

$scope.form = {} ;


$scope.month =  AppService.selectMonth();
$scope.year =  AppService.selectYear();
console.log($scope.month)

$scope.submit = function(data){

$scope.data = data ;

console.log($scope.data);

}


});
