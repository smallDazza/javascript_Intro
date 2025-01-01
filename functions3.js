//Prototypes:

function House(roof, wall) {

    //Instance members:
    this.roof = roof;
    this.wall = wall;
    this.door = function() {
        return "Opening the front door";
    }
}

const house1 = new House("grey", "brick");

// Prototype members:
House.prototype.build = function() {
    return "building the house";
}

console.log(house1);
console.log(house1.door());
console.log(house1.build());

// return the instance members keys only:
console.log(Object.keys(house1));
// return all members keys (instance & prototype):
for (let key in house1) console.log(key);