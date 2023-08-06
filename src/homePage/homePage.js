function createStar() {
    $('.header').append($('<div></div>').css(
        {left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 30 +5}s`
    }
    ).addClass('star'));
}

const numberOfStars = 100;

for (let i = 0; i < numberOfStars; i++) {
    setTimeout(createStar, Math.random() * 100000 )
}

$('#accordion').accordion();