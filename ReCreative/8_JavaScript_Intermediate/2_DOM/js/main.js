document.body.textContent = 'hello';

document.title = 'JavaScript2-1';

//windowオブジェクトの中身をconsole.logで確認してみます。
console.log(window);

//（例その１）location

//①location.hrefでURLを取得して、変数urlに代入。
let url = window.location.href;

//②ブラウザを更新すると、URLが表示されます。
console.log(url);

//（例その２）alert

window.alert('Hello World');