
angular
    .module('blogs', ['xml'])
    .config(function ($httpProvider) {
        $httpProvider.responseInterceptors.push('xmlHttpInterceptor');
    });


function BlogsCtrl ($scope, $http) {
    $scope.blogs = [];

    $http.get('blogs.xml').then(function (response) {
        var blogs = [],
            els = response.xml.find('blog'),
            blog,
            i;

        for (i = 0; i < els.length; i += 1) {
            blog = angular.element(els[i]);
            blogs.push(blog.attributes);
        }

        $scope.blogs = blogs;
    });
}
