document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button-group button");
    const cards = document.querySelectorAll(".project-area .card-container");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        const filter = button.getAttribute("data-filter");
  
        cards.forEach((card) => {
          if (filter === "*" || card.classList.contains(filter.substring(1))) {
            card.style.display = "block"; // Show matched cards
          } else {
            card.style.display = "none"; // Hide unmatched cards
          }
        });
      });
    });
  });
  