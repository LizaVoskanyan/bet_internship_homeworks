var accident = {
    date: null,
    listOfTransportation: null,
    numberOfDamagedPeople: null,
    reason: 'The accident happened because the driver of Fiat was drunk.',
    toString: function() {
        var info ='The crash happened on '+ date.toDateString()+\n
        +'Reason '+ reason +\n
        +'There were damanged '+ numberOfDamagedPeople + 'people';
        return info;
    },
    hasInfo: function( information) {
    }
};
var AviationAccident = Object.create(accident);
AviationAccident.altitude = null;
AviationAccident.listOfTransportation = function(AviationAccident) {
    //checking valid lists
};

var CivilianAviationAccident = Object.create(AviationAccident);
CivilianAviationAccident.airline = 'Alitalia';
//CivilianAviationAccident.toString = funtion() {
}

var MilitaryAviationAccident = Object.create(AviationAccident);
MilitaryAviationAccident.terrytory = Country(name);
MilitaryAviationAccident.involvedCountries = [Country(name), Country(name)];
//CivilianAviationAccident.toString = funtion() {
}

var CarAccident = Object.create(accident);
CarAccident.adress = null;

function Car(model, year) {
    this.model = model;
    this.year = year;
}
function Plane(model, year) {
    this.model = model;
}
fucntion Country(name) {
    this.name = name;
}
