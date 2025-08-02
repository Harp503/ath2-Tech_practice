 document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("#toggle-dark");
    toggleButton.addEventListener("click" , () => {
      document.body.classList.toggle("dark-mode");
  });
});

// Hamburger Menu Toggle
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menuLinks = document.querySelector(".menu-links");

  hamburgerIcon.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
  });

  
    