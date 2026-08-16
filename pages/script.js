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

    // "Show more" functionality on flights page
    const showMoreBtn = document.getElementById('show-more-btn');
    const extraFlights = document.getElementById('extra-flights');

    if (showMoreBtn && extraFlights) {
        showMoreBtn.addEventListener('click', () => {
            // Show the extra flight cards
            extraFlights.classList.remove('hidden');
            // Hide the "Show more" button itself
            showMoreBtn.style.display = 'none';
        });
    }
    // ====== Hotel Search Form ======
document.addEventListener('DOMContentLoaded', () => {
    const hotelSearchForm = document.getElementById('hotel-search-form');
    if (hotelSearchForm) {
        hotelSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const destination = document.getElementById('hotel-destination').value;
            const checkin = document.getElementById('check-in').value;
            const checkout = document.getElementById('check-out').value;
            const guests = document.getElementById('guests').value;

            alert(
                `🔍 Searching Hotels...\n\n` +
                `📍 Destination: ${destination || 'Any'}\n` +
                `📅 Check-in: ${checkin || 'Not set'}\n` +
                `📅 Check-out: ${checkout || 'Not set'}\n` +
                `👤 Guests: ${guests}\n\n` +
                `We'll find the best hotels for you!`
            );
        });
    }
});
// Booking Form (Book Now)
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const checkin = document.getElementById('checkin-date').value;
        const checkout = document.getElementById('checkout-date').value;
        const guests = document.getElementById('booking-guests').value;
        const room = document.getElementById('room-type').value;

        alert(`✅ Booking Confirmed!\n\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nGuests: ${guests}\nRoom: ${room}\n\nThank you for choosing Golobe!`);
    });
}

});
