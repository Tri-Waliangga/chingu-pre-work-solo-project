// clock
(function clock() {
  let t = new Date();
  let jam = t.getHours();
  let menit = t.getMinutes();
  let c = "PM";

  if(jam < 12) {
    // jam = "0" + jam;
    c = "AM";
  }
  if(jam > 12) {
    jam = jam - 12;
  }
  
  if(menit < 10) {
    menit = "0" + menit;
  }

  document.getElementById("time").innerHTML = jam + ':' + menit;
  document.getElementById("change").innerHTML = c;
  document.getElementById("date").innerHTML = t.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});
  setTimeout(clock, 1000);
})();


// onClick close button in paragraph under clock
let close = document.getElementById("button-close");
close.addEventListener("click", function() {
  let none = document.getElementById("text-ask");
  none.style.display = "none";

  let ss = document.getElementById("ss");
  ss.style.transform = "translateY(440%)";

  let clock = document.getElementById("clock");
  clock.style.marginTop = "3.5em";
});

let ss = document.getElementById("screenshot");
ss.addEventListener("click", function() {
  alert('Sorry, this button is under maintenance');
});

// onClick menu-github (issues or pull requests)
let i = document.getElementById("issue");
let p = document.getElementById("pull");
let ai = document.getElementById("arrow-issue");
let ap = document.getElementById("arrow-pull");
let content = document.getElementsByClassName("content");
let contentB = document.getElementsByClassName("content-b");

i.addEventListener("click", function() {
  for(let c=0; c<contentB.length; c++) {
    contentB[c].style.display = "none";
  }
  console.log("cek-content onClick i");
  for(let c=0; c<content.length; c++) {
    content[c].style.display = "block";
  }
  ai.style.visibility = "visible";
  ap.style.visibility = "hidden";
  console.log(ai);
});

p.addEventListener("click", function() {
  for(let c=0; c<contentB.length; c++) {
    contentB[c].style.display = "block";
  }
  console.log("cek-content onClick p");
  for(let c=0; c<content.length; c++) {
    content[c].style.display = "none";
  }
  ap.style.visibility = "visible";
  ai.style.visibility = "hidden";
  console.log(ap);
})