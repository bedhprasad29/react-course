// JS - Classes and Objects - Class Declaration & Object Creation #160

class Book {
    // 1
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    // 2
    displayInfo() {
        return `Title: ${this.title}, Author: ${this.author.name}`
    }
}

// 3
class Circle {
    constructor(radius = 1, color = 'red') {
        this.radius = radius;
        this.color = color;
    }
}

// 4
class Author {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
}

// 5 
class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    // 6
    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        return num1 / num2;
    }
}

// 7
const author = new Author('Ankur Wariko', 1983);
console.log(author)

let book = new Book("Do Epic Shit", author);
console.log(book.displayInfo());


// 8
const calc1 = new Calculator();
console.log(calc1.add(2, 2));
console.log(calc1.subtract(2, 2));
console.log(calc1.multiply(2, 2));
console.log(calc1.divide(2, 2));

// 9
class ShoppingCart {
    constructor(items = []) {
        this.items = items;
    }

    addItem(item) {
        this.items.push(item)
    }

    // 10
    removeItem(item) {
        this.items = this.items.filter(it => it != item)
    }
}

const cart = new ShoppingCart();
cart.addItem('Shoes')
cart.addItem('Protien Powder')
cart.addItem('Cashew Nuts')
cart.addItem('Nuts')
console.log(cart)
cart.removeItem('Nuts')
console.log(cart)
