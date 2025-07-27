function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function setHeaderWidth() {
  const header = document.querySelector('.header');
  if (!header) return;
  if (isMobile()) {
    header.style.width = '100vw';
    return;
  }
  const scrollbarWidth = getScrollbarWidth();
  if (scrollbarWidth > 0) {
    header.style.width = `calc(100vw - ${scrollbarWidth}px)`;
  } else {
    header.style.width = '100vw';
  }
}

window.addEventListener('resize', setHeaderWidth);
window.addEventListener('DOMContentLoaded', setHeaderWidth);


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
