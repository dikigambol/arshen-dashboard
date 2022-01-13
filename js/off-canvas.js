var body = $('body');

// dekstop 
$('[data-toggle="minimize"]').on("click", function () {
  if (body.hasClass('sidebar-icon-only')) {
    body.removeClass('sidebar-icon-only');
    $('.user-wrapper').delay(200).show(0)
  } else {
    body.addClass('sidebar-icon-only');
    $('.user-wrapper').hide();
  }
});

// mobile 
$(function () {
  $('[data-toggle="offcanvas"]').on("click", function () {
    $('.sidebar-offcanvas').toggleClass('active')
  });
});

$(function () {
  $('[data-toggle="offbill"]').on("click", function () {
    $('.bill-panel').toggleClass('active')
    $('.main-content-panel').toggleClass('hide')
  });
});