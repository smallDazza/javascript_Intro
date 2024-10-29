let dataArray = [
    "Frankenstein",
    "Dracula",
    "Vampire",
    "Chucky",
    "Wednesday",
    "Voldermort",
    "T-Rex",
    "Gremlins",
    "Joker",
    "Clowns"
];

let costumeContainer = document.getElementById("costumeContainer");
// Create an unordered list tag
let costumesContainerList = document.createElement("ul");

dataArray.forEach((costume) => {
    // Verify what we are working with
    console.log(costume);
// Create the list element
    let newCostumeEntry = document.createElement("li");
 // Add the value to the HTML element
    newCostumeEntry.innerText = costume;
// Add a button to each entry to remove it from the list
    let removeButton = document.createElement("button");
// Add a placeholder value to button
    // removeButton.innerText = "Remove" + costume;
    removeButton.innerText = `Remove ${costume}`;

// Add the element to the container
    costumesContainerList.appendChild(newCostumeEntry);
    costumesContainerList.appendChild(removeButton);
});

//Add  the container to the html page
costumeContainer.appendChild(costumesContainerList)




