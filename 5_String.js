const name ="Mahima_k" // 1 type to declare string
const postCount = 25

//This is outdated code for nowdays
console.log(name + postCount + "!!");

//standard code or nowdays easily reable and changable code
console.log(`hello my name is ${name} and my post count on insta is ${postCount} `);

const gamename = new String('Mahima_v-k')

//methods to declare string 

console.log(gamename [0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('i'));

const newString = gamename.substring(0, 4)
console.log(newString);

const anotherString = gamename.slice(-5, 2)
console.log(anotherString);

const newString1 = "    mahima "
console.log(newString1);
console.log(newString1.trim());

const url = "http://mahima.com/mera%20baba"
console.log(url.replace('%20', '_'));
console.log(url.includes('kasfgcg'));

console.log(gamename.split('_'));
