// //day 1
// // alert('hello worlrd') ;
// console.log("hello world");
// var Name = "dua";
// var lastName = "dua"; // camelcase
// lastName = " amir";
// console.log(Name);
// console.log(lastName);
// var num = 12;
// var num2 = " 20";
// var Num = 3;
// console.log(num , Num , num);
// var LastName = "haseeb"; //pascal case
// var last_name = "ahmed"; //snake case
// console.log(num + num2);
// console.log(num + Num)
// console.log(Name + lastName);
// // document.write(num+Num)
// // day 2
// // pre increment

// // console.log(++pre); 
// // console.log(pre++ + 2); // 12 + 2 = 14
// // console.log(pre); // 13
// // console.log("this is post increment");
// // console.log(pre + 2);
// var a = 12;
// var b = 6;
// //          12  +  14  - 6  + 7  +  5  + 6 = 38
// var total = a++ + ++a - b++ + b-- + --b + ++b; 
// console.log(total); // 38 
// 12+13-6+5
//{} [] ()  / * + -
// var x = 2 + 3 + 1 //6
// var y = (2 + 4) * 5 //30
// var z = (((2*4) * 6 ) + (2+4*6)-9);//65 //75
// console.log(x, y, z);
// var greet = "i hope you are doing great";
// var naam = "afreen";
// console.log(greet + " " + naam + " hi");
// var q = "what is your age?"
// Answer = 20;
// var message = prompt(q , Answer);
// prompt(greet)
// console.log(message)
// var num1 = prompt("enter first value");
// var num2 = prompt("enter second value");
// var sum = num1 + num2
// alert(sum)
// var x = prompt("js stands for?")
// if((x == "Javascript") || (x == "javascript") || (x == "JAVASCRIPT")){
//     console.log("comparing more than one condition using or operator")
//     alert("well done your answer is correct")
// }else{
//     alert("sorry wrong answer")
// }
// == (value declare hogi or compare hogi)
// === (value declare hogi or compare hogi or data type check hogi)
// !== (value declare hogi or compare hogi or data type check hogi is may false condition true hogi)
// != (value declare hogi or compare hogi or jo condition hai woh false hogi toh ture hoga)
// var answer = prompt("js stands for?")
// if(answer == "javascript"){
//     alert("your answer is correct")
// }else{
//     alert("write in lowercase")
// }

// var add_to_cart = 5
// var total_amount = 1000
// if((add_to_cart == 5) && (total_amount == 1000)){
//     console.log("order placed")
// }else{
//     console.log("error occurred")
// }
// var age = prompt("enter your age?");
// if(age <= 5){
// console.log("your are child")
// }else if(age <= 15){
//     console.log("your are a teenager")
// }else{
//     console.log("you are adult")
// }

// var cities = ["karachi","lahore","islamabad","quetta","multan"]
// console.log(cities)
// alert("welcome to " + cities[0])
// cities.push("murree" , "sukkur")
// console.log(cities)
// cities.pop()
// console.log(cities)
// var student_1 = ["mateen" , "male" , "7 grade" , true]
// console.log(student_1)
// student_1[4] = 14
// console.log(student_1)
        //  0       1      2       3     4
// var pets = ["dog", "cat", "fly", "bug", "ox"]
//                          1      2      3
// console.log(pets)
// // replace three items at index two
// pets.splice(2, 3);
// console.log(pets)
// var nopets = pets.slice(0,2)
// console.log(nopets)


// for(initialization,condition,increment or decrement)
// for(var i=0;i<=100;i++){
//         console.log(i);
// }

for(var i = 5; i>=1 ; --i){
        console.log(i)
}