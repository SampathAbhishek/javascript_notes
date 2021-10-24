function addTwoNumbers(a,b){
    var c;
    c = a + b;
    return(c);
}

var first = parseInt(prompt("Hey!..Enter first number"));
var second = parseInt(prompt("Hey!..Enter Second number"));
var result = addTwoNumbers(first,second);
console.log("The total of "+first+" and "+second+" is "+result);
