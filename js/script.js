$(function () {
  document.querySelectorAll(".nav__link").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelectorAll(".nav__link").forEach((link) => {
        link.classList.remove("active");
      });

      this.classList.add("active");
    });
  });

  $("#js-drawer-icon").on("click", function () {
    $(this).toggleClass("is-checked");
    $("#js-drawer-content").toggleClass("is-checked");
  });

  $('#js-drawer-content a[href^="#"]').on("click", function () {
    $("#js-drawer-icon").removeClass("is-checked");
    $("#js-drawer-content").removeClass("is-checked");
  });
});
