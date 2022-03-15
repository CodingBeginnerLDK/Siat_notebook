let arrData = [1,2,3,4,5];
let sum = 0;
arrData.forEach(function(data,index,array){
    console.log("배열의 값 : ",data,"\n배열 인덱스 : ",index,"\n배열 전체 : ",array);
    if(index%2 != 0 ) {
        sum += data;
    }
});
console.log("배열의 합은 : ",sum,"안녕");

//배열에서 김씨 성을 가진 사람에게는 화이팅을
//그 외의 성을 가진 사람에게는 힘내라를 응원하는 프로그램을 작성해보기

let nameArr = ["김태희", "이대관","유시아","김미미","김지호"];
nameArr.forEach(
        (element) => {
            let messageText = "힘내라";
            if(element.startsWith("김")){
                messageText = "화이팅";
            }
            console.log(element,messageText);
});

console.log("====================================");
const birthMembers = ['을지문덕','강감찬','이순신'];
const birthDayInfo = ['2000년 12월 10일','1998년 6월 25일','1987년 12월 25일'];

const messages = birthMembers.map(
    function(arritem, arrIndex, arr){
    return arritem + "님의 생일을 축하합니다." 
    + `${arritem}님의 생년월일은 ${birthDayInfo[arrIndex]}입니다.`;
});
console.log(messages);
//화살표 함수로 꼭 변환해볼 것을 권장...
//맵이 콜백함수에서 어떤 자료를 어떻게 넘겨주는지 파악할 필요가 있다.
//그 과정을 꼭 작성해볼 것을 적극 권장.
//myMap 메소드 만들어보기 => Data 배열과, 함수를 넘겨받아서

