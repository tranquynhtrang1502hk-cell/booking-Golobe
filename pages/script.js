document.addEventListener('DOMContentLoaded', () => {
    // --- QUẢN LÝ GIỎ HÀNG ---
    function updateCartIcon() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountEl = document.getElementById('cart-item-count');
        if (cartCountEl) {
            cartCountEl.textContent = cart.length;
            cartCountEl.style.display = cart.length > 0 ? 'flex' : 'none';
        }
    }

    function addToCart(item) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(cartItem => cartItem.name === item.name && cartItem.type === item.type);
        if (existingItem) {
            alert(`${item.name} is already in your cart.`);
            return;
        }
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartIcon();
        alert(`Added ${item.name} to your cart!`);
    }

    // Cập nhật icon giỏ hàng khi tải trang
    updateCartIcon();

    // Gán sự kiện click cho các nút "Add to Cart"
    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.matches('.add-to-cart-btn')) {
            e.preventDefault();
            const item = {
                type: e.target.dataset.type,
                name: e.target.dataset.name,
                route: e.target.dataset.route,
                price: parseFloat(e.target.dataset.price),
                img: e.target.dataset.img,
            };
            addToCart(item);
        }
    });

    // This section should be at the top to run on all pages
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    const userNameEl = document.getElementById('user-name');
    const logoutBtn = document.getElementById('logout-btn');

    if (currentUser) {
        // Nếu người dùng đã đăng nhập
        if (authButtons) authButtons.style.display = 'none';
        if (userInfo) {
            userInfo.style.display = 'flex'; // Use 'flex' to align items
            if (userNameEl) {
                // Check if the element has the 'header-link' class for correct styling
                const welcomeText = userNameEl.classList.contains('header-link') ? '' : 'Welcome, ';
                userNameEl.textContent = `${welcomeText}${currentUser.name}`;
            }
        }
    } else {
        // Nếu người dùng chưa đăng nhập
        if (authButtons) authButtons.style.display = 'flex';
        if (userInfo) userInfo.style.display = 'none';
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            alert('Bạn đã đăng xuất.');
            window.location.reload(); // Tải lại trang để cập nhật header
        });
    }

    // --- LOGIC TRANG CHI TIẾT CHUYẾN BAY ---
    const bookingActionCard = document.getElementById('booking-action-card');
    if (bookingActionCard && currentUser) {
        // Lấy thông tin chuyến bay từ trang
        const price = document.querySelector('.detail-summary-price h4')?.textContent.replace('$', '');
        const name = document.querySelector('.detail-summary-route h5')?.textContent;
        const route = document.querySelector('.detail-summary-route p')?.textContent.split('•')[0].trim();
        const image = document.querySelector('.detail-summary-info img')?.src;
        bookingActionCard.innerHTML = `
            <button class="btn btn-primary add-to-cart-btn" style="width: 100%; font-size: 18px; padding: 16px;"
                data-type="Flight" data-name="${name}" data-route="${route}" data-price="${price}" data-img="${image}">
                <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
        `;
    }

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

// Booking Form (Book Now)
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const checkin = document.getElementById('checkin-date').value;
        const checkout = document.getElementById('checkout-date').value;
        const guests = document.getElementById('booking-guests').value;
        const room = document.getElementById('room-type').value;
        const hotel = document.getElementById('hotel-name').textContent;
        const total = document.getElementById('total-price').textContent;

        alert(
            `✅ Booking Confirmed!\n\n` +
            `🏨 Hotel: ${hotel}\n` +
            `📅 Check-in: ${checkin}\n` +
            `📅 Check-out: ${checkout}\n` +
            `👤 Guests: ${guests}\n` +
            `🛏️ Room: ${room}\n` +
            `💰 Total: ${total}\n\n` +
            `Thank you for choosing Golobe! We'll send your confirmation email shortly.`
        );
    });
}

});
