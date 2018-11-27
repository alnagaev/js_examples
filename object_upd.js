// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",

        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(obj, id, prop, value) {
  /*
Bugs and fiches placeholder
After updateRecords(2548, "tracks", ""), tracks should not be set

*/
  id = id.toString();
  if (obj.hasOwnProperty(id) === true){
    console.log("Yes, such key exists");
    if (prop === "tracks" && obj[id].hasOwnProperty('tracks') === true && value!== ""){
      obj[id]["tracks"].push(...[value])
    }
    else if(prop === "tracks" && obj[id].hasOwnProperty('tracks') === false) {
      obj[id]["tracks"] = [value];
    }
    else if(prop === "tracks" && value === "") {
      obj[id]["tracks"] = '';
    }
    else {
      obj[id][prop] = value;
    }
    return obj;
  }
  else{
    console.log("Key does not found. Creating a new");
    obj[id] = {[prop]: value};
    return obj;
  }
}
// collectionCopy = updateRecords(1, "tracks" , ["Expectation", "Alter ego"]);
collectionCopy = updateRecords(collectionCopy, 5439, "artist", "ABBA");
collectionCopy = updateRecords(collectionCopy, 5439, "tracks", "Take a Chance on Me");
collectionCopy = updateRecords(collectionCopy, 2548, "artist", "");
collectionCopy = updateRecords(collectionCopy, 1245, "tracks", "Addicted to Love");
collectionCopy = updateRecords(collectionCopy, 2468, "tracks", "Free");
collectionCopy = updateRecords(collectionCopy, 2548, "tracks", "");
collectionCopy = updateRecords(collectionCopy, 1245, "album", "Riptide");
console.log(collectionCopy);
