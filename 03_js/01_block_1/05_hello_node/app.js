/*jshint esversion: 6*/

// démarrer ce ficher depuis un terminal avec la commande =>
// node ./app.js
// 
console.log("hello from node");

var user = {
    rank: "wizzard",
    power: "JS",
    lifePoints: 100,
    name: "Brendan",
    isJSCreator: true
};

console.log(user);
console.log(`${user.name} is a ${user.rank}`);
