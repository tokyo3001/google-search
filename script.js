const words =  ["apple", "banana", "cherry", "mango", "orange", "strawberry", "watermelon"];

const searchInput = document.getElementById('search-input');
const autocompleteResults = document.getElementById('autocomplete-results');
const searchResults = document.getElementById('search-results');
var image = document.querySelector('#logo');
var image2 = document.querySelector('#sun');

searchInput.addEventListener('input', function() {
  const userInput = searchInput.value.toLowerCase();
  let matchingWords = [];

  if (userInput.trim() !== '') {
    matchingWords = words.filter(word => word.toLowerCase().startsWith(userInput));
  }

  // Clear previous results
  autocompleteResults.innerHTML = '';

  if (matchingWords.length > 0) {
    const firstMatch = matchingWords[0];
    const suggestedCompletion = firstMatch.substring(userInput.length);

    // Set the value of the input field with the suggested completion
    searchInput.value = userInput + suggestedCompletion;

    // Highlight the suggested completion in the input field
    searchInput.setSelectionRange(userInput.length, searchInput.value.length);
  }
});

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
      // Allow backspace key to remove suggested completion
      searchInput.value = searchInput.value.slice(0, searchInput.selectionStart);
    }
  });

// function toggleMode() {
//   document.body.classList.toggle('dark-mode');
// }

function toggleMode() {
    document.body.classList.contains('dark-mode');
    if (document.body.classList.toggle('dark-mode')) {
        image.src = 'https://static1.anpoimages.com/wordpress/wp-content/uploads/2020/12/14/google-dark-background-hero.png';
        image2.src = 'bxs-moon.svg';
    } else {
        image.src = 'https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2021/04/Google-new-logo.png?fit=1500%2C1025&ssl=1';
        image2.src = 'bx-sun.svg';
    }
}

  

    