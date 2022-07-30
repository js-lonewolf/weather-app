// Display Date

let now = new Date();
let options = { weekday: "long" };
let currentDay = new Intl.DateTimeFormat("en-US", options).format(now);

// Display Time
let hours = now.getHours();
let minutes = now.getMinutes();

let showDate = document.querySelector("#thisDate");
showDate.innerHTML = `${currentDay} ${hours}:${minutes}`;
