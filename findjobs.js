document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search input");
  const searchButton = document.querySelector(".btn-search");
  const cards = document.querySelectorAll(".card");

  searchButton.addEventListener("click", function () 
  {
    const searchTerm = searchInput.value.trim().toLowerCase();

    cards.forEach((card) => {
      const cardTitle = card.querySelector("h3").textContent.toLowerCase();

      if (cardTitle.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    cards.forEach((card) => {
      const cardTitle = card.querySelector("h3").textContent.toLowerCase();

      if (cardTitle.includes(searchTerm)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const sortSelect = document.querySelector(".sort-list select");
  const cardsWrapper = document.querySelector(".wrapper");
  const cards = document.querySelectorAll(".card");

  sortSelect.addEventListener("change", function () {
    const sortBy = parseInt(sortSelect.value);

    // Sort cards based on salary
    switch (sortBy) {
      case 0: // All
        cardsWrapper.innerHTML = ""; // Clear previous cards
        cards.forEach((card) => cardsWrapper.appendChild(card));
        break;
      case 1: // Sort
        sortBySalaryAsc();
        break;
      case 2: // Sort
        sortBySalaryDesc();
        break;
    }
  });

  function sortBySalaryAsc() {
    const sortedCards = Array.from(cards).sort((a, b) => {
      const salaryA = parseFloat(a.querySelector(".card-salary b").textContent.slice(1));
      const salaryB = parseFloat(b.querySelector(".card-salary b").textContent.slice(1));
      return salaryA - salaryB;
    });

    cardsWrapper.innerHTML = ""; // Clear previous cards
    sortedCards.forEach((card) => cardsWrapper.appendChild(card));
  }

  function sortBySalaryDesc() {
    const sortedCards = Array.from(cards).sort((a, b) => {
      const salaryA = parseFloat(a.querySelector(".card-salary b").textContent.slice(1));
      const salaryB = parseFloat(b.querySelector(".card-salary b").textContent.slice(1));
      return salaryB - salaryA;
    });

    cardsWrapper.innerHTML = ""; // Clear previous cards
    sortedCards.forEach((card) => cardsWrapper.appendChild(card));
  }
});


// $(".card").on("click",function(){
//   $(".detail").addClass("active");
// });

// $(".close-detail").on("click",function(){
//   $(".detail").removeClass("active")
// });

// $(".menu-bar").on("click",function(){
//   $(".sidebar").addClass("active")
// });

// $(".logo").on("click",function(){
//   $(".sidebar").removeClass("active")
// });
// $('.hamburger').on("click",function(){
// $(".tempbtn").addClass("active")
// });

// $(".tempbtn").on("click",function(){
//   $(".sidebar").removeClass("active")
//   $(".tempbtn").removeClass("active")
// });

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".btn-filter");
  const cards = document.querySelectorAll(".card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedCategory = button.textContent.trim();

      // Check if the "Show All" button is clicked
      if (selectedCategory === "Show All") {
        // Display all cards
        cards.forEach((card) => {
          card.style.display = "flex";
        });
      } else {
        // Filter cards based on the selected category
        cards.forEach((card) => {
          const cardCategories = card.querySelector(".card-detail").textContent;
          const categoryArray = cardCategories.split(',');

          if (categoryArray.includes(selectedCategory)) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });
});

// JavaScript code to toggle bookmark color
document.querySelectorAll('.bookmark-icon').forEach(item => {
  item.addEventListener('click', event => {
    if (item.style.color === 'gray') {
      item.style.color = 'red'; // Fill with red color when clicked
    } else {
      item.style.color = 'gray'; // Change color back to gray when clicked again
    }
    event.stopPropagation(); // Prevent the click event from bubbling up to parent elements
  });
});


