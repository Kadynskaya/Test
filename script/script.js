// modal
const link = document.getElementById('feedback-link');
const modal = document.getElementById('company__feedback-container');
const closeBtn = document.querySelector('.company__feedback-close');

link.addEventListener('click', function() {
    modal.style.display = 'flex'; 
})

closeBtn.addEventListener('click', function () {
	modal.style.display = "none";
})

window.addEventListener('click', function (e) {
	if(e.target == modal) {
   		modal.style.display = "none";
	}  	
})


// slides
const slides = document.getElementsByClassName("company__slider-img");

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

let myIndex = 0;
carousel();

function carousel() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > slides.length) {myIndex = 1}    
  slides[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}
