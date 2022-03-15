/*var data1 = 20;
let letData1 = 300;
console.log(data1);
console.log(letData1);
//var data2;
console.log(data2); //호이스팅 => var로 선언된 변수
console.log(letData2);
var data2 = 500;
let letData2 = 600;*/

// {
//     let data1 = 100;
//     var data2 = 200;
// }
// //console.log(data1);
// console.log(data2);

//변수 : 메모리상에 특정위치를 기호화 해놓은 것
//만드는 시점에서(선언) 용도와 크기가 결정된다 -> 타입에 엄격한 언어
//용도와 크기가 자료의 할당에 의해 결정된다 -> 타입에 느슨한 언어(자바스크립트)

var input = prompt("숫자를 입력해주세요");
if(input&1 == 0){
    document.write(input + "은 짝수 입니다.");
}
else{
    document.write(input + " 은 홀수 입니다.");
}