// var userName =prompt("whats your name");
// var userAge =prompt("what is your age?");
// var userScore =prompt("what is your score");
// var currentTemperature =prompt("what is current temperature");
// var message = alert('Welcome'+ " " + userName);
// if (userAge <= 13){
//     alert("you are child");
// }
// else if(userAge >= 13 && userAge <=19){
//     alert("you are teenage");
// }
// else{
//     alert("you are adult");
// }
// var userScore = 70;
// if(userScore>=90){
//     alert("Exellent");
// }
// else if(userScore<=70 && userScore<=89){
//     alert("Good Job")
// }
// else{
//     alert("Neds improvement!")
// }
// if (currentTemperature <=0){
//    alert("cold")
// }
// else if(currentTemperature >=0 && currentTemperature<=30){
// alert("warm")
// }
// else if (currentTemperature >=15 ){
//         alert ("cool")
//     }
// else{
//     alert("hot")
// }


// var weatherCondition;
// if (currentTemperature < 0){
//     weatherCondition = "cold"
// } 
// else if ( currentTemperature >= 0 && currentTemperature < 15)
// {
//     weatherCondition = "cool"
// }
// else if (currentTemperature >= 15  && currentTemperature <30)
// {
//     weatherCondition = "warm"
// }
// else {
//     weatherCondition = " hot"
// }

// alert("Hello," + " " + userName+ " "  + "! The weather today is" + " "  + weatherCondition)

var eventType = prompt ("What type of event is it?")
var numberOfGuests = prompt("What is the number of guests?")
var budget = prompt ("What is your budget?")
var dayOfWeek = prompt ("Mention the days")

alert("You are planning a " + eventType + " for " + numberOfGuests + " guests with a budget of " + "$" + budget)

if(eventType === "birthday"){
    alert("Great choice for a celebration!");
}
 else if(eventType === "wedding"){
    alert("Congratulations on your upcoming wedding!");
}
else if(eventType === "conference"){ 
    alert("Good luck with your conference!");
}
else{
    alert( "Sounds like a fun event!");
}


var numberOfGuests;
var budget;
numberOfGuests = 150;
budget = 4000;
if (numberOfGuests > 100 && budget<= 5000){
    console.log("Consider a larger venue or a bigger budget.");
}
else if(budget > 5000 && budget <= 10000){
    console.log( "You have a good budget for this size of event.");
}
else if((numberOfGuests  >= 50 && numberOfGuests <=100)&& (budget>= 5000 && budget <= 10000)){
    console.log("Your budget might be tight for this number of guests.");
}
else if(numberOfGuests>= 50 && budget >10000){
    console.log("You have a luxurious event.");
}