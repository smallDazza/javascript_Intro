

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmperpoint = 5;

    if (speed < speedLimit + kmperpoint) {
        return "Ok";
    }
        
    const points = Math.floor((speed - speedLimit) / kmperpoint);
    if (points > 12) return "Licence Suspended";
    else return `Points are : ${points}`
    
}

let result = checkSpeed(69);
console.log(result);