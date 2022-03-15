let arrData = [];
let strData = "sample text";
let objData = {};

console.log("배열의 개수", arrData.length);
console.log("문자열의 문자개수", strData.length);
arrData.length = 10;
console.log("배열의 개수", arrData.length);
console.log("배열의 내용", arrData.toString());
console.log("배열의 3번 인덱스 자료 : ", arrData[3]);
console.log("배열 메소드 push() 실행한 결과 : ", arrData.push('개구장이'),arrData.toString());
arrData.length = 0;
console.log(arrData.toString());
arrData.push(1);
arrData.push('ssssasdf');
arrData.push("이대관");
arrData.push(100);
console.log(arrData);

console.log(arrData.pop(), arrData.length);

console.log(objData);
objData.name = "홍길동";
console.log(objData);

objData.info = function(){
    console.log(this.name);
}
console.log(objData);
//자바스크립트에서 this는 실행되는 시점에서 결정이 된다.

let newArrData = new Array();
let newArrData2 = new Array(10.5,12.3);
let newArrData3 = new Array(1,2,);
let newArrData4 = new Array('ldk');
let newArrData5 = [1,3,5,7,];

console.log(newArrData5.length);
//객체와 관련된 주의사항 학습할 것
const newArrData6 = [1,'홍길동',2,'나일등',function(){console.log('sample test')}];
const newArrData7 = [1,'홍길동',2,'나일등',3,'나이등'];
const newArrData8 = [{no:1,name:'홍길동'},{no:2,name:'홍길순'},{no:3,name:'홍길등'}];