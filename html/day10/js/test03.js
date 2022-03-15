// let strData = "샘플 테스트 자료";
// console.log(strData[1]);
// console.log(typeof strData[0]);
// console.log('ABCD'.codePointAt(0));//아스키코드 구하는 함수
// console.log("아스키코드를 문자열로 변환 => String.fromCodePoint", String.fromCodePoint(97));
// console.log(strData.charAt(0));

let testText="누구나 한 번 쯤은 사랑에 속고 누구나 한 번 쯤은 사랑에 울고 그것이 바로 사랑 사랑이야";
let search = "사랑";
let count = 0;
let position = 0;
searchCount(testText,search);

function searchCount(text, searchword){
    for(let pos=0; pos < text.length; pos++){        
        let found = text.indexOf(searchword,position);
        if(found !== -1){            
            count++;            
        }
        console.log(found);
        
    }    
    return count;
}

