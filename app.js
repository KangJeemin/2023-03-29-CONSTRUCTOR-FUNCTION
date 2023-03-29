const fs = require('fs');


function user(id,password,email){
  this.id = id,
  this.password = password,
  this.email = email
}

const d = new user("kangjimin","1234","wlals1234560@naver.com")
console.log(d)

let names = ["kangjimin","kangjisu","kimkyungmi"];
let password = ["1234","1234","1234"]
let emails = ["wlals1234560@naver.com","jisu@gmail.con","kyungmi@naver.com"];

let members =[];
for(let i=0;i<3;i++){
  members.push(new user(names[i],password[i],emails[i]))
}

fs.writeFileSync("members.JSON",JSON.stringify(members),"utf8");
console.log(members);