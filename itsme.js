const itsme = {
  firstName:"kang",
  lastName:"jimin",
  age:26,
  email:"wlals1234560@naver.com",
  like:"working out",
  hate:"spicy food",
  hobby:"soccer",
  coffee:"dicoffee",
  food:"galbi",
  sleepTime:"every 11pm",
}

function getIn(firstName,lastName,age,email,like,hate,hobby,coffee,food,sleepTime){
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
  this.email=email;
  this.like=like;
  this.hate=hate;
  this.hobby=hobby;
  this.coffee=coffee;
  this.food=food;
  this.sleepTime=sleepTime;
}

const a = new getIn("강지민","jimin","26","wlals1234560@naver.com","working out","spicy food","soccer","dicoffee","galbi","every 11pm");
console.log(a);