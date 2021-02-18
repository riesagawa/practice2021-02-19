// usescript=書いておくとエラーが発見しやすくなる
'use script';

console.log('Hello World from main.js!');
console.log("It's me!");//文中のシングルクォーテーションに気をつける。ダブルクォーテーションで囲う方法と
console.log('Is\'s me!');//バックスラッシュをつける。option + ¥ バックスラッシュ直後の'は文字として扱われる
console.log('Hel\nlo Wor\tld!');//改行\n  タブ\t
console.log('Hello' + 'World');
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);//整数の割り算の余り10/3の余り1
console.log(10 ** 3);//べき乗 10の3乗1000

console.log(150 * 140);
console.log(150 * 160);
const price = 150;//定数は後で変更できないやつ
console.log(price * 140);
console.log(price * 160);

let tanka = 160;//変数。名前にハイフンは使えない。数字から始められない。大文字と小文字は区別される。
//予約語は使えない。
console.log(tanka * 100);
tanka = 170;
console.log(tanka * 100);

let nedan = 500;
//nedan = nedan + 100;
nedan += 100; //省略した書き方
//nedan = nedan * 2
nedan *= 2;
//nedan += 1
nedan ++;
//nedan -=1
nedan --;
console.log(nedan);

//データ型について
// 文字列(string),数値(number),Undefind(定義されていない),Null(ヌル値が無い),真偽値(boolean),
console.log(typeof 'Hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefind);
console.log(typeof null);
//シングルクォーテーションで囲って'5'文字列としているけどちゃんと計算ができてしまう。
console.log('5' * 3);
console.log('5' - '3');
//ただし、プラスの時だけは文字列を単につなげる記号とみなされる　＋
console.log('5' + 3);//53となる
console.log(parseInt('5',10) + 3);//10進数の5
console.log(parseInt('hello' ,10));//NaN 数字が無いという意味
const hikaku=1200;
console.log(hikaku>1000);//true 大なり
console.log(hikaku<1000);//false 小なり
console.log(hikaku>=1000);//true  以上
console.log(hikaku<=1000);//false  以下
console.log(hikaku===1000);//false  1000である
console.log(hikaku!==1000);//true  1000じゃない
//false <- 0,null,undefind,'',false
//true <- それ以外
console.log(Boolean(0));
console.log(Boolean('hello'));

//if(条件式A){Aがtrueだった時の処理}
//else if(条件式B){AがfalseでBがtrueだった時の処理}
//else{Bもfalseだった時またはそれ以外の時の処理}
const score=70;
if(score>=80){
  console.log('80点以上です！');
}else if(score>=60){
  console.log('60点以上です。');
}else{console.log('OK...');}
//条件演算子 if文ではない書き方
//条件式?trueの処理:falseの処理
const tennsu=85;
tennsu >= 80 ? console.log('Great!!'):console.log('80点未満です')
const sco=60;
const name='sagawa';
if(sco>=50){
  if( name ==='sagawa'){
    console.log('Good Job!');
  }}
//論理演算子
// && なおかつ(AND)
// || もしくは(OR)
// ! 〜ではない(NOT)
if(sco>=50 && name==='sagawa'){
  console.log('Good Job!');}

let signal='red'
if(signal==='red'){
  console.log('Stop!');
}else if(signal==='yellow'){
  console.log('Caution!');
}else if(signal==='blue'){
  console.log('Go!');}
//switch文
signal='green'//変数に値を再代入
switch(signal){
  case 'red' : console.log('Stop!'); break;
  case 'yellow': console.log('Caution!'); break;
  case'blue':case'green': console.log('Go!'); break;
  default:console.log('Wrong Signal');}

for(let i = 1 ; i <= 5 ; i++){
  //console.log('Hello!');
  console.log('Hello!'+i);
  //文字列に変数の値を埋込むテンプレートリテラル
  //shift+@キーでバッククォーテーション``で囲み${}
  console.log(`Hey! ${i}`);}

let hp = 100;
while(hp > 0){
  console.log(`HP残り ${hp}`);
  hp -= 15; //15づつ減らしていく
}//-15を描き忘れると無限ループになるので要注意！
hp = -50;
do {
  console.log(`HP残り ${hp}`);
  hp -= 15; //15づつ減らしていく
}while(hp > 0);
//
for(let n = 1 ; n <= 10 ; n++){
  if(n===4){
    break; //ループを終了する
  // if(n % 3 === 0 ){
  //   continue; //ループ処理を一回飛ばす
  }
  console.log(n);
}




