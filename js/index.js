// 1st-2nd events: Nav Links - change text to eastern-blue on mouseover, back to default on mouseout.

const navLinks = document.querySelector(".nav");

navLinks.addEventListener("mouseover", (e) => {
  e.target.style.color = "#17A2B8"; /*can I use less variable??*/
});

navLinks.addEventListener("mouseout", (e) => {
  e.target.style.color = "#212529";
});

//3rd event: Remove header image on click

const funBus = document.querySelector("img");

funBus.addEventListener("click", (e) => {
  e.target.style.display = "none";
});

//4th event: dblclick to first h2 "Welcome to Fun Bus!"

const welcome = document.querySelector("h2");

welcome.addEventListener("dblclick", (e) => {
  e.target.style.fontSize = "4rem";
});

//5th event: wheel

//6th event: focus

//7th event: blur

//8th event: copy

//9th event: keydown

//10th event: keyup
