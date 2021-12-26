//  Write a program to find nth number of fibonacci series 

var num=prompt("Enter the number to print fibonacci series");
var num1=0;
var num2=1;
var num3=num1+num2;



console.log("Fibonacci series below");
console.log(num1);
console.log(num2);
console.log(num3);



for(var i=4;i<=num;i++)
{
num1=num2;
num2=num3;
num3=num1+num2;
console.log(num3);
}