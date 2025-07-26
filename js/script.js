$(document).ready(function () {
  function animateSelector() {
    var activeItem = $('#navbarSupportedContent ul li.active');
    var horiSelector = $(".hori-selector");
    if (activeItem.length) {
      var itemPos = activeItem.position();
      var itemWidth = activeItem.outerWidth();
      var itemHeight = activeItem.outerHeight();

      horiSelector.css({
        top: itemPos.top + "px",
        left: itemPos.left + "px",
        width: itemWidth + "px",
        height: itemHeight + "px"
      });
    }
  }

  // Initial animation
  setTimeout(animateSelector);

  // Animate on click, only if not already active
  $('#navbarSupportedContent ul li').on('click', function () {
    if ($(this).hasClass('active')) return;
    $('#navbarSupportedContent ul li').removeClass('active');
    $(this).addClass('active');
    animateSelector();
  });

  // Animate on window resize
  $(window).on('resize', function () {
    setTimeout(animateSelector, 300);
  });

  // Animate after navbar toggler/collapse
  $('#navbarSupportedContent').on('shown.bs.collapse', animateSelector);
  $('#navbarSupportedContent').on('hidden.bs.collapse', animateSelector);
});