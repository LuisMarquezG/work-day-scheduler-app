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
    '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"></button></div></div></div>';

  // Adding rows to container div 
  $(".container").append(row);
});


