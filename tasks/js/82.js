// Change from Promise based to Async/Await

// function upload(url) {
//     console.log(`Uploading the picture ${url} ...`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (url) {
//                 resolve(url);
//             } else {
//                 reject(url);
//             }
//         }, 1000);
//     });
// }

// let URL = "https://www.javascripttutorial.net/pic.jpg";

// upload(URL)
//     .then((url) => console.log(`Processing the picture ${url}`))
//     .catch((url) => console.log(`The URL ${url} is not valid`));

function upload(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Uploading the picture ${url} ...`);
        }, 1000);
    });
}

function process(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing the picture ${url} ...`);
        }, 2 * 1000);
    });
}

async function showStatus() {
    let uploadUrl = await upload(URL);
    let processUrl = await process(URL);
    console.log(`The Uploading & Processing of ${URL} is Completed`);
}
// let URL = "https://www.javascripttutorial.net/pic.jpg";
let URL = "";

showStatus()
    .then(url => console.log(`This is valid url :  ${url}`))
    .catch(url => console.log(`This is not a valid  url : ${url}`))
