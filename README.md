# Booking-Golobe

## 1. Giới thiệu

Booking-Golobe là một website du lịch được xây dựng nhằm cung cấp
giao diện để người dùng tìm kiếm và tham khảo thông tin về chuyến bay,
khách sạn và các địa điểm du lịch.

Website được xây dựng bằng HTML5, CSS3 và JavaScript. Các trang được
liên kết với nhau để tạo thành một hệ thống website hoàn chỉnh, bao gồm
trang chủ, chuyến bay, khách sạn, địa điểm, tài khoản, thanh toán,
mã khuyến mãi và đánh giá.

---

## 2. Mục tiêu của project

Project được thực hiện với các mục tiêu:

- Xây dựng giao diện website du lịch trực quan và dễ sử dụng.
- Tạo các trang có nội dung và chức năng liên kết với nhau.
- Áp dụng HTML5 để xây dựng cấu trúc website.
- Áp dụng CSS3 để thiết kế và định dạng giao diện.
- Sử dụng JavaScript để tạo các chức năng tương tác.
- Tổ chức mã nguồn thành các thư mục và file riêng biệt.
- Quản lý mã nguồn bằng Git và GitHub.

---

## 3. Công nghệ sử dụng

### HTML5

HTML5 được sử dụng để xây dựng cấu trúc và nội dung cho các
trang của website.

Các trang HTML bao gồm trang chủ, chuyến bay, khách sạn,
địa điểm du lịch, đăng nhập, đăng ký, thanh toán và đánh giá.

### CSS3

CSS3 được sử dụng để thiết kế giao diện website.

Các file CSS trong project gồm:

- `style.css`
- `flight.css`
- `login.css`
- `page2.css`
- `page4.css`
- `page6.css`

Các file CSS được sử dụng để định dạng bố cục, màu sắc,
kích thước, khoảng cách, font chữ và các thành phần giao diện.

### JavaScript

Website sử dụng JavaScript thông qua file:

```text
script.js
## 4. Cấu trúc project

```text
c:\booking-Golobe\
├── assets\
│   ├── css\
│   │   ├── style.css       (CSS chung cho toàn bộ trang)
│   │   └── auth.css        (CSS riêng cho các trang đăng nhập/đăng ký)
│   ├── js\
│   │   ├── main.js         (JS chung: header, footer, giỏ hàng)
│   │   ├── auth.js         (JS cho đăng nhập, đăng ký)
│   │   ├── reviews.js      (JS cho trang đánh giá)
│   │   └── hotels.js       (JS cho trang tìm khách sạn)
│   └── images\
│       └── (Nơi chứa các hình ảnh của bạn)
│
└── pages\
    ├── auth\
    │   ├── login.html
    │   └── signup.html
    ├── destinations\
    │   ├── baku.html
    │   ├── dubai.html
    │   ├── istanbul.html
    │   ├── male.html
    │   ├── newyork.html
    │   ├── paris.html
    │   ├── rome.html
    │   ├── sydney.html
    │   └── tokyo.html
    ├── flights\
    │   ├── emirates-a380.html
    │   ├── flydubai-737.html
    │   └── qatar-777.html
    │
    ├── index.html          (Trang chủ)
    ├── flights.html        (Trang tìm kiếm chuyến bay)
    ├── hotels.html         (Trang tìm kiếm khách sạn)
    ├── payment.html        (Trang thanh toán)
    ├── places.html         (Trang tất cả địa điểm)
    └── reviews.html        (Trang đánh giá)


