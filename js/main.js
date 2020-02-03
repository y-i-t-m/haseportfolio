(function() {
  $("#js-hamburger-button").click(function() {
    $("body").toggleClass("is-active");

    if ($(this).attr("aria-expanded") == "false") {
      $(this).attr("aria-expanded", true);
    } else {
      $(this).attr("aria-expanded", false);
    }
  });

  $(".gnav-list__gnav-item-link").click(function() {
    $("body").toggleClass("is-active");

    if ($("#js-hamburger-button").attr("aria-expanded") == "false") {
      $("#js-hamburger-button").attr("aria-expanded", true);
    } else {
      $("#js-hamburger-button").attr("aria-expanded", false);
    }
  });

  // スクロール速度
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position
      },
      speed,
      "swing"
    );
    return false;
  });

  $('input ,textarea').on('focusin', function() {
    $(this).parent().find('.label-name').addClass('label-name-active');
    $(this).parent().find('.label-hint').addClass('label-hint-active');
  });
  
  $('input, textarea').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('.label-name').removeClass('label-name-active');
      $(this).parent().find('.label-hint').removeClass('label-hint-active');
    }
  });
})();
