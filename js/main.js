// 穴埋め形式です。空いている箇所を埋めて実装してください

$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".toggle-btn ").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("nav a").on("click", function () {
    $("header").removeClass("open")
  });



  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    $(".section-title").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).css({
          "color": "rgba(141, 156, 184, 1)", // 文字だけ不透明に
          "transform": "translateY(0)"
        });
      }
    });
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内リンクのイベント
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });


  /*=================================================
  スリック
  ===================================================*/
  $('.slider-text').slick({
    dots: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    asNavFor: '.slider-img'
  });

  $('.slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-text'
  });

  /*=================================================
  ヘッダーの色をセクションによって変える
  ===================================================*/
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();

    $("section").each(function () {
      let top = $(this).offset().top - 100; // 少し余裕を持たせる
      let bottom = top + $(this).outerHeight();

      if (scroll >= top && scroll < bottom) {
        // sectionのidを取得
        let id = $(this).attr("id");

        // headerにクラスを付け替える
        $("header").attr("class", id + "-color");
      }
    });
  });

  /*=================================================
   ページ読み込み完了でローディング非表示
  ===================================================*/

  // 内部リンククリック時は「2回目扱い」にしてから遷移
$('a[href^="index.html#"]').on('click', function () {
  $("index.html.loader, index.html.loading_txt").hide();
});
// ページ読み込み時
$(window).on('load', function () {
  if (!localStorage.getItem('visited')) {
    // 初回だけローディングを表示
    $(".loader").delay(1500).fadeOut('slow');
    $(".loading_txt").delay(1200).fadeOut('slow');
    localStorage.setItem('visited', 'true');
  } else {
    // 2回目以降は即非表示
    $(".loader, .loading_txt").hide();
  }
});


  /*=================================================
   ふわっと出てくる 
  ===================================================*/

  $(window).scroll(function () {
    $(".fadeIn,.fadeIn-right,.fadeIn-left").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("is-show");
      }
    });
  });

});




