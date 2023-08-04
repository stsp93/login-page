$('input').on('focus', function() {
    $(this).prev().addClass('not-empty')
});

$('.toggle-form').click(function() {
    $('.register-form, .login-form').toggleClass('active');
    $('.register-form').toggleClass('hidden-right');
    $('.login-form').toggleClass('hidden-left');
  });