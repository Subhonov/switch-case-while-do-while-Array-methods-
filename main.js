
// 1-topshiriq

// 1-misol
// let a=prompt("uch xonali son kriting")
// let birlar=a%10;
// let unlar=Math.floor((a%100)/10);
// let uchlar=Math.floor(a/100);
// let yigindi=(birlar+uchlar)-2;
// console.log(yigindi);

// 2-misol
// let a=prompt("son kriting")-0
// let sum=0
// for(let i=1; i<=a; i++){
//     if(a%i==0){
//         sum+=i
//     }
// }
// console.log(sum);

// 3-misol
// let arr=[true,"salom",53,undefined]
// for (let i=1; i<arr.length; i++){
//     if(typeof arr[i]==="string"){
//         arr[i]=null
//     }
// }
// console.log(arr);

// 4-misol
// let arr=[2,3,4,35,64,34,23,24,504]
// let maxArr=arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>=maxArr)
//         maxArr=arr[i]
// }
// console.log(maxArr);

// 5-misol
// let arr=[2,3,4,35,64,34,23,-24,54]
// let summRes=0
// for(let num of arr){
//     summRes+=num
// }
// console.log(summRes);

// 7-misol
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArray = [];
// for (let element of array) {
//   if (element % 2 === 0) {
//     newArray.push(0);
//   }
//     else {
//     newArray.push(element);
//   }
// }
// console.log(newArray);

// 8-misol
// let firstnum=prompt("brinchi son kriting!")-0
// let action=prompt("Action(+ - / * ")
// let secondNum=prompt("ikkinchi son kriting")-0
// switch (action){
//     case "+":
//         console.log(firstnum + secondNum);
//         break;
//     case "-":
//         console.log(firstnum - secondNum);
//         break;
//     case "/":
//         console.log(firstnum / secondNum);
//         break;
//     case "*":
//         console.log(firstnum * secondNum);
//         break;
// }

// 9-misol
// let arr=["Suhrob","Shahboz","Shamil","Ozod"];
// let userName=prompt("Enter your name");
// let isNotFoundName=0

// for(let name of arr){
//     switch(userName.toLowerCase){
//         case name.toLowerCase:
//             break;
//             console.log("siz kritilgan isim bor");
//         default:
//             console.log("siz xato isim kritiz");
//     }
// }

// 10-masala
// let userList=[
//     {
//         id:1,
//         age:20,
//         name:"Shamil",
//         gmail:"shamil@gmail.com"
//     },
//     {
//         id:2,
//         age:18,
//         name:"Komiljon",
//         gmail:"komiljonvor@gmail.com"
//     },
//     {
//         id:3,
//         age:25,
//         name:"Yusuf",
//         gmail:"yusuf@gmail.com"
//     },
// ]

// let userName=prompt("Enter your name");
// let isNotFoundName=0;

// for(let nic of userList){
//     switch(userName.toLowerCase()){
//         case nic.name.toLowerCase():
//             console.log(nic);
//             break;
//         default:
//             isNotFoundName++
//     }
// }
// console.log(isNotFoundName==userList ? "yuq" : "");

// 11-misol
// let userList=[
//     {
//         id:1,
//         age:30,
//         name:"Shamil",
//         gmail:"shamil@gmail.com"
//     },
//     {
//         id:2,
//         age:18,
//         name:"Komiljon",
//         gmail:"komiljonvor@gmail.com"
//     },
//     {
//         id:3,
//         age:25,
//         name:"Yusuf",
//         gmail:"yusuf@gmail.com"
//     },
// ]

// let maxAge=userList[0]

// for(let nic of userList){
//     if(nic.age >= maxAge){
//         maxAge=nic.age
//     }
// }
// console.log(maxAge);

// 12-misol
// let userList=[
//     {
//         id:1,
//         age:30,
//         name:"Shamil",
//         gmail:"shamil@gmail.com"
//     },
//     {
//         id:2,
//         age:18,
//         name:"Komiljon",
//         gmail:"komiljonvor@gmail.com"
//     },
//     {
//         id:3,
//         age:25,
//         name:"Yusuf",
//         gmail:"yusuf@gmail.com"
//     },
// ]

// let ageRes=0
// for(let nic of userList){
//     ageRes+=nic.age
// }
// console.log(ageRes/3);

// 13-misol
// let arr = [23, 54, 21, 76, 23, 87];

// let firstElement = arr[0];
// let lastElement = arr[arr.length - 1];
// let sum = firstElement + lastElement;

// if (sum % 2 === 0) {
//     arr.push(sum);
// }
//  else {
//     arr.unshift(sum);
// }

// console.log(arr);

// 14-misol
// let arr=[1,2,3,4,5,6,7,8,9]

// let oddArry=[]
// let evenArry=[]
// for(let num of arr){
//     if(num%2===0){
//         oddArry.push(num);
//     }
//     else{
//         evenArry.push(num);
//     }
// }
// console.log(oddArry + " juft arry");
// console.log(evenArry + " toq array");

// 15-misol
// let arr=[8,7,6,5,4]
// let res=[]
// for(let num of arr){
//     res.unshift(num)
// }
// console.log(res);