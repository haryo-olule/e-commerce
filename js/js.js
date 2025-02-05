const button = document.querySelector(".btn-menu");
const navbar = document.querySelector(".navbar");

button.addEventListener("click", () => {
  navbar.classList.toggle("show");
});
const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".headphone-col");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    button.classList.add("active");

    // Get the selected filter category
    const filterCategory = button.getAttribute("data-filter"); // Fixed this

    // Loop through items and filter them
    items.forEach((item) => {
      let categoryType = item.getAttribute("data-category");

      if (filterCategory === "all" || categoryType === filterCategory) {
        item.style.display = "block";  // Show matching items
      } else {
        item.style.display = "none";  // Hide non-matching items
      }
    });
  });
});

const images = document.querySelectorAll('.pol1 img'); 
const popImage = document.querySelector('.pop-col img'); // Selects the main pop-col image

// Loop through each image
images.forEach((img) => {
  img.addEventListener("click", () => {
    // Update the src of the pop-col image
    popImage.src = img.src;
  });
});



const info = document.getElementById('Info');
const pop = document.querySelector(".popout-section");

// Show pop-out on button click
info.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  pop.style.display = "block";  // Show the pop-out window
});




const closepopout = document.querySelectorAll(".close-popout");
const popout = document.querySelector(".popout-section");

// Loop through all close buttons and attach event listeners
closepopout.forEach(button => {
  button.addEventListener("click", () => {
    popout.style.display = "none";  // Hide the pop-out window
  });
});

// Select elements
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const counterDisplay = document.querySelector(".quantity span");

// Initialize counter
let counter = 0;

// Ensure the initial counter value is displayed
  counterDisplay.textContent = counter;

// Event listener for increment button
increment.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

// Event listener for decrement button
decrement.addEventListener("click", () => {
  if (counter > 0) {
    counter--; // Only decrement if counter is greater than 0
  }
  counterDisplay.textContent = counter;
});
