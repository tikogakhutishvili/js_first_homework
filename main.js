
const month = "";
switch(month) {
    case "January": 
    case "December":
    case "February":
        console.log("Winter")
        break;
    case "March": 
    case "April":
    case "May":
        console.log("Spring")
        break;
    case "June": 
    case "July":
    case "August":
        console.log("Summer")
        break;
    case "September": 
    case "October":
    case "November":
        console.log("Autumn")
        break;
    default:
        console.log("Check your spelling :)")
    
}
let a = 20
let b = 20
let c = 20
if (a>b && a>c){
    console.log(`max number is a ${a} !`)
} else if(c>a && c>b){
    console.log(`max number is c ${c} !`)
} else if(b>a && b>c) {
    console.log(`max number is b ${b} !`)
} else if(a>b && a===c){
    console.log(`a and c both are max ${a},${c}`)
} else if(b>a && b === c) {
    console.log(`b and c both are max ${b},${c} `)
} else if (a===b && b > c) {
    console.log(`a and b both are max ${a},${b}`)
} else{
    console.log(`all are equal`)
}