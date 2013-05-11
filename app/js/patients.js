angular.module('patients', [])

function PatientsCtrl($scope, $http) {
    $scope.patients = [];

    //$http.get('phones/list.xml').then(function (response) {
    //$http.jsonp('http://localhost:8080/fhirprototype/webresources/opencds/1').success(function(data) {
    $http.get('http://10.255.166.15:8080/legacy-hdata-service/patient/list?framework=jdbc&system=chcs').success(function(data) {
        var patients = [],
            i,
            patient;

        var x2js;
        x2js = new X2JS();
        var jsonObj = x2js.xml_str2json(data);
        var patientResults = jsonObj.list.patientResult;
        for (i = 0; i < patientResults.length; i++) {
            patient = new Object();
            patient.firstName = patientResults[i].firstName;
            patient.lastName = patientResults[i].lastName;
            patients.push(patient);
        }

        $scope.patients = patients;
    });

}

