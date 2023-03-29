// const fs = require('fs');


// function user(id,password,email){
//   this.id = id,
//   this.password = password,
//   this.email = email
// }


// let names = ["kangjimin","kangjisu","kimkyungmi"];
// let password = ["1234","1234","1234"]
// let emails = ["wlals1234560@naver.com","jisu@gmail.con","kyungmi@naver.com"];

//let members =[];
//for(let i=0;i<3;i++){
//  members.push(new user(names[i],password[i],emails[i]))
//}

//fs.writeFileSync("members.JSON",JSON.stringify(members),"utf8");
//console.log(members);

import array from './array.js'
import prac2 from './prac2.js'

//console.log(array[0][0])
const a = new prac2(array[0][0],array[0][1],array[0][2],array[0][3],array[0][4]);
console.log(a);


