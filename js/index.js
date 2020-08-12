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

welcome.addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "3.2rem";
});

//5th event: wheel, increase size of photo next to Adventure Awaits

const scrollImg = document.querySelectorAll(".img-content");

scrollImg[1].addEventListener("wheel", (e) => {
  e.target.style.maxWidth = "200%";
  event.stopPropagation();
});

scrollImg[1].addEventListener("mouseout", (e) => {
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

//8th event: contextmenu turns photo w/ map gray

scrollImg[0].addEventListener("contextmenu", (e) => {
  e.target.style.filter = "grayscale(100%)";
});

scrollImg[0].addEventListener("click", (e) => {
  e.target.style.filter = "none";
});

//9th event: keydown

const doc = document.querySelector("html");

doc.addEventListener("keydown", (e) => {
  e.target.style.visibility = "hidden";
});

//10th event: keyup

doc.addEventListener("keyup", (e) => {
  e.target.style.visibility = "visible";
});

//Stop the navigation items from refreshing the page by using `preventDefault()

// ?? this makes no sense as the nav items don't cause my page to refresh...
