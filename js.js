/*
/!**
 * Created by mikolajszkurlat on 04.02.2018.
 *!/

/!*
var a = 7,
    b = 9;

if (a > b) {
    alert('a wieksze');
} else if (a < b) {
    alert('a mniejsze');
}
else {
    alert('takie same');
}
*!/


/!*
var x = 4,
    isEven;
if (x % 2 === 0) {
    isEven = true;
} else {
    isEven = false;
}
alert(isEven);

var isEven2 = (x%2 === 0) ? true : false;
alert(isEven2);*!/



/!*
var theDay = 1;

switch (theDay) {
    case 1 :
        alert('pon');
        break;
    case 2 :
        alert('wt');
        break;
    default :
        alert('nie ma takeigo dnia');
        break;
}*!/



// functions
function addition(x, y) {
    return x + y;
}
var returnAddititon = addition(1, 7);
alert(returnAddititon);

function division(x, y) {
    if (y === 0) {
        alert('wroc do przedszkola');
        return;
    }
    return x / y;
}
var returnDivision = division(1, 0);
alert(returnDivision);*/

/*
window.onload = function onLoad() {
    var newName = document.getElementById("name");
    var newSurname = document.getElementById("surname");
    var getAllInfo = document.getElementById("allObjectInfo");
    newName.innerHTML = "test";
    var person = {
        yName : "Stachu",
        ySurname : "Jeżozwierz",
        yDate : "25.11",
        getInfo : function () {
                return this.yName + " " + this.ySurname + " " + this.yDate
        }
    };
   /!* newName.innerHTML = person;
    newSurname.innerHTML = person.ySurname;*!/
    getAllInfo.innerHTML = person;
/!*
    getAllInfo.innerHTML = person.yLike();
*!/

*/

/*
}
*/
/*
window.onload = function onLoad() {
    var newName = document.getElementById("name");
    /!* Funkcje konstrukcyjne *!/
    function personClass(objName, objSurname, objAge) {
        this.name = objName;
        this.surname = objSurname;
        this.age = objAge;
        this.toString = function () {
            if (objAge < 18) {
                alert('maly smiec');
            }
            return this.name + " " + this.surname + " " + this.age  ;
        };
    }

    var person1 = new personClass("Arek", "szparek", 15);
    person1.specifiedValue = 12;
    person1.length = 10;
    newName.innerHTML = person1 + " " + person1.specifiedValue + " " + person1.length;



}
*/

/*
var products = [
    "prod1",
    "prod2",
    "prod3"
];
products[3] =  "prodTest";
products[products.length] = "prod4";
products.push("prod5");
console.log(products);*/
window.onload = function onLoad() {
    /*var ul = document.getElementById("ul-id ");
    var liArray = ul.getElementsByTagName("li");
    alert(liArray[3].innerHTML);*/

    /*var products = [
        "prod1",
        "prod2",
        "prod3"
    ];
    var tempTable = [
        "tempProd1",
        "tempProd2",
        "tempProd3"
    ];
    products[products.length] = "prod3";

    document.getElementById('tableResult').innerHTML = products.length;

    document.getElementById('tableResult').innerHTML += "<br> -----------<br>";
    document.getElementById('tableResult').innerHTML = products.concat(tempTable);
    document.getElementById('tableResult').innerHTML = products.join("<br>");
    var temp = document.getElementById('tableResult').innerHTML = products.pop();

    document.getElementById('ul-id').sort();
*/

}


// ******************** //
// ******************** //
// ******************** //

window.onload = function onLoad() {
    var ul = document.getElementById('ul');
    var test = document.querySelectorAll('li')
    alert(test[1].innerHTML)


    // Create table
    var multiplicationTable = "<table>";
    for(var i = 1; i <= 10; i++) {
        multiplicationTable += "<tr>";
        for (var j = 1; j <= 10; j++) {
            multiplicationTable += "<td>" + i * j + "</td>";
        }
        multiplicationTable += "</tr>";
    }
    multiplicationTable += "</table>";


    var resultMultiplicationTable = document.getElementById('resultMultiplication');
    resultMultiplicationTable.innerHTML = multiplicationTable;
}


