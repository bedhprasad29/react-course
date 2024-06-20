// After  #Task 2

// Modal Methods (pauses script execution, dont allow visitors to interact with rest of page untill window is dismissed)
// alert('one'); // Displays in browser
// confirm("Are you sure ? ") // Present with OK and Cancel option for user
// prompt("What is your age ? ") // Presents with input feild to enter value. 

// WAP to take two numbers from prompt , log both and print sum of both numbers
// let num1 = prompt('Give your first number');
// let num2 = prompt('Give your second number');
// console.log(typeof num1, typeof num2);

// console.log(num1 + num2);

// ### Type Conversion

// console.log(Number(undefined))
// console.log(Number(null))
// console.log(Number("One"))
// console.log(+null); // + is unary operator (very useful)

// After Task 3

var a = 5;
function outer() {
    console.log(a);

    function inner() {
        console.log(a);
        var b = 10;
        var b = 20;
        let r = 5;
        r = 10;
    }

    inner()

}

outer()

////////////////////
var obj = {}
obj.name = "Bedh";
obj['age'] = 34;


console.log(obj)

///////

const str = { "name": "Bedh", "age": 29, "place": "Guwahati" }

console.log(JSON.stringify(str))
