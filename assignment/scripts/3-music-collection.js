console.log('***** Music Collection *****')
//* Part 1
//- Create a variable `collection` that starts as an empty array.
let Collection = [];
//Add a function named `addToCollection`. This function should:
//- Take in the album's `title`, `artist`, `yearPublished` as input parameters
function addToCollection(title, artist, yearPublished) {
    return Collection[Collection.length -1];
}
//Create a new object having the above properties
//- Add the new object to the end of the `collection` array
let album1 = {
    title: 'Mr. Nice',
    artist: 'King asti',
    yearPublished: 2006,
  }
  Collection.push(album1);
// - Return the newly created object
console.log(addToCollection(album1));

  
