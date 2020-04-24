'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Takes a parameter and returns the value unchanged.
 * 
 * @param {Value} value: Can be any input value.
 * 
 * @return {Value}: Will be the same value as my input values.
 * 
 */
function identity(value) {
    return value;
}
module.exports.identity = identity; 

/**
 * typeOf: Takes a parameter and returns its type as a string.
 *
 * @param {Value} value: Can be any input value.
 *
 * @return {String}: Will output the datatype of the input value as a string.
 *
 */

function typeOf(value) {
    if (typeof(value) === 'string') {
    return "string";
} else if (Array.isArray(value) === true) {
    return "array";
} else if (typeof(value) === 'undefined') {
  return "undefined";
} else if (typeof(value) === "number") {
  return "number";
} else if (typeof(value) === "boolean") {
  return "boolean";
} else if (value === null) {
  return "null";
} else if (typeof(value) === 'object'){
  return "object";
} else {
  return "function";
}
};
module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first of a certain number of the inputted array elements.
 *
 * @param {Array} array: Input must be an array. Will output elements from this array. If input
 * array argument is not an array, will return an empty array.
 * @param {Number} number: Input must be a number. Will output this amount of array elements.
 * If this input number is not a positive number, the function will return an empty array.
 *
 * @return {Array}: Will output the number of array elements specified.
 *
 */

function first(array, number) {
   let storage = []; 
   if (Array.isArray(array) !== true) {
        return []; 
    } else if (number === undefined || ((isNaN(number)) === true)) {
        return array[0]; 
    } else if (number > array.length) {
        return array;
    } else {
        for (let i = 0; i < number; i++) {
            storage.push(array[i]); 
        }
    } return storage; 
};
module.exports.first = first;

/**
 * last: Designed to return the last of a certain number of the inputted array elements.
 *
 * @param {Array} array: Input must be an array. Will output elements from this array. If input
 * array argument is not an array, will return an empty array.
 * @param {Number} number: Input must be a number. Will output this amount of array elements.
 * If this input number is not a positive number, the function will return an empty array.
 *
 * @return {Array}: Will output the number of array elements specified, taken from the end.
 *
 */

function last(array, number) {
   let storage = []; 
   if (Array.isArray(array) !== true) {
        return []; 
    } else if (number === undefined || ((isNaN(number)) === true)) {
        return array[array.length -1]; 
    } else if (number > array.length) {
            return array;
    } else {
        for (let i = array.length - number; i < array.length; i++) {
            storage.push(array[i]); 
        }
    } return storage; 
};
module.exports.last = last;

/**
 * indexOf: Designed to return the index of input array that has the first occurrence of index value.
 *
 * @param {Array} array: Input must be an array. Will output index from this array.
 * @param {Value} value: Input can be any value. Will output index of array with this value.
 *
 * @return {Number}: Returns the first occurrence of index of array that houses the input value.
 * Returns -1 if the element is not found.
 *
 */


function indexOf(array, value) {
    if (value > array.length) {
            return array;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value)
            return i;
        } 
    }  return -1;
};
module.exports.indexOf = indexOf;

/**
 * contains: States whether or not input array has the input value among its elements.
 *
 * @param {Array} array: Input must be an array. Will output whether this array has the input value.
 * @param {Value} value: Input can be any value. Will output if this value is in the input array.
 *
 * @return {Boolean}: Returns the true if input array has input value, false if not.
 *
 */

function contains(array, value) {
let something = '';
    for (var i = 0; i < array.length; i++) {
        something = value === array[i] ? true : 'notyet';
        if (something === true) {
            return true;
        }
    } return false;
};
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function that will be applied to each value in the 
 * collection.
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Returns a new array of elements without duplicates
 * 
 * @param {Array} array: The data to be returned without duplicates.
 * 
 * @return {Array}: Returns new array with duplicates removed.
 */

function unique(array) {
 var unique = [];
 for (var i = 0; i < array.length; i++) {
   if (_.indexOf(unique, array[i]) < 0) {
     unique.push(array[i]);
   }
 } return unique; 
};
module.exports.unique = unique;


/**
 * filter: Designed to loop over an array, passing the arguments of the input
 * function and returning true or false depending on if each element passes.
 * 
 * @param {Array} array: The collection over which to iterate.
 * @param {Function} method: The Function to be applied to each value in the 
 * collection
 * 
 * @return {Array} array: Returns array of true or false values depending on if
 * each element passes.
 */

function filter(array, method) {
let storage = [];
// if collection is array
    if (Array.isArray(array) === true) {
// loop starting at 0, end at collection length, increment +1
        for (let i = 0; i < array.length; i++) {
// run collection at index i, index i, and collection through method
            if (method(array[i], i, array) === true) {
                storage.push(array[i]);
            };
        }
    } return storage;
}
module.exports.filter = filter;

