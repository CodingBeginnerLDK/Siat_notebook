function myMap(dataArr, fun){
    //dataArr부분 배열로 바꾸기
    //1번째 매개변수에는 배열이 와야한다.
    if(!(dataArr instanceof Array)){
        return;
    }
    //2번째 매개변수에는 함수가 와야한다.
    if(!(typeof fun === 'function')){
        return;
    }
    //2번째 매개변수에게 배열과 인덱스와 배열의 n번째 값을 넘겨주면서 반환
    let rtnArr = [];
    for(let i=0; i<dataArr.length; i++){
        rtnArr.push(fun(dataArr[i],i,dataArr));
    }    
    return rtnArr;
}

let arrdata2 = [1,2,3,4,5];
const resultArr = myMap(arrdata2, function(){
    return arguments[0]*2;
});
console.log("원본 배열 :", arrdata2, "변환된 배열 : ", resultArr);

//non filter
let arrdata33 = [16,33,52,45,21,18];
let arrSize = arrdata33.length;
resultArr.length = 0; //resultArr = [];
for(let i=0; i < arrSize; i++){
    if(arrdata33[i] >18 ){
        resultArr.push(arrdata33[i]);
    }
}
console.log(resultArr);

resultArr.length = 0; //resultArr = [];
for(let i=0; check(i); i++){
    if(arrdata33[i] >18 ){
        resultArr.push(arrdata33[i]);
    }
}
console.log(resultArr);

function check(){
    if(arrSize--/* data1 < arrdata33.length 관계 조건을 산술 조건으로 대체 */) return true;
    return false;
}

let radixData = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ가나다라마바사아자차카타파하";
//radixData.length => 40진법까지 표현 가능
//15 => 16진법 F
//몫이 0이 나올 때까지 반복{
//     result = radixData.charAt(15%16) + result;
// }
// ? result // 정수 결과

