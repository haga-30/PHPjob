//Humanクラスを作成
class Human {

  //コンストラクタ
  constructor(name, height, weight, gender, age) {
      this.name = name;
      this.height = height;
      this.weight = weight;
      this.gender = gender;
      this.age = age;
  }

  //歩くメソッド（関数）作成
  walk() {
      console.log(`身長${this.height}cm、体重${this.weight}kg、${this.name}という${this.gender}が歩きました`);
  }
}
//「山田」オブジェクト作成
let yamada = new Human('yamada', 170, 60, '男', 30);
yamada.walk();
