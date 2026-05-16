const cards = document.querySelectorAll('.highlight-card');
const overlay = document.getElementById('overlay');

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation();

        const isActive = card.classList.contains('active');

        document.querySelectorAll('.highlight-card.active').forEach(activeCard => {
            closeCard(activeCard);
        });

        if (!isActive) {
            openCard(card);
        }
    });
});

function openCard(card) {
    card.dataset.parentId = card.parentElement.className;
    card.dataset.nextSiblingId = card.nextElementSibling ? '1' : '0';

    card._oldParent = card.parentElement;
    card._oldNext = card.nextElementSibling;

    document.body.appendChild(card);
    card.classList.add('active');
    overlay.classList.add('active');
}

function closeCard(card) {
    card.classList.remove('active');
    overlay.classList.remove('active');

    if (card._oldParent) {
        if (card._oldNext && card._oldNext.parentElement === card._oldParent) {
            card._oldParent.insertBefore(card, card._oldNext);
        } else {
            card._oldParent.appendChild(card);
        }
    }
}

overlay.addEventListener('click', () => {
    document.querySelectorAll('.highlight-card.active').forEach(closeCard);
});