angular.module('eite', [])
  .controller('EitController', function EitController() {
    this.firstName = "";
    this.lastName = "";
    this.gender = "";
    this.dob = "";
    this.fullNames = function fullNames(){
      return this.firstName + " " + this.lastName;
    };
    this.getAge = function getAge(){
      currentYear = new Date;
      if (this.dob) {
        birthdate = new Date(this.dob);
        elapsed = currentYear - birthdate;
        elapsed = new Date(elapsed);
        seconds = elapsed / 1000;
        minutes = seconds / 60;
        seconds %= 60;
        hours = minutes/60;
        minutes %= 60;
        days = hours / 24;
        hours %= 24;
        years = days / 365;
        days %= 365;
        return "It has been " + years.toPrecision(3) + " years " + days.toPrecision(3) +
         " days " + hours.toPrecision(3) + " hours " + minutes.toPrecision(3)+
         " minutes " + seconds.toPrecision(3) + " seconds since your were born ";
      }
      
    };
  });