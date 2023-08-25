$(function () {
  // 1. Save button listener
  $(".saveBtn").click(function () {
    let hour = $(this).parent().attr("id");
    let userInput = $(this).siblings("textarea").val();
    localStorage.setItem(hour, userInput);
  });

  // 2. Apply past, present, future class
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id").split("-")[1]);
    let currentHour = dayjs().hour();

    if (blockHour < currentHour) {
        $(this).addClass("past");
    } else if (blockHour === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
  });

  
  // 3. Get saved data from localStorage
  $(".time-block").each(function () {
    let blockId = $(this).attr("id");
    let savedData = localStorage.getItem(blockId);

    if (savedData) {
      $(this).children("textarea").val(savedData);
    }
  });

  // 4. Display the current date in the header
  $("#currentDay").text(dayjs().format('MMMM D, YYYY'));
});