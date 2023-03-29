const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];

// export default function seraching(array,name){
//   for(let i=0;i<array.length;i++){
//     if(array[i]===name){
//       console.log(i);
//     }
//     else {
//       console.log(`해당 순서는 ${name}씨가 아닙니다.`)
//     }
//   }
// }

// seraching(studentList,"강지민")

//객체 리턴 방식
function makeConstruct(order,name){
  return{
    order:order,
    name:name
  }
}

// 생성자 함수 방식 : 생성자 함수 방식은 객체 앞에 생성자의 이름이 남기 때문에, class로 만들어 진 것을 알 수 있다.
// function user(index,name){
//   if(typeof index ==="number"){
//   this.order=index;
//   this.name=name
//   }
//   else{
//     console.log("order에는 숫자만 입력하시오.")
//   }
// }

// const a = new user(1,"강지민");
// const b = new user(2,"김은아");
// const c = new user("a","나나나")

class User {
  constructor(order,name){
    this.order=order;
    this.name=name;
  }
  set order(order){
    if(typeof (order)==="number"){
      this._order = order;
    }
    //숫자가 아니면 객체를 생성하지 않음. 안정성이 높다.
  }
}

let test = [];
studentList.forEach((student, index)=>{
  test.push(new User(index,student))})

console.log(test)