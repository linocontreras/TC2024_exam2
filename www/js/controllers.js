angular.module('app.controllers', [])
  
.controller('stocksCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.stock = {};
    $scope.stock.symbol = "AAPL";
}])
   
.controller('stocks2Ctrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
    $scope.stock = {};
    $http.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + $stateParams.symbol + "&apikey=N7T3MALX12NO2VDE")
        .then(function(res) {
            $scope.stock.color = "black";
            if (res.data["Note"] !== undefined){
                console.error("Limit reached!");
                $scope.stock.symbol = "Limit reached!";
            } else{
                $scope.stock.symbol = res.data["Global Quote"]["01. symbol"];
                $scope.stock.price = res.data["Global Quote"]["05. price"];
                $scope.stock.day = res.data["Global Quote"]["07. latest trading day"];
                $scope.stock.change = res.data["Global Quote"]["09. change"];
                if($scope.stock.change > 0){
                    $scope.stock.suggestion = "Keep";
                } else{
                    $scope.stock.color = "red";
                    $scope.stock.suggestion = "Sell";
                }
            }            
        }
    );
    
}])
 