// THIS CODE HAS BEEN MODIFIED WITH THE AID OF GENERATIVE AI.
// INITIALLY INSPIRED BY https://medium.com/illumination/how-to-build-a-slideshow-using-html-css-and-javascript-977ecbdbf48c

let slideIndex = 0;

setInterval(() => {
  document.getElementsByClassName("slide")[0].style.display = "none";
  document.getElementsByClassName("slide")[1].style.display = "none";
  document.getElementsByClassName("slide")[2].style.display = "none";

  document.getElementsByClassName("slide")[slideIndex].style.display = "block";
  slideIndex = (slideIndex + 1) % 3;
}, 2000);
