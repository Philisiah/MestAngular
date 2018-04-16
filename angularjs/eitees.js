// Constants used for age calculation.
var MS_YEAR = 31556952000; // https://www.calculateme.com/Time/Years/ToMilliseconds.htm
var MS_MONTH = 2629746000; // https://www.calculateme.com/Time/Months/ToMilliseconds.htm
var MS_DAY = 86400000; // https://www.calculateme.com/Time/Days/ToMilliseconds.htm

// Angular module, with a controller.
var eitApp = angular.module('eitApp', ['eitService']);
eitApp.controller('addEitController',
    ['eitOps', (function Controller(eitOps) {
        this.gName = '';
        this.lName = '';
        this.dob = null;
        this.gender = '';
        this.getAge = function calculateAge() {

            // Return an empty string if this.dob is not set.
            if (!this.dob) {
                return '';
            }

            // Get the current date.
            var now = new Date();

            // Don't calculate age if this.dob is in the future.
            if (this.dob > now) {
                return 'Please enter a date in the past.'
            }

            var y, m, d;

            var remainder = (now - this.dob);
            y = Math.floor(remainder / MS_YEAR);
            remainder = remainder % MS_YEAR;
            m = Math.floor(remainder / MS_MONTH);
            remainder = remainder % MS_MONTH;
            d = Math.floor(remainder / MS_DAY);

            return y + " years, " + m + " months, " + d + " days";
        };

        this.addNew = function addNew() {
            return eitOps.neweit(this.gName, this.lName, this.dob, this.gender);
        };
    })]
);
eitApp.controller('listEitController', ['eitOps', (function Controller(eitOps) {
    this.mylist = function mylist() {
        return eitOps.eitlist;
    };
    this.set_eit = function set_eit(eit){
        return eitOps.setcurrent(eit);
    };
})]);

eitApp.controller('eitDetController', ['eitOps', (function Controller(eitOps) {
    this.cu =   function mylist() {
        return eitOps.current_eit;
    };
})]);