!function(){var a=angular.module("projects",["header"]);a.directive("projects",["$http",function(a){return{restrict:"E",templateUrl:"snippets/projects.html",controller:function(){var b=this;a.get("/data/projects.json").success(function(a){b.projects=a})},controllerAs:"projectsController"}}])}();