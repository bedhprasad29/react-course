// JS - Objects - Constructor Functions - Practice Problems #90
// 1
function Calculator() {
    this.read = function (val1, val2) {
        this.val1 = +val1;
        this.val2 = +val2;
    }

    this.sum = function () {
        return this.val1 + this.val2;
    }

    this.mul = function () {
        return this.val1 * this.val2;
    }
}

const calc1 = new Calculator();
calc1.read(3, 4)
console.log(calc1.sum())

// 2
function Accumulator(startingValue) {
    this.currentValue = startingValue;

    this.read = function () {
        this.currentValue += parseInt(prompt('Enter a value you want to add : '));
        return console.log(this.currentValue);
    }
}

const acc = new Accumulator(10);
acc.read()
acc.read()