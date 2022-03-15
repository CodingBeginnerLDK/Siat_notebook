//3번째 방법 class를 이용한 상속
class Car{
    constructor(wheels=4,doors=4){
        this.wheels = wheels;
        this.doors = doors;
    }
    drive(){
        console.log("drive~!");
    }
}
class Bmw extends Car{
    constructor(color){
        super(); //자바에서는 생략 가능, 반드시 하위클래스에서 상위클래스의 생성자메서드를 호출해줘야 함.
        this.color = color;
    }
    //오버라이딩
    drive(){
        super.drive();
        console.log("Overriding Drive~~");
    }
}
const z4 = new Bmw('red');
console.log(z4);
z4.drive();