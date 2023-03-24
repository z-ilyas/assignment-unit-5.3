console.log('***** Music Collection *****')
//** 1st part
let Collection = [];
// Create a variable `collection` that starts as an empty array.

function addToCollection(title, artist, yearPublished) {
    console.log('In addToCollection',title, artist, yearPublished );
    return Collection[Collection.length -1];
}


//Add a function named `addToCollection`. This function should:
//  - Take in the album's `title`, `artist`, `yearPublished` as input parameters


let music = {
    title: 'Mr. Nice',
    artist: "King'asti",
    yearPublished: 2006,
}
//  - Create a new object having the above properties

Collection.push(music);
//  - Add the new object to the end of the `collection` array

//- Return the newly created object
console.log(addToCollection());




