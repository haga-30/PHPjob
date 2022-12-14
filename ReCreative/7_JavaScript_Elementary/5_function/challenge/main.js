function createJuice(fruites) {
  console.log(fruites + 'を受け取りました。ジュースにして返します');
  return fruites + 'ジュース';
}
let orangeJuice = createJuice('みかん');
console.log(orangeJuice + 'が届きました');