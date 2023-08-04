$('input').on('focus', function() {
    $(this).prev().addClass('not-empty')
});

$('.toggle-form').click(function() {
    $('.forms').children().toggleClass('hidden active');
  });