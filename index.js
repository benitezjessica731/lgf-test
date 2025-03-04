// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./lgf-test
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//map, filter, reduce, each

var maleCount = function (array){
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current) {
        if (current.gender === 'female') {
            accumulator += 1;
        }
        return accumulator;
    }, 0);
    return females;
};

var oldestCustomer = function(array){
    //reduce method
    let oldest = _.reduce(array, function(accumulator, current){
        //determine if current customer is older than accumulator
        if (current.age > accumulator.age){
            //return current
            return current;
        //else  
        } else {
            //return accumulator
            return accumulator;
        }

    });
    return oldest.age;
};

var youngestCustomer = function(array) {
    let youngest = _.reduce(array, function(accumulator, current){
    //determine if current customer is younger than accumulator
    if (current.age < accumulator.age){
        return current;
    } else {
        return accumulator;
    }
});
    return youngest;
};

//var balance = "$3,868.37";
//var replaced = balance.replaceAll(/[$,]/g, "");
//console.log(replaced);
var averageBalance ;


var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;