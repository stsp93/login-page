
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^\+[0-9]{1,3}[0-9]{4,14}$/;


export function validateLength(name, input, form) {
    if (input==='' || input.length < 6) {
        $(form).find(`input[name="${name}"]`).addClass('invalid-input').parent().effect('shake');
        return false;
    } else {
        $(form).find(`input[name="${name}"]`).removeClass('invalid-input')
        return true;
    }
}

export function validateEmail(email, form) {
    if (email==='' || !emailPattern.test(email)) {
        $(form).find(`input[name="email"]`).addClass('invalid-input').parent().effect('shake');
        return false;
    } else {
        $(form).find(`input[name="email"]`).removeClass('invalid-input')
        return true;
    }
}

export function validatePhoneNumber(phoneNumber, form) {
    if (phoneNumber==='' || !phoneRegex.test(phoneNumber)) {
        $(form).find(`input[name="phone"]`).addClass('invalid-input').parent().effect('shake');
        return false;
    } else {
        $(form).find(`input[name="phone"]`).removeClass('invalid-input')
        return true;
    }
}
export function validatePasswords(password,rePassword, form) {
    if (password !== rePassword) {
        $(form).find(`input[name="rePassword"]`).addClass('invalid-input').parent().effect('shake');
        return false;
    } else {
        $(form).find(`input[name="rePassword"]`).removeClass('invalid-input')
        return true;
    }
}


