document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "Thank you! We’ll be in touch soon.";
  this.reset();
});
