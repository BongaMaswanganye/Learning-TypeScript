"use strict";
//let BeginnerMessage = "Hello world";
//let AlternativeMessage = "bro moment";
//console.log(BeginnerMessage);
//console.log(AlternativeMessage);
exports.__esModule = true;
//all right this prints to the console, gonna play around with creating types
//let is good for vars i need to reassign and const is for ones i don't want to change
var Title = "Bonga Maswanganye's learning fun time :)";
var CurrentDate = new Date();
console.log(Title + "\n" + CurrentDate);
//boolean assignment
//let PracticeBool:boolean = true;
//number
//let PracticeNum : number = 0;
//strings
//let PracticeString:string = "THIS IS A PRACTICE STRING";
//use ` (backtick) if you're gonna use ${}
//let PracticeSentence:string =  `hey everyone, ${PracticeString}
//Today is ${CurrentDate} and this is my first sentence setup`
//console.log(PracticeBool+ "\n"+
//            PracticeNum+"\n"+
//            PracticeSentence);
//assignments of null or undefined exist under all types as subtypes
//so you can assign types as null for later
// lists/arrays have 2 types of assignments
//let list1 : number[] = [1,2,3]
//or
//let list2 :Array<number> = [3,2,1]
//array uses <T> assignment so ill probably use that one
//console.log(list2);
//creating tuples, using key value pair
//let TuplePerson: [string,number] = ["Buddy",27]
//console.log(TuplePerson[0]);
//console.log(TuplePerson[1]);
//when referencing, 0 is the key and 1 is the value
//typescripts have ENUMS LETS GO
//enum ProgramStates {
//    Running,
//    Stopped,
//}
//let ENUM_test : ProgramStates = ProgramStates.Stopped;
//console.log(ENUM_test);
//prints numbers which is interesting 
//Typescript has a type called any which seems a little funny
//let SexyVariable : any = 0;
//console.log(SexyVariable);
//SexyVariable = true;
//console.log(SexyVariable);
//SexyVariable = "ON GOD?";
//console.log(SexyVariable);
//SHEEEEEEEEEESH
