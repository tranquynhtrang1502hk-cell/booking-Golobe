document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality in the search widget
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            btn.classList.add('active');
            
            // Here you could add logic to change the form fields
            // based on whether 'flights' or 'stays' is selected
            const tabType = btn.getAttribute('data-tab');
            console.log(`Switched to ${tabType} tab`);
        });
    });

    // Add Promo Code button
    const promoBtn = document.getElementById('add-promo-btn');
    if (promoBtn) {
        promoBtn.addEventListener('click', () => {
            alert('Promo code input field would appear here.');
        });
    }

    // Search form submission
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Searching for places... (Form submitted)');
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            alert(`Thanks for subscribing with: ${email}!`);
            newsletterForm.reset();
        });
    }
});
