var rain = document.createElement("script");
rain.type = "text/javascript";
rain.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
rain.async = true;
rain.onload = function () {
  !function (_0x9b30x2) {
    if (config.infinite_scroll) {
      var _0x9b30x3 = 0;
      var _0x9b30x4 = "<svg height='24' viewBox='0 0 24 24' width='24'><path d='M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z'/></svg>";
      var _0x9b30x5 = _0x9b30x2("#blog-pager"), _0x9b30x6 = _0x9b30x2(".blog-posts"), _0x9b30x7 = false;
      _0x9b30x5.find("#blog-pager-newer-link").remove(), _0x9b30x5.on("click", "#blog-pager-older-link a", function () {
        history.pushState("", "", this.href);
        return _0x9b30x2.get(this.href, {}, function (_0x9b30x8) {
          var _0x9b30x9 = _0x9b30x2(_0x9b30x8).find(".post-outer").length ? _0x9b30x2(_0x9b30x8) : _0x9b30x2("<div></div>");
          _0x9b30x6.append(_0x9b30x9.find(".blog-posts").html()), _0x9b30x5.html(_0x9b30x9.find("#blog-pager-older-link").clone());
          _0x9b30x6.find("#ignielRelatedList ul").append(_0x9b30x9.find("#ignielRelatedList ul li").clone());
          if (!window.location.href.match("/search\\?updated-max")) {
            document.title = _0x9b30x9.find(".post-title").first().text();
            _0x9b30x6.append('<div class="ignielMiddleAds">' + _0x9b30x9.find(".ignielMiddleAds").html() + "</div>");
            ignielMiddleAds();
          }
          ;
          _0x9b30x7 = false;
        }, "html"), _0x9b30x2(this).replaceWith('<span><img src="' + _0x9b30x4 + '"/></span>'), false;
      });
      if (config.auto) {
        $(window).on("scroll resize", function () {
          if (!_0x9b30x7 && $(this).scrollTop() + $(this).height() >= _0x9b30x5.offset().top) {
            _0x9b30x5.find("#blog-pager-older-link a").trigger("click");
            _0x9b30x7 = true;
          }
        });
      }
    }
  }(jQuery);
};
document.getElementsByTagName("head")[0].appendChild(rain);
