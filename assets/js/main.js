//Date dynamic date using day.js
var today = dayjs()
$("#currentDay").text(today.format("dddd, D of MMMM"));