function CarFactory(type, make, model, year) {
    this.type = "car";
    this.make = make;
    this.model = model;
    this.year = year;
}

const garage = [];

const honda = new CarFactory("","Honda", "3343", "2003");

console.log(honda);

console.log("--------------------------------------------------------------")

garage.push(honda);

const ferrari = new CarFactory("", "Ferrari", "48833j", "2019");

garage.push(ferrari);

const miniCooper = new CarFactory("", "Mini Cooper", "366k5", "2003");

garage.push(miniCooper);

const oldBanger = new CarFactory("", "Unknown", "88fffZ", "1967");

garage.push(oldBanger);

const rollsRoyce = new CarFactory("", "Rolls Royce", "XJDE889d", "1999");

garage.push(rollsRoyce);

const rangeRover = new CarFactory("", "Range Rover", "GH77j3", "2019");

garage.push(rangeRover);

const mitsubishi = new CarFactory("", "Mitsubishi", "hFdd888", "2021");

garage.push(mitsubishi);

const toyota = new CarFactory("", "Toyota", "e86fhgD", "2020");

garage.push(toyota);

const porsche = new CarFactory("", "Porsche", "DJFH83", "2021");

garage.push(porsche);

const audi = new CarFactory("", "Audi", "hfdd7", "2009");

garage.push(audi);

console.log(garage);