//問1：次の条件を、論理演算子を使って表してください。
//変数aは10ではない
a != 10
//変数bは10以上20未満、かつ偶数である。
b >= 10 && b < 20 && b % 2 === 0

//問2：以下の条件を満たすように、記述してください
//変数xが、10〜20の値だった場合「成功です」と出力される
//それ以外は「失敗です」と出力される
//変数xには、最初に10を入れておいてください
let x = 10;
if (x >= 10 && x <= 20) {
    console.log('成功です');
} else {
    console.log('失敗です');
}

//問3：以下の条件を満たすように、記述してください
//変数yが偶数なら「偶数です」と出力される
//変数yが奇数なら「奇数です」と出力される
//変数yには、最初に0を入れておいてください
let y = 0;
if (y % 2 === 0) {
    console.log('偶数です');
} else if (y % 2 !== 0) {
    console.log('奇数です');
}