//
// Use the following code for running without authentication.
//
//'use strict';
//angular.module('todoApp', ['ngRoute'])
//.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
//    $routeProvider.when("/Home", {
//        controller: "homeCtrl",
//        templateUrl: "/App/Views/Home.html",
//    }).when("/TodoList", {
//        controller: "todoListCtrl",
//        templateUrl: "/App/Views/TodoList.html",
//    }).when("/UserData", {
//        controller: "userDataCtrl",
//        templateUrl: "/App/Views/UserData.html",
//    }).otherwise({ redirectTo: "/Home" });
//}]);


//
// Use the following code for running with authentication.
//
'use strict';
angular.module('todoApp', ['ngRoute', 'AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });

    var endpoints = {
        //"https://{middle tier API app name}.azurewebsites.net/": "{client ID of Azure AD app}"
        "https://todolistapi20170305034303.azurewebsites.net": "f1f115df-c853-46c6-ad41-ee6541c7c79b"
    };

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'luanauhotmail.onmicrosoft.com',
            clientId: 'f1f115df-c853-46c6-ad41-ee6541c7c79b',
            extraQueryParameter: 'nux=1',
            endpoints: endpoints
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );

}]);

