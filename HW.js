let item_1 = 5;
console.log (item_1);
let item_2 = 3;
console.log (item_2);
let item_3;
item_3 = (item_1+item_2);
console.log (item_3);
let item_4;
item_4 = "Yolochka",
console.log (item_4);
let item_5;
item_5 = item_3;
let item_6;
let item_6_type;
item_6 = 15;

//
let age_1;
age_1= 0;
let age_2;
age_1= 70;
let age_3;
age_3= 55;

let age_1;
age_1 = 10;
let age_2;
age_2 = 18;
let age_3;
age_3 = 60;

if (age_1 < age_2)
{
  console.log ("You don’t have access cause your age is ”  + age_1 + “ It’s less then ");
}
else if (age_1 >= age_2 && age_1 < age_3) {
  console.log ("Welcome !");
}
  else if (age_1 > age_3) {
  console.log ("Keep calm and look Culture channel");
}
   else {
     console.log ("Technical work");
   }
  
//
let bmw = 10
let lada = 15
let toyota = 16
let cars = bmw == lada
console.log ('cars =', cars)

//
let count = 0
while (count <10){
console.log ("JavaScript!", count),
count++}

//
let count2 = 10
for (let i = 0; i <count2;i++) {
console.log ("count2 =", count2," I==",1)
}

//    
let status_codes = [100,200,300,400,500]
for (let i in status_codes) {
console.log ("status_codes =", status_codes [i])
if (status_codes[i] == 200) {
console.log ("Find 200 status code")
    }
}
