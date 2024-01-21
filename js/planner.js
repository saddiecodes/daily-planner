var currentHour = dayjs().hour();
console.log(currentHour);

// Wait for the document to be ready before executing any code
$(document).ready(function () {
    // Display the current day at the top of the calendar
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

    // Function to colour-code timeblocks based on past, present, or future
    function updateColors() {
        $(".time-block").each(function () {
            var hour = parseInt($(this).attr("data-hour"));
            if (hour < currentHour) {
                $(this).addClass("past");
            } 
        });
    }
});
// Function to save entries to local storage
function loadEvents() {
    $(".time-block").each(function() {
      var hour = $(this).attr("data-hour");
      var event = localStorage.getItem(hour);
      if (event) {
        $(this).children(".description").val(event);
      }
    });
  }

  // Event list for the save button
  $(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("data-hour");
    var event = $(this).siblings(".description").val();
    localStorage.setItem(hour, event);
  });

  // Call functions to initialize the app
  updateColors();
  loadEvents();


