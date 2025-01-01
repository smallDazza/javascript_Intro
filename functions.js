
// using Factory function:
let address = regAddress("123 test street", "sydney", 2147);
console.log(address);

function regAddress(street, city, postcode){
    return {
        street,
        city,
        postcode
    }
};

// using Constructor function:
function ConsAddress(street, city, postcode){
    this.street = street;
    this.city = city;
    this.postcode = postcode;
    this.country = function() {
        return "Australia";
    }
}

const conAddress1 = new ConsAddress("55 testing st", "sydney", 2123);
const conAddress2 = new ConsAddress("77 live st", "brisbane", 7123);
const conAddress3 = conAddress1;

console.log(conAddress2);
console.log(conAddress1.country());


// function areEqual(conAddress1, conAddress2){
//     return conAddress1.street === conAddress2.street && conAddress1.city === conAddress2.city && conAddress1.postcode === conAddress2.postcode;
// };

// console.log(areEqual(conAddress1, conAddress2));

// function areSame(conAddress1, conAddress2){
//     return conAddress1 === conAddress2;
// };

// console.log(areSame(conAddress1, conAddress2));
// console.log(areSame(conAddress1, conAddress3));

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // Expected output: "cheese"
