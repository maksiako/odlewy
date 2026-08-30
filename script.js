document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalTag = document.getElementById('modal-tag');
    const modalDesc = document.getElementById('modal-desc');

    // Otwieranie modalu po kliknięciu w element galerii
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const title = item.getAttribute('data-title');
            const tag = item.getAttribute('data-tag');
            const desc = item.getAttribute('data-description');

            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalTag.textContent = tag;
            modalDesc.textContent = desc;

            modal.classList.add('active');
            document.body.classList.add('modal-open');
        });
    });

    // Funkcja zamykania modalu
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Zamknięcie klawiszem ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});