// Select all category and type checkboxes
const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
const typeCheckboxes = document.querySelectorAll('input[name="type"]');
const itemsContainer = document.querySelector('.col-row'); // Parent container of items
const items = Array.from(document.querySelectorAll('.headphone-col')); // Convert NodeList to Array for sorting
const sortBySelect = document.getElementById('sort-by');

// Function to update items based on selected filters and sorting
function updateFilters() {
  const selectedCategories = Array.from(categoryCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  const selectedTypes = Array.from(typeCheckboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  let filteredItems = items.filter(item => {
    const itemCategory = item.getAttribute('data-category');
    const itemType = item.getAttribute('data-type');

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(itemCategory);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(itemType);

    return matchesCategory && matchesType;
  });

  // Sorting Logic
  const sortBy = sortBySelect.value;
  if (sortBy === 'low-to-high') {
    filteredItems.sort((a, b) => getPrice(a) - getPrice(b));
  } else if (sortBy === 'high-to-low') {
    filteredItems.sort((a, b) => getPrice(b) - getPrice(a));
  }

  // Clear and re-append items in sorted order
  itemsContainer.innerHTML = '';
  filteredItems.forEach(item => itemsContainer.appendChild(item));
}

// Helper function to extract the price from an item
function getPrice(item) {
  const priceText = item.querySelector('h2').innerText.replace(/[^0-9.]/g, '');
  return parseFloat(priceText);
}

// Event listeners for category, type, and sort filters
[...categoryCheckboxes, ...typeCheckboxes].forEach(checkbox => {
  checkbox.addEventListener('change', updateFilters);
});

sortBySelect.addEventListener('change', updateFilters);
