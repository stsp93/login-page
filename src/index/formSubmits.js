import { validateEmail, validatePhoneNumber, validateLength,validatePasswords } from './validations.js'

export function formSubmits() {
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
        $(".success-popup").slideUp(0, function() {
            $('#registerBtn').next().trigger('click')
        });
    }, 2000);
})
}