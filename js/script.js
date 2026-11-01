document.addEventListener('DOMContentLoaded', () => {
  const enquiryForm = document.getElementById('enquiryForm');
  const contactForm = document.getElementById('contactForm');

  function validateFields(fields) {
    return fields.every((field) => field.trim() !== '');
  }

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (event) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const response = document.getElementById('response');

      if (!validateFields([name, email, message])) {
        event.preventDefault();
        response.textContent = 'Please fill in all fields.';
        response.style.color = 'red';
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        event.preventDefault();
        response.textContent = 'Please enter a valid email address.';
        response.style.color = 'red';
        return;
      }

      // If using Formspree, replace the action URL with your real form ID.
      // The browser will submit normally when the action is changed.
      response.textContent = 'Thank you, ' + name + '! Your enquiry has been received.';
      response.style.color = 'green';
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      const response = document.getElementById('contactResponse');

      if (!validateFields([name, email, message])) {
        event.preventDefault();
        response.textContent = 'All fields are required.';
        response.style.color = 'red';
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        event.preventDefault();
        response.textContent = 'Please enter a valid email address.';
        response.style.color = 'red';
        return;
      }

      response.textContent = 'Message sent successfully!';
      response.style.color = 'green';
    });
  }
});
