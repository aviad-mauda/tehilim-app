const app = angular.module("myApp",[
    "headerModule",
    "submitModule"
])
.directive('header', function() {
    return {
        templateUrl: './header/header.html'
    };
})
.directive('submit', function() {
    return {
        templateUrl: './submit/submit.html'
    };
})
.run(function($rootScope, $http) {

    $http.get(serverDomain+"/booksCount").then((res)=>{
        $rootScope.booksCounter = res.data.booksCounter;
    }, (err)=>{
        console.log(err);
    });
    
    $rootScope.getAvailableChapters = () => {
        $http.get(serverDomain+"/getAvailableChapters").then((res)=>{
            $rootScope.chapters = res.data.chapters;
        }, (err)=>{
            console.log(err);
        });
    }

    $rootScope.getAvailableChapters();



    $rootScope.user = new Object();
    $rootScope.genders = [
        "בן",
        "בת"
    ]
    
    $rootScope.gendersRes = new Map();
    $rootScope.gendersRes.set("בן","m");
    $rootScope.gendersRes.set("בת","f");

    $rootScope.types = [
        "זיווג",
        "פרנסה",
        "רפואה",
        "ילדים"
    ]
    
    $rootScope.typesRes = new Map();
    $rootScope.typesRes.set("זיווג","marriage");
    $rootScope.typesRes.set("פרנסה","living");
    $rootScope.typesRes.set("רפואה","health");
    $rootScope.typesRes.set("ילדים","children");
})
