//Task 1:
var studentNames = [];

//Task 2:
var studentNames1 = new Array();

//Task 3:
var cars = ["Saab", "Volvo", "BMW"];

//Task 4:
var num = [12, 34, 67, 98];

//Task 5:
var boolArray = new boolean[size];

//Task 6:
var cars = ["Saab", "Volvo", "BMW", 3, 45];

//Task 7:
var qual = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.Phil", "PhD"];
document.write("<b>Qualifications</b>");
document.write("<br>");
document.write("<br>");
for (var i = 0; i < qual.length; i++) {
    document.write(i + 1 + ")" + qual[i]);
    document.write("<br>");
}

//Task 8:
var stdNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];

for (var i = 0; i < scores.length; i++) {
    document.write("Score of " + stdNames[i] + " is " + scores[i] + ". Percentage: " + (scores[i] / 500) * 100 + "%");
    document.write("<br>");
}

//Task 9:
var color = ["red", "green", "blue", "yellow", "pink", "purple", "white"];
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//a:
var a = prompt("what color you want to add to the beginning?");
alert(a);
color[0] = a;
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//b:
var b = prompt("what color you want to add to the end?");
alert(b);
color[color.length - 1] = b;
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//c:
var c = prompt("enter two more colors to add to the beginning");
var c1 = prompt("second color: ");
color[1] = c;
color[2] = c1;
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//d:
color.shift();
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//e:
color.pop();
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//f:
var f = prompt("What is the color you want to add?");
var f1 = prompt("At which index you want to add?");
color[f1] = f;
document.write("<br>");
document.write("<b>Updated Array:</b>");
document.write("<br>");
for (var i = 0; i < color.length; i++) {
    document.write(color[i]);
    document.write("<br>");
}

//g:
Incomplete
var g = prompt("At which index you want the element to be deleted?");
var g1 = prompt("How many elements you want to delete?");

//Task 10:
var stdScores = [320, 230, 480, 120];
document.write("Scores of students: " + stdScores);
stdScores.sort();
document.write("<br>");
document.write("Ordered scores of students: " + stdScores);

//Task 11:
var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<b>Cities List:</b>")
document.write("<br>");
document.write(city);
var selectedCities = city.splice(2, 2);
document.write("<br>");
document.write("<br>");
document.write("<b>Selected Cities List:</b>");
document.write("<br>");
document.write(selectedCities);

//Task 12:
var arr = ["This", " is ", " my ", " cat"];
document.write("Array:");
document.write("<br>");
document.write(arr);
var arr1 = arr.join(" ");
document.write("<br>");
document.write("<br>");
document.write("String:");
document.write("<br>");
document.write(arr1);