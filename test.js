

var johnTeamScore1 = 89;
var johnTeamScore2 = 120;
var johnTeamScore3 = 103;

var mikeTeamScore1 = 116;
var mikeTeamScore2 = 94;
var mikeTeamScore3 = 123;

var maryTeamScore1 = 97;
var maryTeamScore2 = 134;
var maryTeamScore3 = 105;

var averagJohnTeamScore = johnTeamScore1 + johnTeamScore2 + johnTeamScore3 / 3;

var averagMikeTeamScore = mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3 / 3;

var averagMaryTeamScore = maryTeamScore1 + maryTeamScore2 + maryTeamScore3 / 3;
if (averagJohnTeamScore > averagMikeTeamScore && averagJohnTeamScore > averagMaryTeamScore) {
    console.log("john team winner ");
}
else if (averagMikeTeamScore > averagJohnTeamScore && averagMikeTeamScore > averagMaryTeamScore) {
    console.log("mike team winner");
}
else if (averagMaryTeamScore > averagJohnTeamScore && averagMaryTeamScore > averagMikeTeamScore) {
    console.log("mary team  is winner");
}
else {
    console.log("match is draw");
}