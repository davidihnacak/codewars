/*
CodeWars 1st week
Name: David Ihnacak
*/
/*1st task*/

function multiply(a, b){
    if (typeof a == 'number' && typeof b == 'number') {
        console.log(a * b);
    } else {
        console.log('a and b shoud be numbers')
    }
}
multiply(7, 3)

/*2nd task*/ 

const stringToNumber = function(str) {
    if (typeof str == 'string') {
        return Number(str);
    } else if (typeof str == 'number') {
        return str.toString();
    } else {
        console.log('enter number or string')
    }
}
