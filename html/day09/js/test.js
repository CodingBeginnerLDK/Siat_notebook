let fun1 = function(){
    console.log("첫번째");
}
function fun2(){
    console.log("두번째");
}
fun1();

(function(){
    console.log("세번째");
})();

let fun4= function fun5(){
    console.log("네번째");
}