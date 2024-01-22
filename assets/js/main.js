//Date dynamic date using day.js
var today = dayjs();
$("#currentDay").text(today.format("dddd, D of MMMM"));

//Day Entries (array of objects as Abdul suggested)
var workingDay = [
  { time: "09:00 am", event: "" },
  { time: "10:00 am", event: "" },
  { time: "11:00 am", event: "" },
  { time: "12:00 m", event: "" },
  { time: "01:00 pm", event: "" },
  { time: "02:00 pm", event: "" },
  { time: "03:00 pm", event: "" },
  { time: "04:00 pm", event: "" },
  { time: "05:00 pm", event: "" }
];

//Rows (using bootstrap)
workingDay.forEach(function (timeBlock, index) {
  var timeLabel = timeBlock.time;
  var blockColor = colorRow(timeLabel);
  var row =
    '<div class="time-block" id="' +
    index +
    '"><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
    timeLabel +
    '</div><textarea class="form-control ' +
    blockColor +
    '">' +
    timeBlock.event +
    '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button></div></div></div>';

  // Adding rows to container div 
  $(".container").append(row);
});

//Color Rows 
function colorRow(time) {
  var now = dayjs();
  var planEntry = dayjs(time, "H A");

  if (planEntry.isAfter(now)) {
    return "future";
  } else if (planEntry.isBefore(now)) {
    return "past";
  } else {
    return "present";
  }
};

//Local Storage
var workingEvents = JSON.parse(localStorage.getItem("workDay"));
if (workingEvents) {
  workingDay = workingEvents
}

//Save Events
$(".saveBtn").on("click", function () {
  // console.log("Save button clicked"); for testing that the button is working properly
  var blockID = parseInt(
    $(this)
      .closest(".time-block")
      .attr("id")
  );
  var userEntry = $.trim(
    $(this)
      .parent()
      .siblings("textarea")
      .val()
  );
  workingDay[blockID].event = userEntry;

  // Set local storage 
  localStorage.setItem("workDay", JSON.stringify(workingDay));
});