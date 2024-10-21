$(function () {
  const swiper = new Swiper("#js-casestudy-swiper", {
    // Optional parameters
    loop: true,
    // autoplay: {
    //   delay: 3000, //何秒ごとにスライドを動かすか
    //   stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    //   disableOnInteraction: true, //ユーザーの操作時に止める
    //   reverseDirection: false, //自動再生を逆向きにする
    // },
    // speed: 1000, //表示切り替えのスピード
    effect: "slide", //切り替えのmotion (※1)

    // If we need pagination
    pagination: {
      el: "#js-casestudy-pagination",
      clickable: true, //クリックでの切り替えを有効に
    },

    // Navigation arrows
    navigation: {
      nextEl: "#js-casestudy-next",
      prevEl: "#js-casestudy-prev",
    },
    allowTouchMove: false, // スワイプで表示の切り替えを無効に
    slidesPerView: 3, // 一度に表示する枚数
    breakpoints: {
      //画面幅による表示枚数と余白の指定
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      375: {
        slidesPerView: 1.3,
        spaceBetween: 18,
      },
      600: {
        slidesPerView: 1.2,
        spaceBetween: 18,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

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