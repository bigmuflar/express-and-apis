angular.module('Heroes')
    .controller('homeController', homeController);

homeController.$inject = ['heroesFactory'];

function homeController (heroesFactory){
    var home = this;

    home.greeting = 'Welcome to the Heroes of AJAX!'

    home.createHero = function(){
      heroesFactory.createHero(home.newHero)
        .then(function(returnData){
          console.log('this is working');
        });
    }
}
