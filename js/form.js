document.addEventListener("DOMContentLoaded", function() {
  var globalSearchInput = document.getElementById("searchInput");

  if (globalSearchInput) {
    var debounceTimer;
    globalSearchInput.addEventListener("input", function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function() {
        var searchTerm = globalSearchInput.value.trim().toLowerCase();

        var containers = document.querySelectorAll(".container");
        containers.forEach(function(container) {
          var hasVisibleBox = false; // Flag to track if any box is visible
          var boxes = container.querySelectorAll(".box");
          boxes.forEach(function(box) {
            var text = box.textContent.toLowerCase();
            if (searchTerm === '' || text.includes(searchTerm)) {
              box.classList.remove("hidden");
              hasVisibleBox = true; // Set flag to true if any box matches
            } else {
              box.classList.add("hidden");
            }
          });
          // Show or hide the container based on the visibility of its boxes
          if (hasVisibleBox) {
            container.style.display = "block";
          } else {
            container.style.display = "none";
          }
        });
      }, 300);
    });
  } else {
    console.log("Search input element with ID 'searchInput' not found.");
  }
});