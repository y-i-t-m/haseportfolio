// PageTopへのスクロールボタン //
$(function () {
  var topBtn = $("#page-top");
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  topBtn.click(function () {
    $("body,html").animate({
        scrollTop: 0
      },
      500
    );
    return false;
  });

  // スクロール速度の設定 //

  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  // 要素フェードインの設定 //

  $(window).scroll(function () {
    var fadeTrigger = $(".js-trigger");
    $(fadeTrigger).each(function () {
      var scroll = $(window).scrollTop(),
        elemTop = $(this).offset().top,
        windowHeight = $(window).height();

      if (scroll > elemTop - windowHeight / 2) {
        $(this)
          .find(".fade-elem")
          .addClass("fade-up");
      }
    });
  });
  $(window).trigger("scroll");

  $(window).scroll(function () {
    var fadeTrigger = $(".js-trigger");
    $(fadeTrigger).each(function () {
      var scroll = $(window).scrollTop(),
        elemTop = $(this).offset().top,
        windowHeight = $(window).height();

      if (scroll > elemTop - windowHeight / 2) {
        if ($(this).hasClass("multi-trigger")) {
          $(this)
            .find(".fade-elem")
            .addClass("fade-up-down");
        } else if (
          $(this).hasClass("fade-type-up") ||
          $(this).hasClass("fade-type-down")
        ) {
          $(this).addClass("fade-up-down");
        } else if (
          $(this).hasClass("fade-type-left") ||
          $(this).hasClass("fade-type-right")
        ) {
          $(this).addClass("fade-left-right");
        }
      }
    });
  });
  $(window).trigger("scroll");
});
