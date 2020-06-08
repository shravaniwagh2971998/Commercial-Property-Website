var newapp=angular.module('cardapp',['ngMaterial','ui.router','ui.bootstrap','ngSanitize','ngMessages']);
newapp.controller('cardCtrl', ['$scope','$window','$location',function($scope,$window,$location) {

// app.controller("companyCtrl1",function($state,$scope,pieService){

// alert("hiiiiiiiiiiiiiiii");
 this.myDate = new Date();
  this.isOpen = false;
// Initial 50 characters will be displayed.
    $scope.strLimit = 50;

    // String
    $scope.jobs = {
      description: "Room is available for sell.It has good design of 3 bedrooms. Non-Stop water supply in 3 bathrooms .It has been unfurnished.Situated in bhor.It has been priced at rs 200000.Construction ages only 10 years old property."
    };

  // Event trigger on click of the Show more button.
   $scope.showMore = function() {
     $scope.strLimit = $scope.jobs.description.length;
   };

  // Event trigger on click on the Show less button.
   $scope.showLess = function() {
     $scope.strLimit = 50;
   };

   // $(function () {
   //              $('#datetimepicker1').datetimepicker();
   //          });
$scope.form1=true;
$scope.form2=false;
   $scope.openModal=function()
   {
    $scope.form1=false;
$scope.form2=true;
   }


// var yournum="{{ 9527023793 }}"
// var yourmsg="{{ hiiii }}"
// function getlink(number,message)
// {
//   number=this.yournum;
//   message=this.yourmsg.split(' ').join('%20')

//   return
// }
// getlink()

 console.log('https://api.whatsapp.com/send?phone=+917219263045'+number+'&text=%20'+message)
}]);


