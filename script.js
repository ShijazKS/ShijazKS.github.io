const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');
const searchContainer = document.getElementById('search-container');

    // Show suggestions when the input is focused
    searchInput.addEventListener('focus', () => {
      suggestions.style.display = 'block';
      searchContainer.classList.add('active');
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (event) => {
      if (!suggestions.contains(event.target) && event.target !== searchInput) {
        suggestions.style.display = 'none';
        searchContainer.classList.remove('active');
      }
    });
  