// step 1 : create object
var app = angular.module('Application', [
  'ngRoute',
  'simplePagination',
  'ridge-speedometer',
 'easypiechart',
 'googlechart'

]);

app.filter('sumByKey', function () {
    return function (data, key) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
            return 0;
        }

        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            sum += parseInt(data[i][key]);
        }

        return sum;
    };
});
// step 2 : route
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: 'dashboard/main.html',
        controller: 'chartCtrl'
      })
      .when('/NewCustomer', {
        templateUrl: 'pages/new.html',
        //controller: 'CustomerAddControler'
      })
      .when('/UpdateCustomer/:id', {
        templateUrl: 'pages/edit.html',
       // : 'CustomerEditControler'
      })
      .when('/Persons', {
        templateUrl: 'pages/persons.html',
        controller: 'PersonListController'
      })
       .when('/PersonsIn', {
        templateUrl: 'pages/persons-in.html',
        controller: 'PersonInController'
      })
        .when('/Admin', {
        templateUrl: 'pages/admin.html',
        controller: 'UpdateNcdscreen'
      })

      .when('/kpi1', {
      templateUrl: 'pages/kpi/kpi1/main.html',
      //controller: 'UpdateNcdscreen'
    })

      .otherwise({redirectTo: '/'});
}]);

// step 3 : customer lists
app.controller('CustomerListControler', [
  '$scope','$http','Pagination',
  function ($scope, $http, Pagination) {
      $http.get('api/Customers').success(function(data) {
        $scope.pagination = Pagination.getNew(1000);
        $scope.customers = data;

        var size = $scope.customers.length;
        var perPage = $scope.pagination.perPage;
        var totalPage = Math.ceil(size / perPage);

        $scope.pagination.numPages = totalPage;
      });

      $scope.keyName = 'person_id';
      $scope.sort = function(keyName) {
        $scope.keyName = keyName;
      }
  }
]),

// step 4 : add customer
app.controller('CustomerAddControler', [
  '$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.master = {};   // new object
    $scope.activePath = null;

    $scope.New_Customer = function(customer, AddNewForm) {
      $http.post('api/New_Customer', customer)
      .success(function() {
        $scope.reset();   // clear memory
        $scope.activePath = $location.path('/'); // ไปหน้าแรก
      });
      $scope.reset = function() {
        // clear ค่าใน form ก่อนกลับไป index page
        $scope.customer = angular.copy($scope.master);
      }
      $scope.reset();
    }
  }
]),

// step สุดท้าย
app.controller('CustomerEditControler', [
  '$scope', '$http', '$location', '$routeParams',
  function($scope, $http, $location, $routeParams) {
    var id = $routeParams.id;   // รหัสสิ่งที่จะแก้ไข
    $scope.activePath = null;

    $http.get('api/Customers/' + id)
    .success(function(data) {
      $scope.CustomerDetail = data;
      console.log(data);
    });
    $scope.Update_Customer = function(customer) {
      $http.put('api/Customers/' + id, customer)
      .success(function(data) {
        $scope.CustomerDetail = data;
        $scope.activePath = $location.path('/'); // ไปหน้า index
      });
    }
    $scope.Delete_Customer = function(customer) {
      if (confirm('Delete ?')) {
        $http.delete('api/Customers/' + customer.id);
        $scope.activePath = $location.path('/'); // ไปหน้า index
      }
    }
  }
]);
// select ข้าม HOST
app.controller('PersonListController', [
    '$scope', '$http',
    function($scope, $http){
         $http.get('api/Persons').success(function(data) {
              $scope.persons = data;
      console.log($scope.persons);
        $scope.uname = "cuye";
        console.log($scope.uname);
         });


    }
]);

app.controller('PersonInController', [
    '$scope', '$http',
    function($scope, $http){
         $http.get('api/PersonsIn').success(function(data) {
              $scope.persons = data;
      console.log($scope.persons);
        $scope.uname = "cuye";
        console.log($scope.uname);
         });


    }
]);

app.value('googleChartApiConfig', {
            version: '1',
            optionalSettings: {
                packages: ['corechart', 'gauge'],
                language: 'fr'
            }
    });

   app.controller('guage', [
    '$scope', '$http',
    function($scope, $http){
         $http.get('dashboard/guage.php').success(function(data) {
              $scope.p1 = data;
              $scope.p2 = $scope.p1.foo ;
      console.log($scope.p2);
        $scope.uname = "cuye";
        console.log($scope.uname);
         });


    }
]);

    app.factory('UserService', function() {
// สร้างตัวแปร users แบบ array และกำหนดค่าลงไป

var users = ["95", "Hope", "Porn"];
// กำหนดการ return แบบต่างๆ
return {
// ส่งคืนตัวแปร users ทั้งหมด
all: function() {
return users;
},
// ส่งคืนเฉพาะตัวแรกเท่านั้น
first: function() {
return users[0];
}
 }
});

    app.controller('chartCtrl', ['$scope','$http',

          function($scope,$http){
         $http.get('dashboard/guage.php').success(function(data) {
              $scope.p1 = data;
              $scope.p2 = $scope.p1.Memory ;
      console.log($scope.p2);
        $scope.uname = "cuye";
        console.log($scope.uname);



                   $scope.percent = $scope.p2;
                     $scope.percent1 = 83 ;
                      //console.log(ninenik.showArticle)
                        //$scope.percent1 = 55;
			//$scope.anotherPercent = -45;
			$scope.anotherOptions = {
				animate:{
					duration:0,
					enabled:false
				},
				barColor:'#2C3E50',
				scaleColor:true,
				lineWidth:20,
				lineCap:'circle'

			}
                   });
		}]);


           app.controller("GaugeChartCtrl", function($scope,$http) {
  $http.get('php/dashboard/ncdscreen_chart.php').success(function(result) {
      $scope.dd = result ;
      console.log($scope.dd);
    $scope.chartObject = {};
    $scope.chartObject.type = "Gauge";
    $scope.d = $scope.dd.Memory;
    $scope.e = $scope.dd.CPU;
//$scope.data = $scope.d  ;
//console.log($scope.data);
//$scope.label1 = "10892";
    $scope.chartObject.options = {
      width: 600,
      height: 120,
      redFrom: 90,
      redTo: 100,
      yellowFrom: 75,
      yellowTo: 90,
      minorTicks: 5
    };
//$scope.d = 80 ;
    $scope.chartObject.data = result;
      });
  });

app.service("ninenik",["$http",function($http){
    this.showArticle = function($scope){
        // var url="http://www.ninenik.com/demo/today_view_article.php?callback=JSON_CALLBACK";

        $http.get('dashboard/guage.php').success(function(result){
            $scope.articles=result;
            $scope.data = $scope.articles.foo;
            console.log($scope.data);
        }).error(function(){

        });
    };
}])
app.controller("appController",["$scope","ninenik",function($scope,ninenik){
    $scope.data1="1";
    $scope.articles=[];
    ninenik.showArticle($scope);
   // $scope.pp = $scope.articles.foo;
}]);
