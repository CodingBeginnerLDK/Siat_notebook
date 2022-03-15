// let gvar1=20; //변수를 선언한 위치가 전역이기 때문이다.
// (function(){
//     let var1 = 30;
//     var var2 = 40;
//     var3 = 50; //전역변수
//     console.log(var1, " ", var2, "  " ,var3, "  ", gvar1);
// })();
// console.log(gvar1);

(function(){
    let data1='홍길동';
    let inFun01 = function(){
        console.log(data1);
        inData2 = '나일동';
        for(var i=0; i<2;i++){
            console.log("==========");
        }
        console.log(i);
    }
    inFun01();
    console.log(data1,inData2);
})();
//console.log(i);