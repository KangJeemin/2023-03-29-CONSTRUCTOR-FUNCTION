
function coffee(name,born,price,during){
  this.name = name;
  this.born = born;
  this.price = price;
  this.during = during;
  console.log(`커피의 이름은 ${name}이며 원산지는 ${born} 이고 가격은 ${price}이며, 배송기간은 ${during} 입니다.`)
}

export default coffee;