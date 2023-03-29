// Get all the links in the nav
const navLinks = document.querySelectorAll('.navbar .nav-item .nav-link');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Prevent the default behavior
    event.preventDefault();
    
    // Get the target section
    const targetSection = document.querySelector(this.getAttribute('href'));
    
    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add a scroll event listener to the window
window.addEventListener( function() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  
  // Get all the sections on the page
  const sections = document.querySelectorAll('section');
  
  // Loop through each section and check if it's in the viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Add the active class to the link that corresponds to the section
      const link = document.querySelector(`nav a[href="#${section.id}"]`);
      link.classList.add('active');
    } else {
      // Remove the active class from the link if it's not in the viewport
      const link = document.querySelector(`nav a[href="#${section.id}"]`);
      link.classList.remove('active');
    }
  });
});
