/* jshint esversion : 6 */
//console.log(process.argv);

var sum = 0;
// soluce 1 => avec une boucle for
for (let i = 2; i < process.argv.length; i += 1) {
    sum += Number(process.argv[i]);
}

// soluce 2 => soluce avec forEach
// process.argv.forEach((val, i) => {
//     if (i >= 2) sum += Number(val);
// });

// soluce 3 => forEach sur tableau destructuré avec l'opérateur spread
// const [head, , ...tail] = process.argv;
// tail.forEach(n => {
//   sum += Number(n);
// });

console.log(sum);
