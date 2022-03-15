let sum = 0;
// for(let i=1;i<100;i+=1){
//     if(i%2==0){
//         sum-=i;
//     }
//     else{
//         sum+=i;
//     }    
// }

for(let i=1;i<100;i+=1){
    sum = sum + 1/i;
}

console.log(sum);

