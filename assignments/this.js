/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - Binding context of what this is
* 2. Implicit Binding - Automatically binds object literals.
* 3. Explicit Binding - Binding functions.
* 4. New Binding - Constructor functions are meant to build object literals.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function action(param) {
    "use strick";
    console.log(this);
    return `Create the ${param}`;
}

console.log(action("action"));

// Principle 2

// code example for Implicit Binding

const orc = {
    name: "Kil",
    age: "38",
    attack: function() {
        return `${this.name} is going to attack because he is ${this.age}`;
    }
}

console.log(orc.attack());

// Principle 3

// code example for New Binding

const student = {
    name: "Sean"
}

const worker = {
    name: "Bob"
}

const abilities = ["Doin this", "doin that", "and da otha ting"];

function activate(abilities1, abilities2, abilities3) {
    debugger;
    return `Hi! My name is: ${this.name} and this is what I do: ${abilities1}, ${abilities2}, ${abilities3},`
}

console.log(activate.call(student, abilities))


// Principle 4

// code example for Explicit Binding

function Building(floor) {
    this.floor = floor;
    this.wing = function() {
        console.log(`We are on the ${this.floor}`);
    }
}

const brick = new Building('made of brick');
const stone = new Building('made of stone');

console.log(brick);