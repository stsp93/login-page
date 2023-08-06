function createStar() {
    $('.header').append($('<div></div>').css(
        {left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 30 +5}s`
    }
    ).addClass('star'));
}

const numberOfStars = 500;

for (let i = 0; i < numberOfStars; i++) {
    setTimeout(createStar, Math.random() * 100000 )
}

$('#accordion').accordion();