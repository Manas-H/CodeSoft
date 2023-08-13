// Get references to the input elements and suggestion divs
// const fromInput = document.getElementById('from-search');
// const toInput = document.getElementById('to-search');
// const fromSuggestions = document.getElementById('from-suggestions');
// const toSuggestions = document.getElementById('to-suggestions');

// Function to filter and display station suggestions
// function showSuggestions(input, suggestionsDiv) {
//   const inputValue = input.value.trim().toLowerCase();
//   const filteredStations = station.filter(station => {
//     const stationName = station.Station.toLowerCase();
//     return stationName.startsWith(inputValue);
//   });

//   Clear previous suggestions
//   suggestionsDiv.innerHTML = '';

//   Display new suggestions
//   filteredStations.forEach(station => {
//     const suggestionDiv = document.createElement('div');
//     suggestionDiv.textContent = station.Station;
//     suggestionDiv.addEventListener('click', () => {
//       input.value = station.Station;
//       suggestionsDiv.innerHTML = ''; // Clear suggestions after selection
//     });
//     suggestionsDiv.appendChild(suggestionDiv);
//   });
// }

// Event listeners for user input
// fromInput.addEventListener('input', () => {
//   showSuggestions(fromInput, fromSuggestions);
// });

// toInput.addEventListener('input', () => {
//   showSuggestions(toInput, toSuggestions);
// });
