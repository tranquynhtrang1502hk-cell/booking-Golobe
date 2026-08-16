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

        // 1. Lấy giá trị từ các ô input / select trong Form
        const locationInput = document.getElementById('from-to')?.value.toLowerCase().trim() || '';
        const tripType = document.getElementById('trip-type')?.value.toLowerCase() || '';
        const departReturn = document.getElementById('depart-return')?.value.toLowerCase() || '';
        const passengerClass = document.getElementById('passenger-class')?.value.toLowerCase() || '';

        // 2. Kiểm tra các điều kiện để quyết định chuyển sang file nào
        
        // Điều kiện 1: Ưu tiên chọn theo tên Hãng / Địa điểm nhập ở From - To
        if (locationInput.includes('emirates') || locationInput.includes('lahore')) {
            window.location.href = 'flight-detail-emirates-1.html';
        } 
        else if (locationInput.includes('dubai') || locationInput.includes('flydubai')) {
            window.location.href = 'flight-detail-flydubai-1.html';
        } 
        else if (locationInput.includes('qatar') || locationInput.includes('doha')) {
            window.location.href = 'flight-detail-qatar-1.html';
        } 
        // Điều kiện 2: Kiểm tra theo Hạng ghế (Passenger - Class)
        else if (passengerClass.includes('first class') || passengerClass.includes('business')) {
            window.location.href = 'flight-detail-emirates-1.html';
        } 
        else if (passengerClass.includes('economy')) {
            window.location.href = 'flight-detail-flydubai-1.html';
        } 
        // Điều kiện 3: Kiểm tra Loại vé (Trip: One Way / Return)
        else if (tripType.includes('one way')) {
            window.location.href = 'flight-detail-qatar-1.html';
        } 
        // Mặc định chuyển về file Emirates nếu không khớp các điều kiện trên
        else {
            window.location.href = 'flight-detail-emirates-1.html';
        }
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
