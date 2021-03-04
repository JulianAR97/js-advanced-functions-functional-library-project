const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // item in collection will always be a key. If collection is an array, 
    // the key will be index of element, and value will be collection[item]
    // Thus, this works for objects and arrays, as opposed to of, which only works for arrays
    each: function(collection, callback) {
      for (let item in collection) {
        callback(collection[item])
      }
      return collection
    },
    // see notes above each
    map: function(collection, callback) {
      let mapped = [];
      for (let item in collection) {
        mapped.push(callback(collection[item]))
      }
      return mapped
    },

    reduce: function(collection, callback, acc = 0) {
      for (let item of collection) {
        acc = callback(acc, item, collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let item in collection) {
        if (predicate(collection[item])) return collection[item];
      }
    },

    filter: function(collection, predicate) {
      let filtered = [];
      for (let item in collection) {
        if (predicate(collection[item])) filtered.push(collection[item]);
      }
      return filtered
    },

    size: function(collection) {
      let size = 0
      for (let item in collection) {
        size++;
      }
      return size
    },

    first: function(array, n = 1) {
      let f = n == 1 ? array[0] : array.slice(0, n);
      return f
    },

    last: function(array, n = 1) {
      let lastElements = n == 1 ? array[array.length - n] : array.slice(-n);
      return lastElements
    },

    compact: function(array) {
      let compacted = [];
      for (let item in array) {
        if (Boolean(array[item])) compacted.push(array[item]);
      }
      return compacted
    },

    sortBy: function(array, callback) {
      let callbackMap = {};
      let sorted = [];
      for (let item of array) {
        callbackMap[callback(item)] = item
      }
      let keys = this.keys(callbackMap).sort()
      for (let k of keys) {
        sorted.push(callbackMap[k])
      }
      return sorted
    },

    flatten: function(array, shallow = false) {

    },

    uniq: function(array, isSorted = false, callback = ele => ele) {
      let seen = {};
      let uniqArr = [];
      for (let item in array) {
        if (!seen[callback(array[item])]) {
          uniqArr.push(array[item]);
          seen[callback(array[item])] = true;
        } 
      }
      return uniqArr
    },

    keys: function(object) {
      let keys = [];
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      let values = [];
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const functionNames = []

      for (let key in object) {
        if (typeof object[key] === 'function') functionNames.push(key)
      }
      return functionNames.sort()
    }


  }
})()

fi.libraryMethod()
// const objA = {a: 1, b: 2}
// const objB = objA
// const objC = {c: 3, d: 4}
// console.log(fi.uniq([objA, objB, objC]))

// console.log(fi.reduce([2, 3, 4, 4], (acc, val, collection) => acc + val, 1))
fi.sortBy([1])
