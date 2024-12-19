movie = {
    title : "testing",
    year : 2018,
    name : "movie",
    number : 10
}

function displayString(object) {
    for (let key in object) {
        if (typeof object[key] === "string") 
          console.log(key, object[key]);
            
    }
    
}

result = displayString(movie);
console.log(result);

