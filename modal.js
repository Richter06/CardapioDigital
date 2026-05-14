const cards = document.querySelectorAll('.highlight-card');

cards.forEach(card => {

    card.addEventListener('click', () => {

        cards.forEach(otherCard => {

            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }

        });

        card.classList.toggle('active');

    });

});