/*!angular-test0718 2016-07-18 */
"use strict";!function(){function a(a,b){var c=Object.prototype.toString.call(a),d=Object.prototype.toString.call(b);if("[object Number]"===c&&"[object Number]"===d){var e=a+b;return console.log(e),e}}a(15,35)}();


(function(){
	var myApp = angular.module('myApp',['ui.router']);
	myApp.controller('a',['$scope',function($scope){
		$scope.name = "xiaoming";
		var age = 15;
	}]);
})();