
// label effect

$('input').each(function(i, el) {  //initial check
    if(el.value !== '') {
        el.previousElementSibling.classList.add('not-empty')

    }
}) 

$('input').on('focusout', function() {
    if($(this).val() === '') {
        $(this).prev().removeClass('not-empty')
    }
})

$('input').on('focus', function() {
    $(this).prev().addClass('not-empty')
});


// Login/Register slide logic
$('.toggle-form').on('click', function() {
    $('.register-form, .login-form').toggleClass('active');
    $('.register-form').toggleClass('hidden-right');
    $('.login-form').toggleClass('hidden-left');
  });