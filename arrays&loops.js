//Task 1:
var myArray = [, , , ];

//Task 2:
myArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];

document.write(myArray);

//Task 3:
for (var i = 1; i <= 10; i++) {
    document.write(i);
    document.write("<br>");
}

//Task 4:
var number = window.prompt("Enter a number to show its multiplication table: ");
var length = window.prompt("Enter length multiplication table: ");
document.write("Multiplication table of " + number);
document.write("<br>");
document.write("Length " + length);
document.write("<br>");
document.write("<br>");
for (var i = 1; i <= length; i++) {
    document.write(number + " x " + i + " = ", number * i);
    document.write("<br>");
}

//Task 5:
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i]);
    document.write("<br>");
}

//Task 6:
document.write("<b>Counting:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");

}


document.write("<b>Reverse Counting:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");

}

document.write("<b>Even:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 0; i <= 20;) {
    document.write(i + ", ");
    i = i + 2;

}

document.write("<b>Odd:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 1; i <= 20;) {
    document.write(i + ", ");
    i = i + 2;

}

document.write("<b>Series:</b>");
document.write("<br>");
document.write("<br>");
for (var i = 2; i <= 20;) {
    document.write(i + "k, ");
    i = i + 2;

}

//Task 7:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to Ramzan Bakery. What do you want to order sir/ma'am?");
var index = A.indexOf(item);
var z = 0;
for (var i = 0; i < A.length; i++) {
    if (item == A[i]) {
        alert(item + " is available at index " + index + " in our bakery");
        z = 1;
    }
}
if (z == 0) {
    alert("We are sorry. " + item + " is not available in our bakery");
}

//Task 8:
var A = [24, 53, 78, 91, 12];
var largest = 0;

for (i = 0; i <= largest; i++) {
    if (A[i] > largest) {
        var largest = A[i];
    }
}
document.write("Array items: " + A);
document.write("<br>");
document.write("The largest number is " + largest);

//Task 9:
const A = [24, 53, 78, 91, 12];
const min = Math.min(...A);
document.write("Array items: " + A);
document.write("<br>");
document.write("The smallest number is " + min);

//Task 10:
var num = 5;
for (var i = 1; i <= 20; i++) {
    document.write(num * i + ", ");
}