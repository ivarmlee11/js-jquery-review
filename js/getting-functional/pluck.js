// pluck(arr, key)
// Given an array of objects, pluck the object values associated
// with the provided key.

// Example Input

var albums = [
  { name: 'Gossamer',
  artist: 'Passion Pit'
  },
  { name: 'Sigh no more',
  artist: 'Mumford and Sons'
  },
  { name: 'Time to Pretend',
  artist: 'MGMT'
  }
];

// Example Output

// [ 'Passion Pit', 'Mumford and Sons', 'MGMT' ]

function valuePicker(array, key) {
  // console.log(array[0][key]);
  newArray = array.map(function(element) {
    return element[key];
  });
  return newArray;
};
valuePicker(albums, 'name');
console.log(newArray);

// console.log(objectKeyValueChecker(albums, 'name'));
