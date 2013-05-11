'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);

function PatientsCtrl($scope, $http) {
    $scope.patients = [];

    $http.get('phones/list.xml').then(function (response) {
        var patients = [],
            i,
            patient;

        var x2js;
        x2js = new X2JS();
        var jsonObj = x2js.xml_str2json(response.data);
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

function PhoneListCtrl($scope, $http) {
    var xml = xmlFilter('<blogs><blog name="my first blog" id="1"/></blogs>');
    console.log(xml.find('blog'));
//    $scope.phones = [
//        {"name": "Nexus S",
//            "snippet": "Fast just got faster with Nexus S."},
//        {"name": "Motorola XOOM™ with Wi-Fi",
//            "snippet": "The Next, Next Generation tablet."},
//        {"name": "MOTOROLA XOOM™",
//            "snippet": "The Next, Next Generation tablet."}
//    ];

//    $http.get('phones/phones.json').success(function(data) {
//        $scope.phones = data.list.patientResult;
//    });
//
//    $http.get('phones/doug.json').success(function(data) {
//        $scope.phones = data.list.patientResult;
//    });
//
//    $http.jsonp('http://localhost:8080/fhirprototype/webresources/opencds/1').success(function(data) {
//        $scope.phones = data.list.patientResult;
//    });
//    $http.get('http://10.255.166.15:8080/legacy-hdata-service/patient/list?framework=jdbc&system=chcs').success(function(data) {
    $http.get('phones/list.xml').success(function(response) {
            var blogs = [],
                els = response.xml.find('patientResult'),
                blog,
                i;

            for (i = 0; i < els.length; i += 1) {
                blog = angular.element(els[i]);
                blogs.push(blog.attrs());
            }
            $scope.phones = data.list.patientResult;
    });

    //$scope.orderProp = 'age';
}