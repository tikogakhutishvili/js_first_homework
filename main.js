
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
let a = 5
let b = 23
let c = 13
if (a>b && a>c){
    console.log(`max number is a ${a} !`)
} else if(c>a && c>b){
    console.log(`max number is c ${c} !`)
} else {
    console.log(`max number is b ${b} !`)
}