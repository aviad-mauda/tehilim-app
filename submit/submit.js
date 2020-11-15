angular.module('submitModule', [])
.controller("submitController", function($scope, $rootScope, $http) {
    $scope.submit = (user) => { 
        user.gender = $rootScope.gendersRes.get(user.gender);
        user.type = $rootScope.typesRes.get(user.type);
        $http.post($rootScope.serverDomain+"/addUser", user).then((res)=>{
            $scope.showResult = true;
            $scope.user = res.data.user;
            $scope.user.type = getByValue(res.data.user.type)
        }, (err)=>{
            console.log(err);
        });

    }

    const  getByValue = (searchValue) =>  {
        for (let [key, value] of $rootScope.typesRes.entries()) {
          if (value === searchValue)
            return key;
        }
      }

})