const arrData = [45,4,9,16,25];
const resultValue = arrData.reduce(
    function (total,value,index,array){
        console.log("1번째",total,"\n2번째",value,"\n3번째",index,"\n4번째",array);
        return total + value;
    },0);
console.log(resultValue);

const resultValue2 = arrData.reduce(
    function(total,value){
        total.push(value*2);
        return total;
    }, []
);
console.log(resultValue2);

const resultValue3 = arrData.reduce(
    (... arguments) => {
        console.log(arguments);
        arguments[0].push(arguments[1]*2);
        return arguments[0];
    },[]
);
console.log(resultValue3);