var currentHour = dayjs().hour() 
console.log(currentHour) 
// Wait for the document to be ready before executing any code
$(document).ready(function() {
    // Display the current day at the top of the calendar 
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

}
  
  