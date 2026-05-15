const cards = document.querySelectorAll('.highlight-card');
const body = document.body;

cards.forEach(card => {

    card.addEventListener('click', () => {

        const isActive = card.classList.contains('active');

        // fecha todos
        cards.forEach(c => c.classList.remove('active'));
        body.classList.remove('card-open');

        // se não estava ativo, abre
        if (!isActive) {
            card.classList.add('active');
            body.classList.add('card-open');
        }

    });

});