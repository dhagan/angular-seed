var app = angular.module('compute', [])
app.factory('Data', function (){
    return { value: "jdfja"}
})

app.directive("calculator", function() {
    return {
       restrict: "E",
       scope: {buttonLabel : '@label'},
       template: "<div class='btn' ng-click='calculate({{buttonLabel}})'>{{buttonLabel}}</div>"
    }
})

function CalculatorCtrl($scope, Data) {
    $scope.data = Data;

    $scope.calculate = function ()
    {
        alert('hello');
    }
}
