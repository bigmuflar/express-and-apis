angular.module('googleclassroom',[])
    .controller('classroomAPI', classroomAPI);


function classroomAPI($http){
    var getClasses=this;
    getClasses.text = "Hey Baby";
    
    getClasses($http);
};

console.log('GET HERE!')
classroomAPI.$inject = ['$http'];
console.log('HERE!')

function getClasses($http){
    $http.get('http://pokeapi.co/api/v1/pokeman/139')
    .then(function(res, status){
        console.log("Success:", res);
    }, function(res, status){
        console.log("Failure:", status);
    })
}