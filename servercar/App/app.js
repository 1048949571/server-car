/**
 * Created by 李靖 on 2017/10/19.
 */

var app = angular.module("App", ["ui.router"]);

app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("serve", {
            url:"/serve/:id",
            templateUrl: "App/Views/serve.html",
            controller: "serveController"
        })
    $urlRouterProvider.otherwise("/serve/1")
});