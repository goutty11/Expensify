import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBO8G_q4shrMtWfZhbT8LohPLH4LfO7lTw",
    authDomain: "expensify-6c516.firebaseapp.com",
    databaseURL: "https://expensify-6c516.firebaseio.com",
    projectId: "expensify-6c516",
    storageBucket: "expensify-6c516.appspot.com",
    messagingSenderId: "886824084075"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().set({
//     name:'Vicky',
//     age: 27,
//     isSingle: true,
//     location: {
//         city:'Bridgeport',
//         country:'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e)=> {
//     console.log('This is the error',e);
// });

// database.ref('attributes').set({
//     height: 55,
//     weight: 124
// }).then(() => {
//     console.log('Changes are made');
// }).catch((e) => {
//     console.log('Sorry',e);
// });

// database.ref('location/city').set('Boston').then(() => {
//     console.log('Location updated');
// }).catch((e) => {
//     console.log('Location update failed',e);
// });


// database.ref().update({
//     age:32,
//     isSingle: false,
//     'location/city': 'San Francisco'
// });

