let maxPoints = 120;
let passingPoints = 70;
let samPoints = 84;
let alexPoints = 75;
let jessiePoints = 99;
let didAlexPass = false;
let samPointsDisplay = "Sam earned " + samPoints + " points out of " +
maxPoints;
let alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
  maxPoints;
let jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " +
  maxPoints;
let samPercentage = (samPoints / maxPoints) * 100;
let samPercentDisplay = "Sam scored 70%.";
let alexPercentage = (alexPoints / maxPoints) * 100;
let alexPercentDisplay = "Alex scored 37.5%.";
let jessiePercentage = (jessiePoints / maxPoints) * 100;
let jessiePercentDisplay = "Jessie scored 82.5%.";
let samMissedPoints = maxPoints - samPoints;
let alexMissedPoints = maxPoints - alexPoints;
let jessieMissedPoints = maxPoints - jessiePoints;
let samMissedPointsDisplay = "Sam missed 36 point(s).";
let alexMissedPointsDisplay = "Alex missed 75 point(s).";
let jessieMissedPointsDisplay = "Jessie missed 21 point(s).";
var classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
let classAveragePercent = (classAveragePoints / maxPoints) * 100;
let classAvgDisplay = "The class average was " + classAveragePoints +
  " points or " + classAveragePercent.toFixed(2);

let alexPointsUpdated = `Alex failed initially but did extra credit. Their new score is ${alexPoints} out of ${maxPoints}`;

console.log(samPointsDisplay);
console.log(alexPointsDisplay);
console.log(jessiePointsDisplay);
console.log(samPercentDisplay);
console.log(alexPercentDisplay);
console.log(jessiePercentDisplay);
console.log(samMissedPointsDisplay);
console.log(alexMissedPointsDisplay);
console.log(jessieMissedPointsDisplay);
console.log(classAvgDisplay);

console.log(alexPointsUpdated);

didAlexPass += !didAlexPass;

const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";

listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;

listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;

listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;

listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;