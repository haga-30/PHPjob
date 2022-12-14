class Taiyaki {
  constructor(content) {
    this.content = content;
  }
  whatIsContent() {
    console.log('中身は' + this.content + 'です');
  }
}

let anko = new Taiyaki('あんこ');
anko.whatIsContent();
let cream = new Taiyaki('クリーム');
cream.whatIsContent();
let cheese = new Taiyaki('チーズ');
cheese.whatIsContent();