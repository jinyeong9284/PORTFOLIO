$(".menu-wrapper").on("click", (e) => {
  $(".transit").toggleClass("toggle-btn");
  $(".menu").toggleClass("toggle-menu");

  $(".global-menu li").each((index, li) => {
    $(li).on("click", () => {
      $(".menu-wrapper").removeClass("toggle-btn");
      $(".menu").removeClass("toggle-menu");
    });
  });
});
