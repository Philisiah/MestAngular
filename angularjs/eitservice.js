var eitService = angular.module('eitService', []);

eitService.factory('eitOps', function () {

    var eitlist = [];
    var current_eit = [];

    var neweit = function (fName, lName, dob, gender) {
        class Eit {
            constructor(first, last, date, gender) {
                this.first = first;
                this.last = last;
                this.date = date;
                this.gender = gender;
            }
        }

        eit = new Eit(fName, lName, dob, gender);

        return eitlist.push(eit);
    };

    var setcurrent = function (eit) {
        current_eit.push(eit);
        return current_eit

    };
    return {
        neweit: neweit,
        eitlist: eitlist,
        setcurrent: setcurrent,
        current_eit: current_eit
    };

});