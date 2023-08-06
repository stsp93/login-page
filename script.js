import { validateEmail, validatePhoneNumber, validateLength,validatePasswords } from './validations.js'

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

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
        ripples.remove()
    }, 1000);
});


// Login submit

$('.login-form form').on('submit', function (e) {
    e.preventDefault();

    const { username, password } = Object.fromEntries(new FormData(this));

    try {
        let errMsg = '';
        if (!validateLength('username', username, this)) {
            errMsg += 'Username should be at least 6 chars\n'
        } else {
            errMsg.replace('Username should be at least 6 chars\n', '')
        };
        if (!validateLength('password', password, this)) {
            errMsg += 'Password should be at least 6 chars\n'
        } else {
            errMsg.replace('Password should be at least 6 chars\n', '')
        };
        if (errMsg !== '') throw new Error(errMsg);
    } catch (err) {
        $(this).find('.error').text(err.message);
        return;
    }

    $(this).find('.error').text('');
})

// Register submit

$('.register-form form').on('submit', function (e) {
    e.preventDefault();

    const { username, password,rePassword, phone, email } = Object.fromEntries(new FormData(this));

    try {
        let errMsg = '';
        if (!validateLength('username', username, this)) {
            errMsg += 'Username should be at least 6 chars\n';
        } else {
            errMsg.replace('Username should be at least 6 chars\n', '');
        };
        if (!validateLength('password', password, this)) {
            errMsg += 'Password should be at least 6 chars\n';
        } else {
            errMsg.replace('Password should be at least 6 chars\n', '');
        };
        if (!validatePasswords(password, rePassword, this)) {
            errMsg += 'Passwords don\'t match\n';
        } else {
            errMsg.replace('Passwords don\'t match\n', '');
        };
        if (!validatePhoneNumber(phone, this)) {
            errMsg += 'Invalid phone number\n';
        } else {
            errMsg.replace('Invalid phone number\n', '');
        };
        if (!validateEmail(email, this)) {
            errMsg += 'Invalid email\n';
        } else {
            errMsg.replace('Invalid email\n', '');
        };
        if (errMsg !== '') throw new Error(errMsg);
    } catch (err) {
        $(this).find('.error').text(err.message);
        return;
    }
    $(this).find('.error').text('');

    // Successfully register popup effect
    $(".success-popup").slideDown();
    setTimeout(function () {
        $(".success-popup").slideUp();
    }, 2000);
})