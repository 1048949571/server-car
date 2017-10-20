/**
 * Created by 李靖 on 2017/10/19.
 */


app.factory("serveServer", ['ajaxServer', function (ajaxServer) {
    var serveServer = {
        getFold: function () {
            return ajaxServer.ajax("get", "./Data/data.json");
        },
        gets:function(){
            return ajaxServer.ajax("get", "./Data/car.json");
        }
    };
    return serveServer;
}]);