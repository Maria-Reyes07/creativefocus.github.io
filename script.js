  
// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

//Nav styles on scroll
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

// Open the full screen search box
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  // Close the full screen search box
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }


// Swiper
const swiper = new Swiper(".swiper", {
    // How many slides to show
    slidesPerView: 1,
    // How much space between slides
    spaceBetween: 20,
    // Make the next and previous buttons work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },
    //Responsive breakpoints for how many slides to show at that view
    breakpoints: {
        // 700px and up shoes 2 slides
        700: {
          slidesPerView: 2
        },
        // 1200px and up shoes 3 slides
        1200: {
            slidesPerView: 3
        }
    }   
});


document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("booking-container");
    var form = document.getElementById("appointment-form");
    var formInputs = document.querySelectorAll("#appointment-form input");
  
    // Submit form event listener
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      // Pause animation while form is being submitted
      pauseAnimation();
      // Simulate form submission (replace with actual implementation)
      setTimeout(function () {
        // Show success message
        var messageDiv = document.getElementById("message");
        messageDiv.innerHTML = "Appointment booked successfully!";
        messageDiv.style.color = "green";
        // Clear form fields
        form.reset();
      }, 1000); // Simulate server response time
    });
    // Pause animation when any form input is focused
    formInputs.forEach(function (input) {
      input.addEventListener("focus", pauseAnimation);
      input.addEventListener("blur", resumeAnimation);
    });
  });







