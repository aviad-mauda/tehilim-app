angular.module('submitModule', [])
.controller("submitController", function($scope, $rootScope, $http) {
    $scope.submit = () => { 
        $scope.user.gender = $rootScope.gendersRes.get($scope.user.gender);
        $scope.user.type = $rootScope.typesRes.get($scope.user.type);
        $http.post(serverDomain+"/addUser", $scope.user).then( async (res)=>{
            try{
                await $rootScope.getAvailableChapters();
            } catch (err){ 
                console.log(err);
            }
            $scope.showResult = true;
            $scope.userRes = res.data.user;
            $scope.userRes.type = getByValue(res.data.user.type);
            delete $scope.user.name;
            delete $scope.user.parent;
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