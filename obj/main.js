// let user = {
//     "full name": 'Cavidan',
//     "surname": 'Talibov',
//     "let": 'tcavidan.p301@code.edu.az',
//     "function": 'Function',
//     "age": 23,
//     "isMarried": false,
//     "totalCount": 0
// }



// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
// };

// for (let code in codes) {
//     console.log((+code).toString()); // 1, 41, 44, 49
// }



// let keyNames = ["full name", "surname", "let", "function", "age", "isMarried", "totalCount"];
// let values = ["Cavidan", "Talibov", "tcavidan.p301@code.edu.az", "Function", 23, false, 0];


// let user = {}

// for (let index = 0; index < keyNames.length; index++) {
//     user[keyNames[index]] = values[index]
// }
// console.log(user);

// let message = "Hello!";
// let phrase = message;

// phrase = 'Prase'
// console.log(message, phrase);

let message = {
    txt: "Hello!",
    user: {

        surname: 'Talibov'
    }
}



message.user.name;

// Object.assign(message, phrase, phrase2)


// message = {...phrase }

// let arr = [1, 2, 3];
// console.log(arr);
// console.log(...arr);

// let clone = _.cloneDeep(message);

// clone.user.name = "Nermine";

// console.log(message, clone);

// let clone = JSON.parse(JSON.stringify(message));

// clone.user.name = "Nermine";


// console.log(message, clone);

// let user = {
//     name: '',
// }; // user has no address

// if (user.address ? .street) {
// console.log(user.address ? .street);
// }

let data = Symbol('loding');

let products = {
    data: 'iphone'
}

alert(data);