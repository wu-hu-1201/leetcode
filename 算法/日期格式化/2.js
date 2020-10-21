/*
题目

填充 inherit 完成输出。
*/
function inherit(PConstruction, prototypeObj) {
    // Object.create
    // Object.setPropTypeof
    // XX.call(this)
    function F(name) {
        PConstruction.call(this, name)
    }
    // prototypeObj
    // 给自身加了个 prototypeObj
    F.prototype = prototypeObj
    F.prototype.__proto__ = PConstruction.prototype
    return F
}

let animalNum = 0;
function Animal(name) {
  animalNum ++;
  this.name = name;
}
Animal.prototype.getName = function() {
  return this.name;
};
const Cat = inherit(Animal, {  
    say:function() {
        console.log(`NO${animalNum}:${this.getName()}`);
    }
});
// Cat.prototype.say = xxx
const cat1 = new Cat('小花');
cat1.say(); // NO1:小花

function Dog() {}
function Bar() {
    Dog.call(this)
} 
Object.setPrototypeOf(Bar.prototype, Dog.prototype)