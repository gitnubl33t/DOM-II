//Nav Links - change text to eastern-blue on mouseover, back to default on mouseout.

const navLinks = document.querySelector(".nav");

navLinks.addEventListener("mouseover", (e) => {
  e.target.style.color = "#17A2B8";
});

navLinks.addEventListener("mouseout", (e) => {
  e.target.style.color = "#212529";
});

//Remove header image on click

const funBus = document.querySelector("img");

funBus.addEventListener("click", (e) => {
  e.target.style.display = "none";
});
