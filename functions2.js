//Getters and Setters:

const person = {
    firstname: "Dazza",
    lastname: "Small",
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    },
    set fullName(value) {
        const nameParts = value.split(" ");
        this.firstname = nameParts[0];
        this.lastname = nameParts[1];
    }
};

person.fullName = "Mike Petrulis";

console.log(person);