/**
 * map: Pass each element in the input collection arguments of the input function
 * creating a new array with the return values.
 * 
 * @param {Array or Object} collection: An array or object of values for the
 * function to be used on.
 * @param {Function} method: Function to be applied to each element in the input
 * collection.
 * 
 * @return {Array}: Returns the value of each function call in a new array.
 */

function map(collection, method) {
    let storage = [];
    if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
            storage.push(method(collection[i], i, collection));
        }
    }
    else {
        for (var key in collection) {
            storage.push(method(collection[key], key, collection));
        }
    }
    return storage;
}
module.exports.map = map;

/**
 * pluck: Creates an array containing the value of input property for
 * every value in the input array.
 * 
 * @param {Array} array: Input array to have the input property applied to.
 * @param {String} property: Input property string to be applied to each element in 
 * input array.
 * 
 * @return {Array}: Returns an array containing the value of input property
 * for each element.
 */
 
function pluck(array, property) {
let storage = (_.map(array, _.identity));
let names = [];
    for (let i = 0; i < storage.length; i++ ) {
        names.push(storage[i].name);
    }
return names;
}
module.exports.pluck = pluck;

/**
 * every: Call the input function for every element in the input collection
 * returning true if every test passes as true, returning false if any test
 * is false.
 * 
 * @param {Array or Object} collection: Input array or object to have input
 * function applied to it.
 * @param {Function} method: Input function to be applied to each element in
 * the collection.
 * 
 * @return {Boolean}: Returns true if every test passes true, returns false
 * if any test is false. Returns true for truthy results when no function is passed in.
 * Returns false for falsy results when no function is passed in.
 */
 
 function every(collection, method) {
   let test = '';
    if (typeof method !== 'function') {
          for (let i = 0; i < collection.length; i++) {
        collection[i] ? test = true : test = false;
        if (test === false) {
            return false; 
        } 
        } return true; 
    } 
    let results = true; 
    if (typeof method === 'function') {
let storage = _.map(collection, method);
        for (let i = 0; i < storage.length; i++) {
        if (storage[i] === false) {
            results = false; 
        } 
    }
    }
    return results; 
};
module.exports.every = every;

/**
 * some: Call the input function for every element in the input collection
 * returning false if every test passes as false, returning true if any test
 * is true.
 * 
 * @param {Array or Object} collection: Input array or object to have input
 * function applied to it.
 * @param {Function} method: Input function to be applied to each element in
 * the collection.
 * 
 * @return {Boolean}: Returns false if every test passes false, returns true
 * if any test is true. Returns true for truthy results when no function is passed in.
 * Returns false for falsy results when no function is passed in.
 */
 
 function some(collection, method) {
     let test = '';
    if (typeof method !== 'function') {
          for (let i = 0; i < collection.length; i++) {
        collection[i] ? test = true : test = false;
        if (test !== false) {
            return true; 
        } 
        } return false; 
    } 
    let results = false; 
    if (typeof method === 'function') {
        let storage = _.map(collection, method);
        for (let i = 0; i < storage.length; i++) {
        if (storage[i] === true) {
            results = true; 
        } 
    }
    }
    return results; 
};
module.exports.some = some;

/**
 * reduce: Call the input function for every element in the input collection
 * passing arguments of the prevoius result, the current element, and the index.
 * Uses the previous result as the value for the next iteration, using seed
 * as the first value for "previous result"
 * 
 * @param {Array} collection: Input array to have input function applied to it.
 * @param {Function} method: Input function to be applied to each element in
 * the input array.
 * @param {Number, Array, or Object} seed: Starting value to act as the first 
 * "previous result".
 * 
 * @return {Number}: Returns the return value of the final function call.
 */

function reduce(array, method, seed) {
let current;
seed === undefined ? current = array[0] : current = seed;
let i;
  for (seed === undefined ? i = 1 : i = 0; i < array.length; i++) {
     current = method(current, array[i], i);
  }
  return current;
}
module.exports.reduce = reduce;

/**
 * extend: Copies the properties from object arguments after the first object
 * to the first object, returning the updated first object argument.
 * 
 * @param {Object} obj1: First object argument to have properties assigned to.
 * @param {Object} ...objs: The rest of the object arguments after the first,
 * which will have their properties assigned to the first object.
 * 
 * @return {Object}: Returns the updated first object.
 */

function extend(obj1, ...objs) {    
// assign object properties from rest of object arguments after first object to first object
  Object.assign(obj1, ...objs);
// return updated first object
  return obj1; 
};
module.exports.reduce = reduce;