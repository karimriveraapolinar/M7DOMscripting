//declared the parent variable to reference the main div in the HTML file
const parentOne = document.getElementById("main");
const table = document.createElement("table");
const trOne = document.createElement("tr");
const trTwo = document.createElement("tr");
const trThree = document.createElement("tr");

const tdOne = document.createElement("td");
const tdTwo = document.createElement("td");
const tdThree = document.createElement("td");
const tdFour = document.createElement("td");
const tdFive = document.createElement("td");
const tdSix = document.createElement("td");
const tdSeven = document.createElement("td");
const tdEight = document.createElement("td");
const tdNine = document.createElement("td");

//All three rows are created and appended to the table
// and the varibales declared above are refrenced in order to this properly 
// Row1
parentOne.appendChild(table);
table.appendChild(trOne);
trOne.appendChild(tdOne);
trOne.appendChild(tdTwo);
trOne.appendChild(tdThree);
tdOne.innerHTML = "Car";
tdTwo.innerHTML = "Top";
tdThree.innerHTML = "Price";
 
//Row2
table.appendChild(trTwo);
trTwo.appendChild(tdFour);
trTwo.appendChild(tdFive);
trTwo.appendChild(tdSix);
tdFour.innerHTML = "Chevrolet";
tdFive.innerHTML = "120 MPH";
tdSix.innerHTML = "$10,000";

//Row3
table.appendChild(trThree);
trThree.appendChild(tdSeven);
trThree.appendChild(tdEight);
trThree.appendChild(tdNine);
tdSeven.innerHTML = "Pontiac";
tdEight.innerHTML = "140 MPH";
tdNine.innerHTML = "$20,000";

// Styling the table
table.style.border = "2px Navy solid"; //made the border a navy blue 
table.style.margin = "20px auto"; //messed with the margin to center the table

//Padding, two simple attributes but effective
table.setAttribute("cellpadding", "20"); //padding
table.setAttribute("cellspacing", "10"); // spacing