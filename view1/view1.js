'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {


    setTimeout(function(){
        setInterval((function jumpO(){
            $('.foodOne').addClass('upper');
            setTimeout(function(){
                $('.foodOne').removeClass('upper');
            }, 300);
        }), 2000);
    },500);
    setTimeout(function(){
        setInterval((function jumpTwo(){
            $('.foodTwo').addClass('upper');
            setTimeout(function(){
                $('.foodTwo').removeClass('upper');
            }, 300);
        }), 2000);
    },1000);
    setTimeout(function(){
        setInterval((function jumpThree(){
            $('.foodThree').addClass('upper');
            setTimeout(function(){
                $('.foodThree').removeClass('upper');
            }, 300);
        }), 2000);
    },1500);
    setTimeout(function(){
        setInterval((function jumpFour(){
            $('.foodFour').addClass('upper');
            setTimeout(function(){
                $('.foodFour').removeClass('upper');
            }, 300);
        }), 2000);
    },2000);
    setTimeout(function(){
        $("nav").addClass('unactiveTop');
        $("header").addClass('unactiveTop');
        $("#hobbies").addClass('unactiveTop');
    },1000);
    setTimeout(function(){
        $(".foodLike").addClass('unactiveLeft');
        $(".photoLike").addClass('unactiveRight');

    },2000);
}]);