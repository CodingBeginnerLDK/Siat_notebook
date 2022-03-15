// let funData1 = function(numData1, numData2){
//     // console.log(numData1||numData2);
//     let resultData = numData1 || numData2;
//     return function(){
//         console.log(resultData);
//     }
// }

// let result = funData1('a',100);
// //cobsole.log(resultData);
// console.log(result);
// result();

let funData01 = function(data1,data2){
    let myName = "이대관";
    let resultData = data1 + myName;
    
    return function(){
        console.log(resultData);
    };
}
console.log(funData01);
let aaa;
aaa = funData01(100,300);
console.log(aaa);
aaa();

aaa = 150;
console.log(aaa);
aaa = "ldk";
console.log(aaa);

let result = 10 > 20 && 40 < 70; //논리값 true or false
console.log(result);

result = {name : "first"} && {name : "ldk"};
console.log(result);
//true , false 0
//and 연산자
console.log('두 값 전부 논리 => ', true && false);//and 연산의 경우 첫번째 항목이 true이면 결과는 2번째 항목이다.
console.log('두 값중 하나만 논리일 때 =>', true && function(){});
console.log('두 값중 하나만 논리일 때 =>', false && 156);
//or 연산자
console.log('두 값 전부 논리 => ', true || false);
console.log('두 값 중에서 앞쪽이 true로 판단될 때 =>', true || function(){});
console.log('두 값중 하나만 논리일 때 =>', function(){} || false);

console.log(true & false);
console.log(false | true);

inputData = prompt("점수 입력 : ",0)*1;
console.log("가가가가가가양미우수수".charAt(parseInt(inputData/10)));
let jumsu = ['가','가','가','가','가','가','양','미','우','수','수'];
console.log(jumsu[parseInt(inputData/10)]);