// const person = {
//     name: 'Manoj',
//     age: 24,
//     location: {
//         city:'Bridgeport',
//         temperature: 29
//     }
// };

// const {name = 'Anonymous', age} = person;

// console.log(`${name} is ${age}`);

// const { city, temperature: temp} = person.location;
// if(city && temp)
// {
//     console.log(`The temperature in ${city} is ${temp}`);
// }

// const Book = {
//     name: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     Publisher: {
//        // name: 'mamam'
//     }
// };


// const { name: publishername = 'Self-published'} = Book.Publisher;

// console.log(publishername);

const address =['441 gregory street', 'Bridgeport', 'connecticut', '06604'];

const [, city, state, zipcode] = address;

console.log(`I live in ${city},${state}`);


const coffee = ['coffee(iced)', '$2', '$2.50', '$2.75'];

const [type,,cost] = coffee;

console.log(`This ${type} coffee costs ${cost}`);