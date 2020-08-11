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

//4th event: dblclick first h2 "Welcome to Fun Bus!", increase fontsize

const welcome = document.querySelector("h2");

welcome.addEventListener("dblclick", (e) => {
  e.target.style.fontSize = "4rem";
});

//5th event: wheel first body img, increase size

const scrollImg = document.querySelector(".img-content");

scrollImg.addEventListener("wheel", (e) => {
  e.target.style.maxWidth = "200%";
});

scrollImg.addEventListener("mouseout", (e) => {
  e.target.style.maxWidth = "100%";
});

//6th and 7th event: mousedown puts an underline on Adventure Awaits h2, mouse up removes it

const h2E = document.querySelectorAll("h2");

h2E[2].addEventListener("mousedown", (e) => {
  e.target.style.textDecoration = "underline";
});

h2E[2].addEventListener("mouseup", (e) => {
  e.target.style.textDecoration = "none";
});

//8th event: copy

//9th event: keydown

//10th event: keyup
