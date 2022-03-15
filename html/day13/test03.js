//상속 => 첫번째 방법
const car = {
    wheels : 4,
    drive(){
        console.log("drive!!!");
    },
    stop(){
        console.log("stop!!!");
    }
} //공통적인 부분을 객체로 생성함 => 부모 개체
const BMW = function(color){
    this.color = color;
} //생성자 함수를 정의, 리터럴 방식
const x7 = new BMW("Black");
const x5 = new BMW("White");
x7.__proto__ = car; //x7객체가 car 객체를 상속 받는다.
x5.__proto__ = car;
console.log(x7);
console.log(x7.wheels);
console.log(x5.wheels);
console.log(x7.drive());

//2번째 방법
const Benz = function(name){
    this.name = name;
}
Benz.prototype.wheels = 4;
Benz.prototype.drive = function(){
    console.log("drive!!!");
}

const myCar = new Benz("CLS650");
console.log(myCar);
console.log(myCar.wheels);
myCar.drive();
const broCar = new Benz("A Class");
console.log(broCar);
console.log(broCar.wheels);