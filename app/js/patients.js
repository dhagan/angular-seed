
angular
    .module('patients', ['xml'])
    .config(function ($httpProvider) {
        $httpProvider.responseInterceptors.push('xmlHttpInterceptor');
    });


function PatientsCtrl ($scope, $http) {
    $scope.patients = [];

    $http.get('phones/list.xml').then(function (response) {
        var patients = [],
            els = response.xml.find('patientResult'),
            patient,
            i,
            _el;
//
//        for (i = 0; i < els.length; i += 1) {
//            patient = angular.element(els[i]);
//            //nodes = patient.xml.find('firstname');
//            _el = new Object();
//            _el.firstName = patient.firstname; //patient.attr('firstName');
//            _el.lastName = patient.attr('lastName');
//            patients.push(_el);
//        }

        var x2js;
        x2js = new X2JS();
        var jsonObj = x2js.xml_str2json(response.data);
        var patientResults = jsonObj.list.patientResult;
        for (i = 0; i < patientResults.length; i++) {
            _el = new Object();
            _el.firstName = patientResults[i].firstName; //patient.attr('firstName');
            _el.lastName = patientResults[i].lastName;
            patients.push(_el);
        }

        $scope.patients = patients;
    });
}
