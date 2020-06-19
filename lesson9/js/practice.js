// let pets = {
//     "name" : "Toby",
//     "breed" : "Persian",
//     "age" : 10,
//     "color" : "white",
//     "favorite_food" : ["cream", "tuna", "chicken"]
// };

// let n =  pets.name;
// let x = pets.favorite_food[1];

// alert(n);
// alert(x);

const url = "https://cit111byui.github.io/pets.json";

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(funcition (jsonObject) {
        console.log(jsonObject);
        const pets = jsonObject ["pets"];

        for(let i = 0; )
    })
    .catch  (function(error) {
        alert("Sorry the data is not available now.");
    })