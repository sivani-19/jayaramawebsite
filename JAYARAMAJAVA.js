
AOS.init({
  duration:1000,
  
});
function sendemail() {
  const subject = "Email from Website";
  const body =
    "<table>" +
    "<thead><tr><th colspan='2'>" + subject + "</th></tr></thead>" +
    "<tbody>" +
    "<tr><td>Name:</td><td>" + document.getElementById("Name").value + "</td></tr>" +
    "<tr><td>Email:</td><td>" + document.getElementById("email").value + "</td></tr>" +
    "<tr><td>Number:</td><td>" + document.getElementById("number").value + "</td></tr>" +
    "<tr><td>Message:</td><td>" + document.getElementById("Message").value + "</td></tr>" +
    "</tbody></table>";

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jayaramaassociates@yahoo.com",
    Password: "D4A6D9937E621B8A9B194F5FF5B5849BE620",
    To: 'jayaramaassociates@yahoo.com',
    From: document.getElementById("email").value,
    Subject: subject,
    Body: body,
  }).then(
    message => alert("Submitted Successfully")
  );
}



/*  window.addEventListener('scroll', function() {
 let scrolled = window.pageYOffset;
        let parallaxImage = document.querySelector('.imageview');
        parallaxImage.style.transform = 'translate3d(0px, ' + (scrolled * 0.5) + 'px, 0px)';
     ; })*/
 
    
     document.addEventListener("DOMContentLoaded", function() {
      
     
        const menuBtn = document.getElementById("menu_bar");
        const closeBtn = document.getElementById("closed");
        const menuColumn = document.getElementById("menucolumn");
    
        menuBtn.addEventListener("click", function() {
            menuBtn.style.display = "none";
            closeBtn.style.display = "block";
            menuColumn.style.display = "block"; // Show the menu items
        });
    
        closeBtn.addEventListener("click", function() {
            closeBtn.style.display = "none";
            menuBtn.style.display = "block";
            menuColumn.style.display = "none"; // Hide the menu items
        });
    });
    
      let currentSlide = 0;
      const slides = document.querySelectorAll('.DESIGN');
      function goToSlide(index) {
      slides.forEach((slide,i) => {
     slide.style.transform = `translateX(-${(index) * 100}%)`;
      });}
      function prevSlide() {currentSlide = (currentSlide - 1 + slides.length) % slides.length;goToSlide(currentSlide);}
      function nextSlide() {currentSlide = (currentSlide +1) % slides.length;goToSlide(currentSlide);}

        const slider = document.querySelector('.service');
        let currentPosition = 0;
        const slideWidth = slider.firstElementChild.offsetWidth  // Adjusted for margins
        
        function moveSlider(offset) {
          console.log(offset);
          if (window.innerWidth < 1024) {
            // Mobile screen, move one card at a time
            if(offset<0)
            {
              currentPosition += offset * slideWidth-20;
            }
            else{
              currentPosition += offset * slideWidth+20;
            }
            
          } else {
            // Laptop screen, move three cards at a time
            const cardsPerPage = 3;
            currentPosition += offset * (slideWidth * cardsPerPage);
          }
        
          if (currentPosition < 0) {
            currentPosition = 0;
          } else if (currentPosition > slider.scrollWidth - slider.clientWidth) {
            currentPosition = slider.scrollWidth - slider.clientWidth;
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
const indicators1 = document.querySelectorAll('.indicator');
let currentIndex1 = 0;

function updateSliderPosition1() {
  Testmonials.style.transform = `translateX(-${currentIndex1 * 100}%)`;
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

indicators1.forEach((indicator, index) => {
  indicator1.addEventListener('click', () => {
    currentIndex1 = index;
    updateSliderPosition1();
  });
});

updateSliderPosition1();

