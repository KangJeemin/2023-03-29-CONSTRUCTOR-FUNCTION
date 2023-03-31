class makeFood {
  constructor(carbo,protein,fat){
    this.carbo = carbo;
    this.protein = protein;
    this.fat = fat;
  }

  get carbo(){
    return this.carbo;
  }

  set carbo(value){
    if(typeof(value) === "number"){
      console.log("문자열만 입력하시오")
    }
    else{
      this._carbo=value;
    }
  }
}

const a = new makeFood(2,"단백질","지방");

console.log(a)