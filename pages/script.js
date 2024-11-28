const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
  });
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Form submission handler
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // Here you would typically send the form data to a server
      alert('Message sent! We will get back to you soon.');
      form.reset();
  });

  // Optional: Simple animation for hero section
  gsap.from('.hero-bg h1', {
      duration: 1, 
      opacity: 0, 
      y: 50, 
      ease: 'power3.out'
  });

  gsap.from('.hero-bg p', {
      duration: 1, 
      opacity: 0, 
      y: 50, 
      delay: 0.5, 
      ease: 'power3.out'
  });