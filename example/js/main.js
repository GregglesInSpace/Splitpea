$('.splitP').css("opacity", "1");
$(function() {
  $('.splitP div').each(function(i) {
    $(this).delay((i++) * 100).fadeTo(750, 1, "swing");
  })
});