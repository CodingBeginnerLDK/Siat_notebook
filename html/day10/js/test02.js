console.log(typeof 19);
console.log(typeof undefined);
console.log(typeof (NaN));
console.log(typeof null);
console.log(typeof [1,2,3]);
console.log(typeof function(){});
console.log(NaN == NaN, "   ", NaN===NaN);
console.log(NaN + 30);
console.log(NaN != NaN);
console.log(Number('135k'));
console.log(130=='130', 130 === '135');

let data1 = 'sampleTest';
console.log('string' == typeof(data1));
console.log(Boolean(NaN));

// let inData = Number(prompt("숫자를 입력하세요"));
// inData = inData === 0 ? 0 : inData ? inData : Number(Boolean(inData));
// console.log(inData);

let numData = 157;
console.log(numData.toString() + 36);
//console.log(157.toString());

let strData = "yangdoll sample";
console.log(strData.split(' '));
console.log("yangdoll sample".split(' '));

let samtestLet;
var samtestVar; // 상자는 메모리상에 만들어졌는데 값을 넣지 않음.

console.log(samtestVar);//값을 넣지 않아도 사용 가능 => undefined
console.log(samtestLet);//사용할 수도 있고 => undefined 사용하지 못할 수도 있다. 초기화가 안됨.

//let 