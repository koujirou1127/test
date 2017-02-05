/**
 * アプリケーションの定義
 */
//var app = angular.module("testApp", []);
var app = angular.module('testApp', ['onsen']);
  app.controller("testAppController1", function($scope){
     this.message = "First App 3";
    var obj = 'sasar';
    localStorage.setItem('obj', JSON.stringify(obj));
    var str = localStorage.getItem('obj');
    var obj = JSON.parse(str);
    this.message = "First App 1";
    this.hello = function(string) {
    alert('Hello ' + string + ' ' + obj);
  };
  });

  app.controller("testAppController2", function($scope){
   this.message = "First App 2";
  
});