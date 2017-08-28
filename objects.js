// Create an object called user that has name, age, password properties and assign them appropriate values.

// Code Here
var user = {
 name: "shiv",
 age: "timeless",
 password: "xxxx",
}


// Add an email and username, as well as a method called alertUser that alerts the users name, to your user object using dot notation.

// Code Here
user.email = "x@y.com";
user.username = "coder123";

user.alertUser = function(){
  alert(user.name)
};


// Now loop over your user object and alert each of the keys.

// Code Here
for(var key in user){
 alert(JSON.stringify.user[key])
};


// Now loop over your user object and alert each of the values for each key.

// Code Here
for(var key in user){
 alert(JSON.stringify.user)
};




// Remove the username from your user object

// Code Here
delete user.username;


// Create an object called creditCard that has number, cvc, type, and limit properties and assign them appropriate values.

// Code Here
var creditCard = {
  number: 339ruq95u,
  cvc: 333,
  type: "master",
  limit: 99999999999999999999999999999999999999999999999
}



// Create a variable called alternating. Set it equal to the string bonusCategories.

// Code Here
var alternating = "bonusCategories";



/* Using bracket notation, add a bonusCategories key to your creditCard object using 'alternating'.
    Set it's value to an array of 3 items that are objects.
    Each object should have one key value pair.
    That key value pair should be the category as the key and the percent it's work for the bonus as the value.
    (e.g. Department Stores, 5%)

    Using dot notation add another key to your object called 'bank' with the value being an object with 2 keys,
        the bank name, and the bank address.

    */

// Code Here

creditCard[alternating] = [{color: "blue"},{size: "normal"},{weight: 20}];

creditCard.bank = {bank: "BofA", address:"wallstreet"};

// Write a function that will take your creditCard object and user object as arguments and combine them into one object. /* HINT: You will need a for..in loop */

// Code Here
function combine(ob, obj){
var object = {};
  for(var key in ob){
    ob[key] + obj[key] = obj2;
  object.push(obj2);
  }
  return object;
};

/*Below you are given an object. Write a function that will loop over the allies property, remove LittleFinger, and insert Dragon Lady.
    It will also change alive to 'More Than Ever'.
    Return the object. */

var obj = {
    user: 'Jon Snow',
    allies: ['That guy into Brienne', 'Ser Davos', 'LittleFinger'],
    alive: 'Sort of',
  };

  // Code Here
