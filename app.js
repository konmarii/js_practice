alert('Hello World');

let hello = "Hello, World";
alert(hello);

alert(4+3);
alert(8-5);
alert(2*6);
alert(10/2);

alert("Hello"+"World");

let str1 = 'Hello';
let str2 = 'World!';
alert(str1 + str2);

let orange = 100;
let apple = 120;

if(orange<apple) {
  alert('みかんの値段の方がりんごより安い')
} else if(orange == apple) {
  alert('みかんとりんごが同じ値段')
} else {
  alert('みかんの値段の方がりんごより高い')
}

let max = 100;
let num = 1;
let count = 0;

while(num<max) {
  num = num*2;
  count = count+1;
}

alert('２をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let i;
let num = 0;

for(i+1;i<11;i++) {
  num = num + i;
}

alert('１から１０まで足した結果は' + num + 'です');