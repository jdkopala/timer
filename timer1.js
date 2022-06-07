const args = process.argv.slice(2);
const goodArgs = [];
for  (let a of args) {
  a = Number(a);
  if (isNaN(a) || a < 0) {
    // console.log("badarg: ", a);
  } else {
    goodArgs.push(a);
  }
};
// console.log(goodArgs);

let timer = 1000
for (let t = 0; t < goodArgs.length; t++) {
  setTimeout( () => {
    process.stdout.write('\x07');
    console.log("BEEP", Date());
  }, timer * goodArgs[t]);
};