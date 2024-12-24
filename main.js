const ism = prompt("String ma'lumot kiriting");
const num = +prompt("Raqam ma'lumot kiriting");
const hayoq = prompt("Boolean ma'lumot kiriting (true yoki false)");
const kattaSon = BigInt(prompt("BigInt ma'lumot kiriting (juda katta raqam)"));
const nullValue = null;
let aniqlanmagan;
const noyob = Symbol("Symbol");
const obekt = { name: "Sardor", age: 13 };

const tasdiq = confirm("Tasdiqlaysizmi? Agar OK bossangiz davom etamiz.");
if (tasdiq) {
  let userInput = prompt("Iltimos, biror son kiriting jigar:");

  if (userInput === null || userInput === "") {
    alert("Raqam tering jigar!!!");
  } else {
    let number = Number(userInput);

    if (isNaN(number)) {
      alert("Raqam tering jigar!!!");
    } else {
      if (number % 2 === 0) {
        alert("Jigarim kiritgan son: Juft");
      } else {
        alert("Jigarim kiritgan son: Toq");
      }
    }
  }
} else {
  alert("Tasdiqlanmadi. Dastur tugadi.");
}

console.log(`
    ${ism} - ${typeof ism} ma'lumot turiga kiradi
    ${num} - ${typeof num} ma'lumot turiga kiradi
    ${Boolean(hayoq)} - ${typeof Boolean(hayoq)} ma'lumot turiga kiradi
    ${kattaSon} - ${typeof kattaSon} ma'lumot turiga kiradi
   null - ${nullValue}  ma'lumot turiga kiradi
    ${aniqlanmagan} - ${typeof aniqlanmagan} ma'lumot turiga kiradi
    ${noyob.toString()} - ${typeof noyob} ma'lumot turiga kiradi
    ${JSON.stringify(obekt)} - ${typeof obekt} ma'lumot turiga kiradi
`);
