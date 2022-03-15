// let cl = console.log;
// // 이 시점에서 cl은 console.log와 같다.
// cl(2+3);
// cl(2+'35'*2);
// cl('12345' - 35);
// cl(undefined+365);
// // cl(aaa+365);
// // aaa=50;

//cl(aaaa);
//aaaa=30; // 전역 변수 => 선언된 후부터 사용 가능하다.
//var bbbb = 50; //함수 스코프 변수 => 전역 변수로 사용

//console.log => console, log도 변수
//console이라는 변수에 들어있는 녀석이 내장 객체
//log : console이 담고 있는 실행환경에서 제공하는 내장객체
var cl = console.log;
var aaa = 100;
var bbb = aaa;
console.log(bbb);