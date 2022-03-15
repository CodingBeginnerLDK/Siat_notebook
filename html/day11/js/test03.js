let arrTestData = ['banana','apple','mango','melon'];
//arrTestData.push('grape');
arrTestData.splice(arrTestData.length-1 , 1);
console.log(arrTestData);
//주의사항 : 배열에서 delete 연산자를 사용할 때는 용도를 명확하게 할 필요가 있음.
let numData = [1,2,3,4,5];
delete numData[2];
console.log("배열의 요소 개수 : ", numData.length);
console.log(numData);

let newarrData = arrTestData.concat(numData);
console.log(newarrData);

let testarr = ['qwert', 'asdfg','iotpy','jhhgf'];
//console.log(testarr.reverse());
console.log(ArrReverse(testarr));
function ArrReverse(ArrData){
    let newarr = [];
    for(let i= ArrData.length-1; i >= 0; i--){
        newarr.push(ArrData[i]);
    }
    console.log(newarr);
}

//sort함수 추적
function sortView(a,b){
    console.log(`a=${a},  b=${b}`);
    let imsi = a - b;
    console.log(`imsi = ${imsi}`);
    return imsi;
}
Atest = [12,45,13,55,67];
Atest.sort(sortView);

//임의의 긴 문장을 입력받아서, 긴 문장에 포함된 임의 단어를 출력하고 그 출력된 단어를 입력해서 출력된 단어에 입력된 단어가 일치한 갯수를 점수로 정량화 하는 프로그램
