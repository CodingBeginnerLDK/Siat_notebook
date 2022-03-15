let stdobj1 = {
    stdnum : 3701,
    stdname : '홍길동',
    kor : 100,
    eng : 100,
    math : 100
}

function Student(stdnum,stdname,kor,eng,math){
//  this = {}; new 연산자를 이용해서 호출되면 삽입되는 내용
    this.stdnum = stdnum;
    this.stdname = stdname;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
//  return this; new 연산자를 이용해서 호출되면 삽입되는 내용
}

let stdobj2 = new Student(3702,'나일등',95,95,80);
console.log(stdobj2);
let stdobj3 = new Student(3703, '나꼴등',65,45,55);
console.log(stdobj3);
let stdobj4 = Student(3704,'나이등',77,66,55);
console.log(stdobj4);

let age = "age",address="address";
const computedObj = {
    [age] : 19,
    [address] : '서울시 강남구'
}
console.log(computedObj);

let objInfo = [ 'age', 19, 'address', 'seoul'];
const computeObj2 = {
    [objInfo[0]] : objInfo[1],
    [objInfo[2]] : objInfo[3]
}
console.log(computeObj2);

const samDeleteObj = {
    a:10,b:20,c:30,d:40
}
console.log(samDeleteObj);
delete samDeleteObj.c;
console.log(samDeleteObj);

//해체 할당
const {a,b,d} = samDeleteObj;
console.log(a,b,d);

let [aa,bb,cc,dd] = ['ldk','sample','text'];
console.log(aa,'    ',bb,'  ',cc,'  ',dd);
let [aaa,bbb,...ccc] = [1,2,3,4,5,6,7,8,9];
console.log(aaa,'   ', ccc);


