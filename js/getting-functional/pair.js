// pair(obj)
// Construct array pairs from objects.

// Example Input

var names = {
  "Brian": "Hague",
  "Sarah": "Hanley",
  "Lenny": "Urbanowski",
};

// Example Output

// [ [ 'Brian', 'Hague' ],
//   [ 'Sarah', 'Hanley' ],
//   [ 'Lenny', 'Urbanowski' ] ]
function forIn(names) {
  var arr = [];
  for (var property in names) {
    lilarr = [];
    lilarr.push(property);
    lilarr.push(names[property]);
    arr.push(lilarr);
  }
  console.log(arr);
};

forIn(names);
