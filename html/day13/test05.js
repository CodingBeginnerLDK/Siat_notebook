const f1 = function(){
    console.log("111");
    setTimeout(f2, 1000);
};
const f2 = function(){
    console.log("222");
    setTimeout(f3, 1000);
};
const f3 = function(){
    console.log("333");
};
setTimeout(f1, 1000);
//setTimeout(f2, 1000);
//setTimeout(f3, 1000);

