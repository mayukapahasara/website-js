const filterBtns = document.querySelectorAll(".filter-btn");
const tabItems = document.querySelectorAll(".tab-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("filter-btn-active"));

    // Add active class to the clicked button
    btn.classList.add("filter-btn-active");

    // Get the tab data attribute
    const selectedTab = btn.getAttribute("data-tab");

    // Hide all tab items
    tabItems.forEach((item) => {
      if (item.classList.contains(selectedTab)) {
        item.classList.add("select_tab");
      } else {
        item.classList.remove("select_tab");
      }
    });
  });
});


