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
//Part 2
//- Test the `addToCollection` function:
// - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. 
//(Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//  - Console.log each album as added using the returned value.

let album2 = {
    title: 'Bad gal',
    artist: 'King asti',
    yearPublished: 2001,
  }
  Collection.push(album2);
  console.log(addToCollection(album2));

  let album3 = {
    title: 'Naughty',
    artist: 'Sean Paul',
    yearPublished: 2010,
  }
  Collection.push(album3);
  console.log(addToCollection(album3));

  let album4 = {
    title: 'Late Night',
    artist: 'Sean Paul',
    yearPublished: 2017,
  }
  Collection.push(album4);
  console.log(addToCollection(album4));

  let album5 = {
    title: 'Lover Boi',
    artist: 'Drake',
    yearPublished: 2021,
  }
  Collection.push(album5);
  console.log(addToCollection(album5));

  let album6 = {
    title: 'Westside',
    artist: '2pac',
    yearPublished: 2014,
  }
  Collection.push(album6);
  console.log(addToCollection(album6));

  let album7 = {
    title: 'GG',
    artist: 'Gamer',
    yearPublished: 2004,
  }
  Collection.push(album7);
  console.log(addToCollection(album7));

  // - After all are added, console.log the `collection` array.
console.log(Collection);
//* Part 3
//- Add a function named `showCollection`. This function should:
//- Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//- Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection(array) {
    console.log('There are',`${array.length}`, 'albums in the collection');
    for (let album of array) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
}
}
//- Test the `showCollection` function.
showCollection(Collection);
