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

  // ナビゲーションリンククリック時に上部にバーを表示
  $(".nav__link").on("click", function (e) {
    e.preventDefault();
    $(".nav__link").removeClass("active");
    $(this).addClass("active");
  });

  // ドロワーの開閉
  $("#js-drawer-icon").on("click", function () {
    $(this).toggleClass("is-checked");
    $("#js-drawer-content").toggleClass("is-checked");
  });

  $('#js-drawer-content a[href^="#"]').on("click", function () {
    $("#js-drawer-icon").removeClass("is-checked");
    $("#js-drawer-content").removeClass("is-checked");
  });


  // companyタブ切り替え
  const tabs = $(".company__tab-item");
  const contents = $(".company__content");

  tabs.on("click", function () {
    // アクティブなタブをリセット
    tabs.removeClass("active");
    contents.removeClass("active");

    // クリックされたタブにアクティブクラスを追加
    $(this).addClass("active");

    // 対応するコンテンツを表示
    const target = $(this).data("tab");
    $("#" + target).addClass("active");
  });
});
