//객체 리터럴에 의한 객체 생성
const obj1 = {
    name : "ldk",
    addr : "정자동",    
    dataPrint(){
        console.log(this.name, this.addr);
    }
}
console.log(obj1);
obj1.dataPrint();

console.log("====Object 생성자를 이용한 객체 생성====");
const obj2 = new Object();
obj2.name = "ldk";
obj2["addr"] = "정자동";
obj2['data' + 'Print'] = function(){
    console.log(this.name, this.addr);
}
console.log(obj2);
obj2.dataPrint();

function ObjCreate(name, addr){
    this.name = name;
    this.aadr = addr;    
}
//객체를 생성할 목적으로 만들어진 함수
const obj01 = new ObjCreate('ldk',"정자동");
console.log(obj01);

const obj02 = new ObjCreate('Mr.lee','판교동');
console.log(obj02);
const obj03 = ObjCreate('Ms.lee','강남구');
console.log(obj03);
console.log("===클래스를 이용한 객체 생성===");
class ObjCreate01{
    constructor(name,addr){
        this.name = name;
        this.addr = addr;
    }
    dataPrint(){
        console.log(this.name, this.addr);
    }
}
const obj4 = new ObjCreate01('Mr.sim','분당구');
const obj5 = new ObjCreate01('Mr.kim','성남시');
obj4.dataPrint();
obj5.dataPrint();
