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
 
    
    
      const menuBtn = document.querySelector('.menu-btn');
      const menu = document.querySelector('.menucolumn');
      const closebtn=document.getElementById('closed');
      
      let isMenuOpen = false;
      let isclose=false;
      
      menuBtn.addEventListener('click', function() {
        if (isMenuOpen) {
          menu.style.display = 'none';
        } else {
          menu.style.display = 'block';
          closebtn.style.display='block';
          menuBtn.style.display='none';
        }
        isMenuOpen = !isMenuOpen;
        isclose=!isclose;
       
      });
      closebtn.addEventListener('click', function() {
        if (isclose) {
          closebtn.style.display='none';
          menu.style.display = 'none';
          menuBtn.style.display='block';
        } else {
          closebtn.style.display='none';
        }
        isMenuOpen = !isMenuOpen;
        isclose=!isclose;
      });
      let currentSlide = 0;
      const slides = document.querySelectorAll('.DESIGN');
      function goToSlide(index) {
      slides.forEach((slide,i) => {
     slide.style.transform = `translateX(-${(index) * 100}%)`;
      });}
      function prevSlide() {currentSlide = (currentSlide - 1 + slides.length) % slides.length;goToSlide(currentSlide);}
      function nextSlide() {currentSlide = (currentSlide +1) % slides.length;goToSlide(currentSlide);}


         function initMap() {
            var location = { lat: 17.4585, lng: 78.4524 }; // Replace with your desired latitude and longitude

            var map = new google.maps.Map(document.getElementById('map'), {
                center: location,
                zoom: 5 // Adjust the zoom level as needed
            });

            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }
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
testimonialsContainer.style.animationName = 'none';
setTimeout(() => {
  testimonialsContainer.style.animationName = 'scrolling';
}, 100);
function toggleReadMore() {
  var readMoreText = document.getElementById("readMoreText");
  var readMoreButton = document.getElementById("readMoreButton");

  if (readMoreText.style.display === "none") {
    readMoreText.style.display = "block";
    readMoreButton.innerHTML = "Read Less";
  } else {
    readMoreText.style.display = "none";
    readMoreButton.innerHTML = "Read More";
  }
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#parallax" ]','a[href^="#aboutus" ]','a[href^="#services"]','a[href^="#Getintouch"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
