// Wikipedia-Style JavaScript for Rizal Article

// 1. Mobile Sidebar Toggle
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// 2. Search Functionality
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

if (searchButton && searchInput) {
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    // Get all sections
    const sections = document.querySelectorAll('section h2, section h3');
    let found = false;
    
    sections.forEach(section => {
      const text = section.textContent.toLowerCase();
      if (text.includes(query)) {
        section.scrollIntoView({ behavior: 'smooth' });
        found = true;
      }
    });
    
    if (!found) {
      alert('No results found for: ' + query);
    }
  }
}

// 3. Smooth Scroll for Sidebar Links
const sidebarLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');

sidebarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
      }
      
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 4. Table of Contents Highlighting
const tocLinks = document.querySelectorAll('.toc a');
const sections = document.querySelectorAll('section[id]');

function highlightCurrentSection() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  tocLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', highlightCurrentSection);

// Initialize
highlightCurrentSection();

// 5. Header Link Functionality
const headerLinks = document.querySelectorAll('.header-namespaces a, .header-actions a');

headerLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Remove active class from all
    headerLinks.forEach(l => l.classList.remove('active'));
    // Add active class to clicked
    this.classList.add('active');
  });
});