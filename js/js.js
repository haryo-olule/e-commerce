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



const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
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


