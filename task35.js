// Define the list of animals
var animals = ['dog', 'cat', 'rabbit'];
// Print out the name of each animal
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print out a statement about each animal
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
// Print out what the animals have in common
console.log("Any of these animals would make a great pet!");
