 const slider = document.querySelector('.service');
  let currentPosition = 0;
  const slideWidth = slider.firstElementChild.offsetWidth+10; // Adjusted for margins
  
  function moveSlider(offset) {
    console.log(offset);
    if (window.innerWidth < 1024) {
      // Mobile screen, move one card at a time
      if(offset<0)
      {
        currentPosition += offset * slideWidth;
      }
      else{
        currentPosition += offset * slideWidth;
      }
      
    } else {
      // Laptop screen, move three cards at a time
      const cardsPerPage = 3;
      currentPosition += offset * (slideWidth * cardsPerPage);
    }
  
    if (currentPosition < 0) {
      currentPosition = 0;
    } else if (currentPosition > slider.scrollWidth - slider.clientWidth) {
      currentPosition = slider.scrollWidth - slider.clientWidth+5;
    }
  
    slider.style.transform = `translateX(-${currentPosition}px)`;
  }
  
  // Add event listener for window resize to handle responsive behavior
  window.addEventListener('resize', function() {
    // Call moveSlider with offset 0 to recalculate the position based on the new screen size
    moveSlider(0);
  });
  
  // Initial call to moveSlider to set the initial position
  moveSlider(0);
  


// Reset animation properties after adding the duplicate slide


// Add smooth scrolling to all links
const Testmonials = document.querySelector('.Testimonials');
const leftButton11 = document.querySelector('.left-arrow');
const rightButton11 = document.querySelector('.right-arrow');
const indicators1 = document.querySelectorAll('.dot');
let currentIndex1 = 0;

function updateSliderPosition1() {
Testmonials.style.transform = `translateX(-${currentIndex1 * 100}%)`;
Testmonials.style.transition="transform 0.9s ease-in-out";
indicators1.forEach((indicators1, index) => {
indicators1.classList.toggle('active', index === currentIndex1);
});
}

leftButton11.addEventListener('click', () => {
currentIndex1 = (currentIndex1 - 1 + Testmonials.children.length) % Testmonials.children.length;
updateSliderPosition1();
});


rightButton11.addEventListener('click', () => {
currentIndex1 = (currentIndex1 + 1) % Testmonials.children.length;
updateSliderPosition1();
});

indicators1.forEach((indicators1, index) => {
indicators1.addEventListener('click', () => {
currentIndex1 = index;
updateSliderPosition1();
});
});

updateSliderPosition1();

