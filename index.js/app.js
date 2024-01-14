const endDate = "24 Jan 2024 11:59 PM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000; /*it will convert in seconds /1000 */
  //conversion in days
  if (diff < 0) return; //it help to not count in negative day or min.
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //conversion in Hours
  inputs[1].value = Math.floor(diff / 3600) % 24;
  //conversion in miuutes
  inputs[2].value = Math.floor(diff / 60) % 60;
  //conversion in seconds
  inputs[3].value = Math.floor(diff) % 60;
}
//initial call
clock();

/**
 * 1 day=24hrs.
 * 1hr=60 minutes
 * 60 min=3600 sec.
 */
//func for calling on every second
setInterval(() => {
  clock();
}, 1000);
