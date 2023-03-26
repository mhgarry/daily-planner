//added documenet to make sure it targets the whole document and it won't start unitl ready
$(document).ready(function() {

  // Get the current date and time using dayjs method
  var currentDate = dayjs();
  // Display the current date at the top of the calendar using dayjs method
  $("#currentDay").text(currentDate.format("dddd, MMMM D"));

  // Define the start and end hours of the work day
  var startHour = 9;
  var endHour = 17;
  //using example HTML make the HTML in JavaScript 
  // Loop through each hour 9 through 5 
  for (var i = startHour; i <= endHour; i++) {
    // Create a new time block element for the current hour
    var timeBlock = $("<div>").attr("id", "hour-" + i).addClass("row time-block");

    // Create a new hour element for the current hour
    var hour = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(dayjs({ hour: i }).format("ha"));

    // Create a new description element for the current hour
    var description = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", "3");

    // Load the saved data for the current hour, if it exists
    var savedData = JSON.parse(localStorage.getItem("hour-" + i));
    if (savedData !== null) {
      description.val(savedData);
    }

    // Create a save button element for the current hour
    var saveBtn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
    var saveIcon = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true");
    saveBtn.append(saveIcon);

    // show the hour, description, and save button to the time block 
    timeBlock.append(hour, description, saveBtn);

    // Determine whether the current hour is in the past, present, or future and apply the appropriate class
    if (i < currentDate.hour()) {
      timeBlock.addClass("past");
    } else if (i === currentDate.hour()) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }

    // add the time block element to the container element
    $(".container-fluid").append(timeBlock);
  }

  // When a save button is clicked, save the data for the  hour clicked to local storage
  //used event handler and variables to find where data is 
  $(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(hour, JSON.stringify(description));
  });

});