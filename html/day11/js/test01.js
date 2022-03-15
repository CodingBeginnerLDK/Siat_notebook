//객체 생성 : 리터럴에 의한 객체 생성, 생성자를 통한 객체 생성
const obj1 = {};
console.log(obj1);
obj1.name = '홍길동';
obj1["age"] = 19;
console.log(obj1);
obj1[0]=1472;
console.log(obj1);
//객체의 속성에 접근하는 방법은 .연산자와 []연산자를 사용할 수 있다.
//경우에 따라서는 .연산자로 접근이 안되는 경우도 있음.
//.접근 연산자는 배열(배열도 객체)에서 배열요소를 접근하는데 사용 할 수 없다.
//객체의 속성명이 특수문자가 들어있을 경우 .접근 연산자를 사용할 수 없다. 이 때는 반드시 []연산자를 사용해야 한다.
const obj2 = {
    0 : '김주현', 
    1 : '양우영',
    2 : '채희상',
    '개구장이 나일등' : '철부지',
    age : 19
}

console.log(obj2);
console.log(obj2[0]);
console.log(obj2['개구장이 나일등']);
let preWord = "개구장이";
console.log(obj2[preWord+' 나일등']);
console.log(obj2[0], obj2['0']);
console.log(obj2["age"]);

const obj3 = new Object();
console.log(obj3);
obj3['myname'] = '을지문덕';
console.log(obj3);
obj3.inforPrn = function(){
    console.log(this.myname);
};
console.log(obj3);
console.log(obj3.inforPrn);
obj3.inforPrn();
obj3["inforPrn"]();
//아래의 방법은 사용하지 마세요. 그런데 옛날 소스에는 있을 수도 있다.
const obj4 = Object();
console.log(obj4);

//배열을 객체로 표현
const obj5 = {0:1, 1:2, 2:3, 3:4, 4:5}; //<= {1,2,3,4,5}
for(let i=0; i<5;i++){
    console.log(obj5[i], '  ', obj5.i);
}

//json 형태 객체 정의
const generalObj = {name : '홍길동', age : 19, address : '정자1동'};
const jsonObj = {"name" : "홍길동", "age" : 19, "address" : "정자2동"};//속성명을 쌍따옴표로 감쌈. 문자열 값을 쌍따옴표
console.log(generalObj);
console.log(jsonObj);

//정리하고 그 기능을 한 번 실습해보기, object.assign(), object.keys(), values(), entries()
const copyObj = generalObj;
const deepCopyObj = Object.assign({},generalObj);

