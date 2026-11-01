// Enquiry form validation
document.getElementById('enquiryForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const response = document.getElementById('response');

  if (!name || !email || !message) {
    response.textContent = 'Please fill in all fields.';
    response.style.color = 'red';
  } else {
    response.textContent = 'Thank you, ' + name + '! Your enquiry has been received.';
    response.style.color = 'green';
  }
});

// Contact form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  const response = document.getElementById('contactResponse');

  if (!name || !email || !message) {
    response.textContent = 'All fields are required.';
    response.style.color = 'red';
  } else {
    response.textContent = 'Message sent successfully!';
    response.style.color = 'green';
  }
});
