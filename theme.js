

// Toggle between light and dark themes
// save the user's preference in local storage
// so that it persists across sessions

const toggleTheme = document.getElementById('toggle-themes');
const body = document.body;

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  toggleTheme.textContent = 'Light Mode'; // button shows what it will switch to
} else {
  toggleTheme.textContent = 'Dark Mode';
}

// Toggle theme on button click
toggleTheme.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme'); // switch to light
    toggleTheme.textContent = 'Dark Mode'; // update button
    localStorage.setItem('theme', 'light'); // save preference
  } else {
    body.classList.add('dark-theme'); // switch to dark
    toggleTheme.textContent = 'Light Mode'; // update button
    localStorage.setItem('theme', 'dark'); // save preference
  }
});


