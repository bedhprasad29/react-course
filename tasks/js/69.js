
function calcFunction() {
    const num1 = parseInt(document.getElementById('first').value);
    const num2 = parseInt(document.getElementById('second').value);

    const type = document.getElementById('type').value;

    let result = null;
    switch (type) {
        case "add":
            result = num1 + num2;
            break;

        case "sub":
            result = num1 - num2;
            break;

        case "mul":
            result = num1 * num2;
            break;

        case "div":
            result = num1 / num2;
            break;

        default:
            console.log('None of the type is selected');
    }

    console.log(`Result of ${num1} ${type} ${num2} is : ${result}`)
    document.getElementById('result').innerHTML = `Result of ${num1} ${type} ${num2} is : ${result}`
}