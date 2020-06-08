var rent=angular.module('rentapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
rent.controller('rentcntrl', ['$scope','$window','$location',function($scope,$window,$location) {

// app.controller("companyCtrl1",function($state,$scope,pieService){



$scope.preleased=function()
{
  
   window.location.href = "prereleased.html";
}




$scope.buy=function()
{
  
   window.location.href = "buy.html";
}

$scope.rent=function()
{
  
   window.location.href = "rent.html";
}
$scope.maphide=true;


$scope.data1={};
$scope.radioData = [ { label: 'project', value: 1 },{ label: 'all residential', value: 2 },{ label: 'all commertial', value: '3'}];
 $scope.radioData1 = [ { label: '1', value: 1 },{ label: '2', value: 2 },{ label: '3', value: '3', isDisabled: true },{ label: '4', value: '4' }
    ];

    $scope.area = [ { label: 'sq.ft', value: 1 },{ label: 'sq.yards', value: 2 },{ label: 'acres', value: 'cents'},{ label: 'acres', value: 'acres1' }
    ];
//Multiple Properties
$scope.locdrop=false;
$scope.openLocations=function()
{

  $scope.locdrop=true;
}
$scope.loclist=[];
$scope.loclist=['Pune','Mumbai','Thane'];

// $scope.oo=function(data1)
// {
// 	alert("hi");
// 	alert("dg"+JSON.stringify($scope.data1));
// }

 $scope.items = [1,2,3,4,5];
      $scope.selected = [];

      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }

        // alert("dff"+JSON.stringify(list));
      };

      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
 
$scope.pp=false;
$scope.showprojectlist=false;

$scope.showproject=function()
{
	 	$scope.showprojectlist=true;
	 	$scope.showresidenlist=false;
	 	// $scope.showprojectlist=false;
  $scope.showcommerlist=false;
    
}


$scope.showresidenlist=false;
$scope.showresiden=function()
{
		$scope.showresidenlist=true;
	 	$scope.showprojectlist=false;
      $scope.showcommerlist=false;
	 	
}


$scope.showcommerlist=false;
$scope.showcommer=function()
{
		$scope.showresidenlist=false;
	 	$scope.showprojectlist=false;
	 	$scope.showcommerlist=true;
	 	
}


$scope.buydiv=false;
	 	
$scope.showbottom=function()
{
	
	 	$scope.buydiv=true;
	 	
}

}]);



// <!-- <div flex="50" ng-repeat="item in items">
//               <md-checkbox ng-checked="exists(item, selected)" ng-click="toggle(item, selected)">
//                 {{ item }} <span ng-if="exists(item, selected)">selected</span>
//               </md-checkbox>
//             </div> -->

//                <!--  <md-radio-group ng-model="data1.value" class="md-primary" ng-click="oo(data1);">

//         <md-radio-button ng-repeat="d in radioData" ng-value="d.value">
//             {{ d.label }}
  
//         </md-radio-button>

//       </md-radio-group> -->