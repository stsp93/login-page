
// label effect

$('input').each(function (i, el) {  //initial check
    if (el.value !== '') {
        el.previousElementSibling.classList.add('not-empty')

    }
})

$('input').on('focusout', function () {
    if ($(this).val() === '') {
        $(this).prev().removeClass('not-empty')
    }
})

$('input').on('focus', function () {
    $(this).prev().addClass('not-empty')
});


// Login/Register slide logic
$('.toggle-form').on('click', function () {
    $('.register-form, .login-form').toggleClass('active');
    $('.register-form').toggleClass('hidden-right');
    $('.login-form').toggleClass('hidden-left');
});


// Ripple effect
$('button').on('click', function (e) {
    let x = e.clientX - this.getBoundingClientRect().x;
    let y = e.clientY - this.getBoundingClientRect().y; 


    console.log(this.getBoundingClientRect().x );

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 1000);

    
});

// Successfully register popup effect

$('#registerBtn').on('click', function (e) {
    $(".success-popup").slideDown();
    setTimeout(function() {
      $(".success-popup").slideUp();
    }, 2000);
})
