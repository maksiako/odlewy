document.addEventListener('DOMContentLoaded', function () {

    // --- Modal Galerii ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalTag = document.getElementById('modal-tag');
    const modalDesc = document.getElementById('modal-desc');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const imgSrc = this.querySelector('.gallery-img').getAttribute('src');
            const title = this.getAttribute('data-title');
            const tag = this.getAttribute('data-tag');
            const desc = this.getAttribute('data-description');

            if (modalImg) modalImg.setAttribute('src', imgSrc);
            if (modalTitle) modalTitle.textContent = title;
            if (modalTag) modalTag.textContent = tag;
            if (modalDesc) modalDesc.textContent = desc;

            if (modal) modal.classList.add('active');
            document.body.classList.add('modal-open');
        });
    });

    function closeModal() {
        if (modal) modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // --- Dynamiczna Logika Kalkulatora Ceny ---
    const calcInputs = document.querySelectorAll('.calc-input');
    const totalPriceEl = document.getElementById('total-price');

    function calculateTotal() {
        let total = 0;

        // 1. Kategoria podstawowa
        const selectedBase = document.querySelector('input[name="base_type"]:checked');
        if (selectedBase) {
            total += parseInt(selectedBase.value);
        }

        // 2. Dopłata za wiek
        const ageSelect = document.getElementById('child-age');
        if (ageSelect) {
            total += parseInt(ageSelect.value);
        }

        // 3. Dodatki i opcje
        const addons = document.querySelectorAll('.calc-addon:checked');
        addons.forEach(function (addon) {
            total += parseInt(addon.value);
        });

        // Wpisanie wyliczonej sumy
        if (totalPriceEl) {
            totalPriceEl.textContent = total;
        }
    }

    // Nasłuchiwanie zmian na inputach
    calcInputs.forEach(function (input) {
        input.addEventListener('change', calculateTotal);
    });

    // Przeliczenie na start
    calculateTotal();
});