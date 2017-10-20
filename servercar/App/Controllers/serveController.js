/**
 * Created by 李靖 on 2017/10/19.
 */
app.controller("serveController", ['$scope', 'serveServer',function ($scope,serveServer) {
    serveServer.getFold().then(function (result) {
        $scope.objs=result;
    });
    var cars=4;
    serveServer.gets().then(function (result) {
        $scope.car=result.slice(0,cars)
        $scope.ck=function(){
            cars+=4;
            $scope.car=result.slice(0,cars)

        }

        console.log(result)

    });
}]);