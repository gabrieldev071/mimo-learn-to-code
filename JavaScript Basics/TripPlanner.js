/* What is? 

In this project, you'll build a simple "trip planner" using basic JavaScript.

This planner will come in handy when calculating how many fuel stops you'll need to make, how long it will take, and other important logistics necessary for your trip.

You'll use your knowledge of variables, strings, and numbers to estimate your trip mileage and arrival time. Let's get started.

*/

var averageSpeed = 57;
var mpg = 27;
var gallons = 13;
var destination = "Ithaca, NY";
var tripMiles = 74 + 63 + 167;
var time = tripMiles / averageSpeed;
var tankRange = mpg * gallons;

var leftoverGasRange = tankRange - tripMiles ; 

console.log("Trip to " + destination);
console.log("Estimated Time: " + time); 
console.log("Range Remaining: " + leftoverGasRange); 