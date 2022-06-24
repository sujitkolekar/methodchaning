//functions type in javascript
//function expression
function st(){
    console.log("sujit");
}
//function statement
var a=function b(){
    console.log("b");
}
a()
//annonymous functions
var x=function (){
    console.log("annonymous");
}
// first class function and call back function
function p(callback) {
            callback()
}
function q(){
    console.log("is q");
}
p(q)
p(function(){
    console.log("this is q");
 })
 //method chaining function madhe function return karto
function demo(){
    return function demo2(){
        return("This is demo 2");
    }
}
var demo1=demo()
demo1()
var result=demo()()//demo madhil function call karnyasathi
console.log(result);


//ES6 variables
var name="sujit"
console.log(name);
var name="shreyash"
console.log(name);
let fullname="sujit Netaji Kolekar"//by using let we cant rediclaoir
console.log(fullname);
const myname="sujit Kolekar"//cannot redeclair and cannot change the value
console.log(myname);
 
const obj={name:""}
obj.name="shreyash"
console.log(obj);
