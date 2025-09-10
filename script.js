// Handle form submission

document.getElementById("userForm").addEventListener("submit", function(event) {

  event.preventDefault(); // Stop page refresh

  // Get user input

  const name = document.getElementById("username").value;

  const email = document.getElementById("useremail").value;

  const message = document.getElementById("message").value;

  // Show thank you message

  alert("Thank you " + name + "! Your information has been received.\nWe will contact you at: " + email);

  // Clear form

  this.reset();

});