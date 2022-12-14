let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven(num) {
  for(let i = 0;i<num.length;i++){
    if(num[i] % 2 == 0){
      console.log(num[i] + 'は偶数です');
    }
  }
    
}
isEven(numbers);

class Car {
  constructor(gus, num) {
    this.gus = gus;
    this.num = num;
  }
  getNumGas() {
    console.log(`ガソリンは${this.gus}です。ナンバーは${this.num}です。`);
  }
}
let car1 = new Car(100, 555);
car1.getNumGas();
