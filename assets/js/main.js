//Date dynamic date using day.js
var today = dayjs()
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
]