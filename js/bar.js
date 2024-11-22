const searchInput = document.getElementById('sea');
const cards = document.querySelectorAll('.st-content'); // Har st-content ko ek card samjha jaayega

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase(); // User ka input lowercase mein

    cards.forEach(card => {
        const text = card.textContent.toLowerCase(); // Card ka poora content lowercase mein
        if (text.includes(query)) {
            card.style.display = ''; // Match hone par card visible rakhein
        } else {
            card.style.display = 'none'; // Match na hone par card chhupa dein
        }
    });
});
