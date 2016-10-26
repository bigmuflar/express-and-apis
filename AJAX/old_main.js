angular.module('googleclassroom', [])
    .controller('ClassroomController', classroomController);

console.log('Here we are!')
function classroomController($http){
    var getClasses = this;
        getClasses.text = "Hey Baby";

//        getClasses($http);
}
console.log('GET HERE!')
classroomController.$inject = ['$http'];
console.log('HERE!')

//function getClass($http){
//    $http.get('http://pokeapi.co/api/v1/pokeman/139')
//    .then(function(res,status){
//        console.log('Success: ',res);
//    }, function(res,status){
//        console.log('Failure: ',status);
//    })
//}
