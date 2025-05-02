// assignment 1
let day = "   friday  ";
day = day.trim();
day = day[0].toUpperCase() + day.slice(1).toLowerCase();
  
switch(day) {
    case "Monday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    default:
        console.log("Invalid Day");
        break;
}