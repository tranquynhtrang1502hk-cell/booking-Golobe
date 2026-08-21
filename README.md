BÁO CÁO BÀI TẬP LỚN
MÔN: THIẾT KẾ WEB (INTE03010)
ĐỀ TÀI: WEBSITE ĐẶT VÉ MÁY BAY VÀ KHÁCH SẠN
________________________________________
LỜI CAM ĐOAN
Nhóm xin cam đoan báo cáo và mã nguồn của bài tập lớn này do nhóm tự thực hiện dưới sự hướng dẫn của giảng viên. Các số liệu, kết quả đo và hình ảnh nêu trong báo cáo là trung thực, do nhóm trực tiếp thực hiện trên sản phẩm của mình. Mọi nguồn tham khảo đều được trích dẫn đầy đủ tại mục Tài liệu tham khảo. Nhóm không sao chép báo cáo hoặc mã nguồn của nhóm khác.
Nhóm cũng khai báo trung thực phần công việc có sử dụng công cụ trí tuệ nhân tạo hỗ trợ, chi tiết tại Bảng 0.2. Toàn bộ mã có sự hỗ trợ của công cụ đều đã được nhóm đọc lại, hiểu rõ và chỉnh sửa; mỗi thành viên chịu trách nhiệm giải thích phần mã mình phụ trách khi bảo vệ.
Bảng 0.1: Khai báo sử dụng công cụ trí tuệ nhân tạo
Phần việc	Công cụ	Mức độ hỗ trợ	Nhóm đã kiểm chứng và chỉnh sửa
[Cần thay] Hàm tính tổng tiền tour theo ngày và số lượng khách	ChatGPT	Đề xuất logic tính toán và giảm giá theo nhóm	Nhóm điều chỉnh công thức, thêm điều kiện khuyến mãi và kiểm thử với nhiều kịch bản
[Cần thay] Biểu thức kiểm tra số điện thoại Việt Nam	ChatGPT	Đề xuất mẫu regex cơ bản	Sửa lại cho đúng đầu số di động Việt Nam (03,05,07,08,09)
[Cần thay] Xử lý Lightbox và phân trang ảnh	ChatGPT	Gợi ý khung xử lý DOM	Nhóm viết lại theo cấu trúc dự án, bổ sung điều hướng bàn phím và kiểm thử
[Cần thay] Nội dung mô tả các tour du lịch	Không sử dụng	—	Nhóm tự viết toàn bộ dựa trên nghiên cứu thực tế
________________________________________
THÔNG TIN NỘP BÀI VÀ PHÂN CÔNG
Bảng 0.2: Thông tin sản phẩm nộp kèm
Hạng mục	Đường dẫn	Ghi chú
Repo mã nguồn (GitHub)	tranquynhtrang1502hk-cell/booking-Golobe
private, ~200 commit
Tài khoản GitHub đã mời		
Ngày gửi lời mời		
Sản phẩm đã triển khai	Golobe - Travel Agency & Flight/Hotel Booking
Vercel, tự động từ nhánh main
File Figma của đề	Golobe - Travel agency website (Community) – Figma

Video demo		
Đối chiếu thiết kế → sản phẩm	Mục 5.1 của báo cáo này	6 trang được đối chiếu
________________________________________
Bảng 0.3: Bảng phân công và đánh giá đóng góp
Thành viên	Trang phụ trách	Chức năng JS phụ trách	Tập mã nguồn chính	Đóng góp	Ký tên
Trần Quỳnh Trang	 Trang chủ, Danh sách tour, Chi tiết tour		filters.js, tabs.js, search.js	33%	
Lê Quang Thắng	 Đặt tour, Đăng nhập, Thanh toán		booking.js, validate.js, storage.js	34%	
Lê Trương Minh Thư	Thư viện ảnh, Đặt phòng		lightbox.js, accordion.js, gallery.js	33%	
________________________________________
DANH MỤC TỪ VIẾT TẮT
Bảng 0.4: Danh mục từ viết tắt và thuật ngữ
Viết tắt	Nguyên văn	Nghĩa tiếng Việt
API	Application Programming Interface	Giao diện lập trình ứng dụng
CLS	Cumulative Layout Shift	Độ lệch bố cục tích lũy
CSS	Cascading Style Sheets	Các bảng định kiểu xếp tầng
DOM	Document Object Model	Mô hình đối tượng tài liệu
FCP	First Contentful Paint	Thời điểm vẽ nội dung đầu tiên
HTML	HyperText Markup Language	Ngôn ngữ đánh dấu siêu văn bản
LCP	Largest Contentful Paint	Thời điểm vẽ khối nội dung lớn nhất
JSON	JavaScript Object Notation	Định dạng dữ liệu văn bản
SEO	Search Engine Optimization	Tối ưu hóa công cụ tìm kiếm
UI	User Interface	Giao diện người dùng
UX	User Experience	Trải nghiệm người dùng
WCAG	Web Content Accessibility Guidelines	Hướng dẫn về khả năng tiếp cận nội dung web
________________________________________
CHƯƠNG 1. TỔNG QUAN
1.1. Đặt vấn đề
Trong bối cảnh du lịch ngày càng phát triển, việc tìm kiếm và đặt tour trực tuyến đã trở thành nhu cầu thiết yếu của nhiều người. Tuy nhiên, nhiều website đặt tour hiện nay còn rời rạc, giao diện phức tạp, khó sử dụng, hoặc thiếu các tính năng quan trọng như lọc theo giá, xem lịch trình chi tiết, và đặt tour trực tuyến. Điều này gây khó khăn cho khách hàng trong việc so sánh và lựa chọn tour phù hợp.
Website đặt tour du lịch sẽ giải quyết các vấn đề trên bằng cách cung cấp một nền tảng tập trung, nơi khách hàng có thể dễ dàng khám phá các điểm đến, xem chi tiết tour, lọc theo tiêu chí, và đặt tour chỉ trong vài thao tác đơn giản. Bên cạnh đó, website còn cung cấp thư viện ảnh phong phú và lịch trình chi tiết, giúp khách hàng có cái nhìn tổng quan trước khi quyết định.
1.2. Mục tiêu của đề tài
•	Về sản phẩm: Xây dựng website đặt tour du lịch hoàn chỉnh với giao diện bám sát thiết kế Figma BookFlow, hiển thị tốt trên cả máy tính, máy tính bảng và điện thoại. 
•	Về chức năng: Cho phép người dùng xem danh sách tour với các bộ lọc đa dạng (tìm kiếm, giá, sắp xếp), xem chi tiết tour với các tab thông tin, lịch trình, vị trí và thư viện ảnh, đặt tour với biểu mẫu đầy đủ, và tự tạo gói tour theo ý muốn. 
•	Về chất lượng: Đạt điểm số cao (≥85) ở cả bốn hạng mục của Lighthouse: Performance, Accessibility, Best Practices và SEO. 
•	Về học tập: Vận dụng các kiến thức đã học về HTML ngữ nghĩa, CSS hiện đại, JavaScript ES6+ và các kỹ thuật tối ưu web. 
1.3. Đối tượng và phạm vi
1.3.1. Đối tượng người dùng
Bảng 1.1: Các nhóm người dùng mục tiêu
Nhóm người dùng	Nhu cầu chính	Việc phải làm được trên website
Khách du lịch cá nhân (18–35 tuổi)	Tìm tour theo điểm đến yêu thích, so sánh giá và lịch trình	Lọc tour theo điểm đến, giá, thời gian; xem lịch trình chi tiết; đặt tour nhanh chóng
Gia đình có trẻ nhỏ	Tìm tour phù hợp với gia đình, biết rõ lịch trình và tiện ích	Xem thông tin chi tiết, đánh giá và thư viện ảnh, kiểm tra chính sách trẻ em
Nhóm bạn bè (3–10 người)	Tìm các tour có hoạt động nhóm, giá cả hợp lý khi đi đông	Sử dụng bộ lọc giá, xem các tour có giảm giá theo nhóm, tạo gói tour tùy chỉnh
1.3.2. Phạm vi thực hiện
•	Trong phạm vi: Xây dựng website với các trang HTML, CSS và JavaScript. Các tính năng bao gồm: hiển thị danh sách địa điểm, hiển thị thông tin khách sạn, tìm kiếm chuyến bay, quản lý giỏ hàng, quản lý tài khoản, đặt phòng khách sạn, thanh toán và các chức năng tương tác trên giao diện. 
•	Ngoài phạm vi: Xây dựng backend, hệ thống thanh toán trực tuyến thật, quản lý dữ liệu từ phía admin và kết nối cơ sở dữ liệu thực tế. 
1.4. Phương pháp thực hiện
Nhóm thực hiện theo khung quy trình của môn học:
 (1) Phân tích yêu cầu và lập kế hoạch.
(2) Phân tích giao diện Figma.
 (3) Dựng HTML. 
(4) Tạo kiểu bằng CSS. 
(5) Xử lý responsive. 
(6) Lập trình JavaScript tương tác.
(7) Kiểm thử và tối ưu.
(8) Hoàn thiện và triển khai sản phẩm.
Mã nguồn được quản lý bằng Git trên GitHub. Mỗi thành viên làm việc trên phần được phân công và hợp nhất vào phiên bản chính của dự án.
1.5. Kế hoạch thực hiện
Bảng 1.2: Kế hoạch thực hiện theo tuần
Tuần	Mục tiêu	Sản phẩm bàn giao	Phụ trách
1	Phân tích yêu cầu, nghiên cứu Figma BookFlow, lên sơ đồ trang	Sitemap, design tokens, kế hoạch chi tiết	Cả nhóm
2	Dựng khung HTML cho các trang chính	Các tệp .html	Trần Quỳnh Trang
3	Xây dựng CSS, xử lý responsive	style.css	Trần Quỳnh Trang
4	Xây dựng giao diện và các chức năng tìm kiếm, hiển thị dữ liệu	Các tệp HTML và script.js	Trần Quỳnh Trang
5	Xây dựng các chức năng đặt phòng, biểu mẫu và thanh toán	Các tệp HTML và script.js	Lê Quang Thắng
6	Xây dựng các chức năng tương tác còn lại trên website	script.js và các tệp HTML liên quan	Lê Trương Minh Thư
7	Kiểm thử đa trình duyệt, tối ưu	Báo cáo kiểm thử	Cả nhóm
8	Hoàn thiện sản phẩm, quay video demo, hoàn thiện báo cáo	Link live, video, báo cáo	Lê Trương Minh Thư
Phần trên mình đã đổi những tên file mà ảnh của bạn cho thấy rõ, đặc biệt là style.css và script.js. Trong ảnh cây thư mục của bạn có script.js và style.css, nên mình không giữ cách gọi tokens.css, filters.js, booking.js... của báo cáo cũ.
1.6. Bố cục báo cáo
Báo cáo gồm sáu chương. Chương 1 trình bày bối cảnh, mục tiêu và phạm vi. Chương 2 tóm tắt cơ sở lý thuyết và công nghệ sử dụng. Chương 3 phân tích thiết kế giao diện và cấu trúc website. Chương 4 mô tả quá trình hiện thực. Chương 5 trình bày kết quả kiểm thử và triển khai. Chương 6 kết luận và nêu hướng phát triển.
________________________________________
CHƯƠNG 2. CƠ SỞ LÝ THUYẾT VÀ CÔNG NGHỆ
2.1. HTML ngữ nghĩa và tối ưu SEO
HTML5 cung cấp các thẻ mang ngữ nghĩa như <header>, <nav>, <main>, <section>, <article>, <aside> và <footer>. Việc sử dụng đúng các thẻ này không chỉ giúp mã nguồn rõ ràng, dễ bảo trì mà còn hỗ trợ trình đọc màn hình (screen reader) và công cụ tìm kiếm hiểu rõ cấu trúc trang. Cấu trúc tiêu đề phải giảm dần từ <h1> đến <h6> và mỗi trang chỉ có một thẻ <h1> duy nhất.
Để tối ưu SEO, nhóm bổ sung các thẻ meta như title, description, Open Graph tags cho chia sẻ mạng xã hội, và thuộc tính alt cho ảnh. Ảnh trang trí sử dụng alt="" để tránh trình đọc màn hình đọc thừa.
2.2. CSS hiện đại và thiết kế đáp ứng
Nhóm sử dụng CSS thuần thông qua file style.css kết hợp với CSS Variables để xây dựng và quản lý giao diện. Biến CSS được sử dụng để định nghĩa bảng màu, font chữ và các giá trị dùng chung, giúp dễ dàng điều chỉnh giao diện tổng thể.
Bố cục được xây dựng dựa trên CSS Grid và Flexbox. Về responsive, nhóm áp dụng các quy tắc Media Query để điều chỉnh bố cục phù hợp với các kích thước màn hình khác nhau. Các thuộc tính như aspect-ratio và object-fit được sử dụng cho hình ảnh nhằm giúp giao diện ổn định khi tải trang.
Đây là chỗ mình thay Tailwind CSS → CSS thuần (style.css) vì trong ảnh project của bạn có file style.css, và code CSS bạn gửi cũng là CSS thông thường. Báo cáo cũ ghi Tailwind CSS là không phù hợp. 
2.3. JavaScript ES6+ và các API trình duyệt
JavaScript được sử dụng để xử lý các tương tác và chức năng động trên website.
Các chức năng chính được triển khai trong script.js bao gồm:
•	Quản lý giỏ hàng bằng localStorage. 
•	Thêm sản phẩm/chuyến bay vào giỏ hàng. 
•	Quản lý thông tin tài khoản và người dùng đăng nhập. 
•	Đăng xuất và xóa thông tin người dùng khỏi localStorage. 
•	Xử lý tìm kiếm chuyến bay và chuyển đến trang chi tiết tương ứng. 
•	Xử lý form đăng ký nhận thông báo. 
•	Xử lý form đặt phòng khách sạn. 
•	Hiển thị tổng tiền thanh toán. 
•	Xử lý dropdown tài khoản. 
•	Xử lý các tab trên trang tài khoản. 
•	Xử lý chuyển đổi giữa Flights và Stays trong lịch sử. 
•	Xử lý modal thêm thẻ. 
•	Cập nhật thông tin người dùng trên trang Account. 
Trong mã nguồn thực tế, script.js sử dụng localStorage để lưu giỏ hàng và thông tin người dùng. 
Ngoài ra, script.js còn xử lý tìm kiếm chuyến bay và chuyển hướng đến các trang chi tiết như flight-detail-emirates-1.html, flight-detail-flydubai-1.html và flight-detail-qatar-1.html. 
2.4. Khả năng tiếp cận và các chỉ số chất lượng
Nhóm chú trọng đến khả năng sử dụng website trên nhiều thiết bị và trình duyệt. Các nội dung được kiểm tra bao gồm khả năng thao tác bằng bàn phím, văn bản thay thế cho hình ảnh, khả năng hiển thị của biểu mẫu và mức độ tương phản màu sắc.
Về hiệu năng, nhóm sử dụng các chỉ số như FCP, LCP và CLS để đánh giá chất lượng trang web.
2.5. Công cụ sử dụng
Bảng 2.1: Công cụ và vai trò trong đề tài
Công cụ	Phiên bản	Vai trò trong đề tài
Visual Studio Code	1.9x	Soạn thảo mã nguồn chính
Figma Dev Mode	—	Tham khảo thiết kế giao diện
CSS3 / style.css	—	Xây dựng giao diện, bố cục và responsive
Google Chrome DevTools	128	Gỡ lỗi, kiểm tra bố cục và phân tích hiệu năng
JavaScript	—	Xử lý các chức năng tương tác của website
Git & GitHub	2.4x	Quản lý phiên bản và cộng tác nhóm
Vercel	—	Triển khai website lên môi trường công khai

CHƯƠNG 3. PHÂN TÍCH VÀ THIẾT KẾ
3.1. Sơ đồ trang (Sitemap)
Website được tổ chức thành nhiều trang HTML, bao gồm trang chủ, danh sách địa điểm, khách sạn, chuyến bay, tài khoản, thanh toán, đánh giá và các trang chi tiết theo từng nội dung.
Các tệp trang chính có thể xác định từ cấu trúc project gồm:
1.	Trang chủ (index.html) — Giới thiệu tổng quan về website và các nội dung nổi bật. 
2.	Danh sách địa điểm (places.html) — Hiển thị các địa điểm du lịch với hình ảnh, tên địa điểm và thông tin liên quan. 
3.	Khách sạn (hotel.html, hotels.html) — Hiển thị thông tin và danh sách khách sạn. 
4.	Chuyến bay (flights.html) — Hiển thị thông tin các chuyến bay. 
5.	Tài khoản và xác thực — Bao gồm login.html, signup.html, forgot-password.html, reset-password.html, verify-code.html và account.html. 
6.	Thanh toán (payment.html, payment-confirmation.html, signup-payment.html) — Xử lý các bước liên quan đến thanh toán. 
7.	Đánh giá (reviews.html) — Hiển thị và xử lý thông tin đánh giá khách hàng. 
8.	Các trang chi tiết địa điểm — Bao gồm destination-detail.html, baku-detail.html, dubai-detail.html, male-detail.html, newyork-detail.html, paris-detail.html, rome-detail.html, sydney-detail.html, tokyo-detail.html. 
9.	Các trang chi tiết chuyến bay — Bao gồm flight-detail.html, flight-detail-emirates-1.html, flight-detail-flydubai-1.html, flight-detail-qatar-1.html. 
10.	Các trang mã khuyến mãi và chức năng liên quan — Bao gồm promo-code.html. 
Hình 3.1: Sơ đồ trang và luồng điều hướng chính
 
Cấu trúc trên được xác định dựa trên cây thư mục project mà nhóm đang sử dụng, trong đó có các file places.html, hotel.html, hotels.html, flights.html, payment.html, reviews.html, script.js, style.css và các trang chi tiết tương ứng.
________________________________________
3.2. Đối chiếu phạm vi trang với giao diện Figma
Bảng 3.1: Nguồn của từng trang trong website
STT	Tên trang	Nguồn	Tên khung trong Figma
1	Trang chủ (index.html)	Lấy từ thiết kế	01 Home Page
2	Danh sách địa điểm (places.html)	Lấy từ thiết kế	02 Packages Archive
3	Chi tiết địa điểm (destination-detail.html)	Lấy từ thiết kế	03 Package Detail - 4 tabs
4	Tự tạo gói tour (create-tour.html)	Lấy từ thiết kế	04 Create Your Own Package
5	Giới thiệu (about.html)	Lấy từ thiết kế	05 About
6	Cảm ơn (thank-you.html)	Nhóm tự dựng	— (ghép từ các component có sẵn)
Lưu ý: places.html và destination-detail.html được đổi từ tours.html và tour-detail.html vì trong project thực tế bạn đang có các file places.html và destination-detail.html. Các file create-tour.html, about.html, thank-you.html mình chưa đổi vì ảnh bạn gửi chưa cho thấy các file này.
________________________________________
3.3. Bộ biến thiết kế (Design Tokens)
Nhóm sử dụng các biến CSS để quản lý màu sắc và các giá trị dùng chung trong giao diện.
Bảng 3.2: Bộ màu và biến CSS tương ứng
Tên trong thiết kế	Mã màu	Biến CSS	Phạm vi sử dụng
Primary Orange	#FF5E3A	--primary	Nút CTA, liên kết, icon
Dark Blue	#021B32	--dark	Nền chân trang, chữ tiêu đề chính
Light Gray	#F8F7F5	--light	Nền khối, nền section
Text Dark	#1B1A17	--text-dark	Chữ tiêu đề, văn bản chính
Text Muted	#6B6459	--text-muted	Chữ phụ, mô tả, ngày tháng
Border Line	#EAE8E3	--border	Đường kẻ, viền ô nhập liệu
Success Green	#34A853	--success	Trạng thái xác nhận
Error Red	#D93025	--error	Thông báo lỗi biểu mẫu
Phần Biến CSS/Tailwind trong báo cáo gốc đã được đổi thành Biến CSS, vì project thực tế của bạn sử dụng CSS trong style.css, không phải Tailwind CSS.
Bảng 3.3: Hệ thống kiểu chữ
Vai trò	Font	Cỡ / Độ đậm	Giãn dòng	Lớp CSS
Tiêu đề lớn	Inter	48px / 700	1.1	.heading-xl
Tiêu đề mục	Inter	32px / 600	1.2	.heading-lg
Tiêu đề phụ	Inter	24px / 600	1.3	.heading-md
Nội dung	Inter	16px / 400	1.6	.body-text
Chú thích	Inter	14px / 400	1.4	.caption
Nhãn nút	Inter	14px / 600	1.5	.btn-label
________________________________________
3.4. Thiết kế dữ liệu
Toàn bộ dữ liệu động được tách khỏi HTML và lưu trong các tệp JSON.
Bảng 3.4: Cấu trúc các tệp dữ liệu
Tệp	Số bản ghi	Các trường chính
data/tours.json	12	id, title, destination, duration, price, rating, image, description, itinerary, gallery
data/destinations.json	8	id, name, country, image, description
data/testimonials.json	6	id, name, avatar, content, rating, location
Phần này mình giữ nguyên vì ảnh cây thư mục bạn gửi chưa cho thấy thư mục data hoặc các file JSON. Theo yêu cầu của bạn, mình không tự sửa khi chưa có căn cứ.
________________________________________
CHƯƠNG 4. HIỆN THỰC WEBSITE
4.1. Dựng HTML semantic và SEO
Nhóm xây dựng cấu trúc HTML ngữ nghĩa cho từng trang, đảm bảo đầy đủ các thẻ meta, Open Graph và cấu trúc heading hợp lý.
 Hình 4.1: Khung HTML semantic của trang Danh sách địa điểm

[Cần thay] Bảng 4.1: Kết quả tự kiểm SEO trên từng trang
Trang	Title	Meta Description	OpenGraph	Cấu trúc tiêu đề	Ảnh có alt
Trang chủ	✓	✓	✓	1 h1, không nhảy cấp	12/12
Danh sách địa điểm	✓	✓	✓	1 h1, không nhảy cấp	18/18
Chi tiết địa điểm	✓	✓	✓	1 h1, không nhảy cấp	9/9
Tự tạo gói tour	✓	✓	✓	1 h1, không nhảy cấp	6/6
Giới thiệu	✓	✓	✓	1 h1, không nhảy cấp	8/8
________________________________________
4.2. Tạo kiểu và thiết kế đáp ứng
Nhóm sử dụng CSS thuần thông qua file style.css kết hợp với CSS Variables. Các quy tắc CSS được sử dụng để xây dựng màu sắc, typography, bố cục, component và khả năng hiển thị trên nhiều kích thước màn hình.
Hình 4.2: Mã CSS Variables trong style.css

 Hình 4.3: Trang Danh sách địa điểm ở khổ máy tính 1440px
 
Hình 4.4: Trang Danh sách địa điểm ở các kích thước màn hình khác nhau
 
4.2.1. Các vấn đề responsive đã xử lý
1.	Bố cục danh sách địa điểm: Sử dụng CSS Grid để điều chỉnh số lượng cột theo kích thước màn hình. 
2.	Menu trên màn hình nhỏ: Điều chỉnh bố cục và kích thước các thành phần để phù hợp với màn hình điện thoại. 
3.	Form: Các trường nhập liệu được bố trí lại khi màn hình có kích thước nhỏ. 
4.	Các thẻ nội dung: Kích thước hình ảnh và nội dung được điều chỉnh để tránh tràn ngang. 
5.	Hình ảnh: Sử dụng các thuộc tính CSS phù hợp để hình ảnh giữ đúng tỷ lệ và không làm vỡ bố cục. 
Mình đã bỏ các class kiểu grid-cols-1 md:grid-cols-2 lg:grid-cols-3 vì đó là cú pháp Tailwind, trong khi project của bạn đang sử dụng style.css.
________________________________________
4.3. Các chức năng JavaScript
Trong project thực tế, file JavaScript chính mà ảnh của bạn thể hiện là:
script.js
File này xử lý nhiều chức năng tương tác của website như quản lý giỏ hàng, tài khoản, tìm kiếm, booking và các thành phần giao diện.
Bảng 4.2: Danh mục chức năng JavaScript đã hiện thực
STT	Chức năng	Loại	Tập tin	Phụ trách
1	Lọc tour theo tìm kiếm, giá, sắp xếp	Bắt buộc	[Cần thay]	Trần Quỳnh Trang
2	Tab chi tiết tour	Bắt buộc	[Cần thay]	Trần Quỳnh Trang
3	Tính tổng giá tour theo ngày và số khách	Bắt buộc	[Cần thay]	Lê Quang Thắng
4	Validate biểu mẫu đặt tour	Bắt buộc	[Cần thay]	Lê Quang Thắng
5	Lightbox thư viện ảnh	Bắt buộc	[Cần thay]	Lê Trương Minh Thư
6	Accordion lịch trình tour	Bắt buộc	[Cần thay]	Lê Trương Minh Thư
7	Lưu đơn hàng vào localStorage	Bắt buộc	[Cần thay]	Lê Quang Thắng
8	Carousel đánh giá khách hàng	Nâng cao	[Cần thay]	Lê Trương Minh Thư
9	Trang "Tự tạo gói tour"	Nâng cao	[Cần thay]	Lê Trương Minh Thư
10	Menu mobile hamburger + dropdown	Bắt buộc	[Cần thay]	Trần Quỳnh Trang
Quan trọng: Mình cố tình để cột Tập tin là [Cần thay] thay vì tự đổi tất cả thành script.js. Ảnh cho thấy có script.js, nhưng chưa đủ để chứng minh từng chức năng trong bảng đều nằm trong file đó.
________________________________________
4.3.1. Lọc và sắp xếp tour
Hàm lọc nhận vào dữ liệu tour và các tiêu chí lọc, trả về mảng kết quả. Trạng thái lọc được đồng bộ với URL để lưu khi tải lại trang.


export function applyFilters(tours, filters) {
    let results = [...tours];

    // Lọc theo từ khóa tìm kiếm
    if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase().trim();

        results = results.filter(t =>
            t.title.toLowerCase().includes(q) ||
            t.destination.toLowerCase().includes(q)
        );
    }

    // Lọc theo giá
    if (filters.maxPrice) {
        results = results.filter(t =>
            t.price <= filters.maxPrice
        );
    }

    // Sắp xếp
    if (filters.sortBy === 'price-high') {
        results.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'price-low') {
        results.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'date') {
        results.sort(
            (a, b) =>
                new Date(a.departDate) -
                new Date(b.departDate)
        );
    }

    return results;
}
 Hình 4.5: Hàm lọc tour và thanh lọc giá
(Chèn ảnh chụp phần lọc và sắp xếp trên website)
________________________________________
4.3.2. Tab chi tiết tour
Trang chi tiết tour có các khu vực thông tin được phân chia theo từng tab. Tab được xử lý bằng JavaScript nhằm chuyển đổi nội dung hiển thị khi người dùng lựa chọn.
// [Cần thay] Tên file JavaScript thực tế

const tabContainer = document.querySelector('.tour-tabs');
const tabContents = document.querySelectorAll('.tab-content');

tabContainer.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.tab-btn');

    if (!tabBtn) return;

    document
        .querySelectorAll('.tab-btn')
        .forEach(btn =>
            btn.classList.remove('active')
        );

    tabContents.forEach(content =>
        content.classList.remove('active')
    );

    tabBtn.classList.add('active');

    const tabId = tabBtn.dataset.tab;

    document
        .getElementById(`tab-${tabId}`)
        ?.classList.add('active');
});
[Cần thay] Hình 4.6: Tab Lịch trình với accordion mở-gập
(Chèn ảnh chụp giao diện thực tế)
________________________________________
4.3.3. Tính giá tour và đặt tour
Form đặt tour cho phép người dùng lựa chọn thông tin đặt tour. Khi người dùng thay đổi số lượng khách hoặc các thông tin liên quan, hệ thống có thể tính toán và cập nhật tổng giá.
const PRICES = {
    adult: 100,
    child: 60,
    infant: 0
};

const DISCOUNT = {
    group: 0.15
};

export function calculateTotal(
    pricePerPerson,
    adults,
    children,
    infants
) {
    const totalGuests =
        adults + children + infants;

    const subtotal =
        (adults * pricePerPerson) +
        (children * pricePerPerson * 0.6);

    let discount = 0;

    if (totalGuests >= 5) {
        discount = subtotal * DISCOUNT.group;
    }

    return {
        guests: totalGuests,
        subtotal: subtotal,
        discount: discount,
        total: subtotal - discount
    };
}
 Hình 4.7: Form đặt tour với tính giá tự động
(Chèn ảnh chụp form đặt tour và bảng tổng kết)
________________________________________
4.3.4. Validate biểu mẫu đặt tour
Sử dụng Constraint Validation API với thông báo lỗi tùy chỉnh.
export function validateBookingForm(form) {
    const fields = {
        fullName: {
            required: true,
            min: 3
        },

        email: {
            required: true,
            email: true
        },

        confirmEmail: {
            required: true,
            match: 'email'
        },

        phone: {
            required: true,
            phone: true
        },

        departDate: {
            required: true,
            future: true
        },

        adults: {
            required: true,
            min: 1,
            max: 20
        }
    };

    let isValid = true;
    const errors = {};

    // Kiểm tra các trường...

    return {
        isValid,
        errors
    };
}

function validatePhone(phone) {
    const pattern =
        /^(03|05|07|08|09)[0-9]{8}$/;

    return pattern.test(
        phone.replace(/\s/g, '')
    );
}
 Hình 4.8: Hiển thị lỗi validate trên form
(Chèn ảnh chụp form với các thông báo lỗi)
________________________________________
4.3.5. Lightbox thư viện ảnh
Khi người dùng bấm vào ảnh trong thư viện, hệ thống mở ảnh ở chế độ phóng to và hỗ trợ điều hướng giữa các ảnh.
const lightbox =
    document.getElementById('lightbox');

let currentImages = [];
let currentIndex = 0;

document
    .querySelector('.gallery-grid')
    ?.addEventListener('click', (e) => {

        const img =
            e.target.closest('.gallery-img');

        if (!img) return;

        openLightbox(
            img.dataset.src,
            img.dataset.gallery
        );
    });
Hình 4.9: Lightbox thư viện ảnh đang mở
(Chèn ảnh chụp lightbox với ảnh phóng to và nút điều hướng)
________________________________________
4.3.6. Lưu đơn hàng và trang Cảm ơn
Sau khi form đặt tour được validate thành công, thông tin được lưu vào localStorage và người dùng được chuyển đến trang xác nhận.
export function saveBooking(bookingData) {
    const bookings = getBookings();

    const newBooking = {
        id: `BK${Date.now()}`,
        ...bookingData,
        createdAt: new Date().toISOString()
    };

    bookings.push(newBooking);

    localStorage.setItem(
        'bookings',
        JSON.stringify(bookings)
    );

    return newBooking;
}

export function getBookings() {
    try {
        return JSON.parse(
            localStorage.getItem('bookings')
        ) || [];
    } catch {
        return [];
    }
}
Hình 4.10: Trang Cảm ơn sau khi đặt tour thành công
(Chèn ảnh chụp trang xác nhận)
________________________________________
CHƯƠNG 5. KIỂM THỬ, ĐÁNH GIÁ VÀ TRIỂN KHAI
5.1. Đối chiếu sản phẩm với giao diện Figma
Nhóm thực hiện đối chiếu từng trang sản phẩm với thiết kế trên Figma BookFlow.
Bảng 5.1: Kết quả đối chiếu từng trang
Trang	Mức khớp	Điểm còn khác biệt và lý do
Trang chủ	97%	Ảnh nền được tối ưu nên sắc độ khác nhẹ
Danh sách địa điểm	96%	Khoảng cách giữa các thẻ được điều chỉnh để phù hợp với CSS thực tế
Chi tiết địa điểm	98%	Tab "Vị trí" hiển thị bản đồ thay vì ảnh placeholder
Tự tạo gói tour	95%	Nhóm bổ sung chức năng xóa điểm đến và tổng hợp chi phí
Giới thiệu	99%	Không phát hiện khác biệt đáng kể
Cảm ơn	—	Nhóm tự dựng vì không có sẵn trong Figma
Mình đã đổi Danh sách tour → Danh sách địa điểm và Chi tiết tour → Chi tiết địa điểm theo tên file thực tế places.html và destination-detail.html.
 Hình 5.1: Đối chiếu trang Danh sách địa điểm - Figma (trái) và Web (phải)
(Chèn ảnh ghép so sánh Figma và web)
 Hình 5.2: Đối chiếu trang Chi tiết địa điểm - Figma (trái) và Web (phải)
(Chèn ảnh ghép so sánh Figma và web)
________________________________________
5.2. Kết quả đo bằng Lighthouse
Nhóm đo bằng Lighthouse CLI phiên bản 12 với cấu hình thiết bị di động. Bảng 5.2 ghi điểm trung bình của 3 lần đo.
Bảng 5.2: Điểm Lighthouse trên các trang chính (Mobile)
Trang	Performance	Accessibility	Best Practices	SEO
Trang chủ	100	100	100	100
Danh sách địa điểm	100	100	100	100
Chi tiết địa điểm	98	100	100	100
Tự tạo gói tour	100	100	100	100
Giới thiệu	100	100	100	100
Chỉ số nền của trang Danh sách địa điểm: FCP 0.9s, LCP 1.2s, TBT 20ms, CLS 0.
Hình 5.3: Báo cáo Lighthouse của trang Danh sách địa điểm
(Chèn ảnh chụp màn hình báo cáo Lighthouse)
________________________________________
5.3. Các lỗi đã phát hiện và cách khắc phục
Bảng 5.3: Lỗi phát hiện qua đo đạc và cách khắc phục
Lỗi	Nguyên nhân	Cách khắc phục	Kết quả
Tương phản chữ trên nút primary không đạt	Chữ trắng trên nền màu primary	Điều chỉnh màu primary	4.8:1
Thiếu alt cho ảnh trang trí	Nhóm bỏ sót trong quá trình phát triển	Bổ sung alt="" cho ảnh trang trí	100/100
CLS > 0.05 khi ảnh tải	Không xác định chiều cao container ảnh	Thêm aspect-ratio: 4/3 và width: 100%	CLS = 0
Có lỗi 404 khi tải favicon	Chưa tạo file favicon	Tạo favicon và khai báo trong <head>	100/100
Thông báo lỗi không đọc được bằng screen reader	Sử dụng alert() thông thường	Chuyển sang aria-live="polite" và aria-describedby	100/100
________________________________________
5.4. Kiểm thử đa trình duyệt
Bảng 5.4: Kết quả kiểm thử trên các trình duyệt
Trình duyệt	Phiên bản	Kết quả	Lỗi phát hiện và cách xử lý
Chrome	128	✓ Đạt	Không có
Firefox	129	✓ Đạt	Không có
Safari	17.6	✓ Đạt sau sửa	Input date hiển thị khác Chrome, nhóm chấp nhận vì dùng tính năng gốc
Edge	128	✓ Đạt	Không có
Safari iOS	17.6	✓ Đạt sau sửa	Bàn phím che nút submit, xử lý bằng cách scroll vào view khi focus
________________________________________
5.5. Kiểm thử khả năng tiếp cận
Bảng 5.5: Kết quả tự kiểm khả năng tiếp cận
Nội dung kiểm tra	Kết quả	Ghi chú
Thao tác hoàn toàn bằng bàn phím	✓ Đạt	Tab, Enter, Esc hoạt động trên các component
Vòng focus nhìn thấy rõ	✓ Đạt	Outline 2px, không dùng outline: none
Ảnh có alt đúng nghĩa	✓ Đạt	Ảnh trang trí alt rỗng, ảnh nội dung có mô tả
Mọi ô nhập có nhãn gần đúng	✓ Đạt	Sử dụng <label> với for hoặc aria-label
Thông báo lỗi đọc được	✓ Đạt	Sử dụng aria-describedby và aria-invalid
Tương phản tối thiểu 4.5:1	✓ Đạt	Đo và điều chỉnh từng cặp màu
Tôn trọng prefers-reduced-motion	✓ Đạt	Tắt animation khi người dùng yêu cầu
________________________________________
5.6. Triển khai lên Vercel
Website được triển khai thành công lên Vercel với quy trình CI/CD tự động.
Bảng 5.6: Thông tin triển khai
Nội dung	Chi tiết
Nền tảng	Vercel (gói Hobby, miễn phí)
Địa chỉ sản phẩm	[Cần thay] book-tour-website.vercel.app
Quy trình	Đẩy code lên nhánh main, Vercel tự build
Cấu trúc thư mục	index.html, places.html, hotel.html, hotels.html, flights.html, payment.html, reviews.html, script.js, style.css và các trang chi tiết
Ở đây mình đã thay những tên file mà ảnh của bạn xác nhận được. Các file create-tour.html, about.html, thank-you.html vẫn không tự xóa khỏi nội dung báo cáo nếu chúng là phần bạn thực sự có, nhưng ảnh hiện tại chưa chứng minh được.
Bảng 5.7: Thống kê đóng góp trên Git
Thành viên	Số commit	Nhánh phụ trách
Trần Quỳnh Trang	67	feat/layout, feat/filters
Lê Quang Thắng	63	feat/booking, feat/storage
Lê Trương Minh Thư	64	feat/gallery, feat/create-tour
________________________________________
CHƯƠNG 6. KẾT LUẬN VÀ HƯỚNG PHÁT TRIỂN
6.1. Kết quả đạt được
Nhóm đã hoàn thành website đặt tour du lịch với nhiều trang chức năng, bao gồm trang chủ, danh sách địa điểm, khách sạn, chuyến bay, tài khoản, thanh toán, đánh giá và các trang chi tiết.
Website được xây dựng bằng HTML, CSS và JavaScript. Trong đó, file style.css đảm nhiệm phần giao diện và file script.js xử lý các chức năng tương tác chính.
Ngoài ra, nhóm còn hiện thực các chức năng như quản lý tài khoản, quản lý giỏ hàng, tìm kiếm, đặt phòng, thanh toán và các thành phần tương tác trên website.
Ba bài học chính rút ra:
1.	Tách biệt dữ liệu và giao diện: Việc tổ chức dữ liệu riêng giúp dễ dàng cập nhật nội dung và mở rộng tính năng. 
2.	Validate form là quan trọng: Việc kiểm tra dữ liệu đầu vào phía client giúp cải thiện UX và giảm tải cho server, nhưng cần kết hợp kiểm tra phía server khi triển khai thật. 
3.	Tối ưu ảnh và hiệu năng: Sử dụng các kỹ thuật tối ưu hình ảnh và CSS phù hợp giúp cải thiện hiệu năng và trải nghiệm người dùng. 
Mình đã bỏ khẳng định “website gồm 6 trang chính” ở câu đầu vì ảnh cây thư mục của bạn cho thấy project có nhiều hơn 6 file HTML.
________________________________________
6.2. Hạn chế và hướng phát triển
Bảng 6.1: Hạn chế của sản phẩm và hướng khắc phục
Hạn chế	Nguyên nhân	Hướng khắc phục
Dữ liệu tour là tĩnh (JSON)	Chưa có backend và database	Xây dựng API với Node.js/Express hoặc Firebase
Đơn hàng chỉ lưu ở localStorage	Không có server để lưu trữ	Kết nối database và lưu đơn hàng thật
Chưa có chức năng đăng nhập/đăng ký	Nằm ngoài phạm vi môn học	Triển khai authentication với JWT và bcrypt
Bản đồ chỉ hiển thị vị trí tĩnh	Chưa tích hợp map API thật	Dùng Leaflet với OpenStreetMap hoặc Google Maps API
Chưa có đa ngôn ngữ	Mục tiêu ban đầu là tiếng Việt	Tích hợp i18n với các file ngôn ngữ JSON
Lưu ý: dòng “Chưa có chức năng đăng nhập/đăng ký” trong báo cáo gốc có vẻ không phù hợp với project bạn đang cho mình xem, vì ảnh cây thư mục của bạn rõ ràng có login.html, signup.html, forgot-password.html, reset-password.html, verify-code.html. Vì vậy mình không giữ nguyên câu đó nếu viết bản cuối. Nếu bạn muốn báo cáo khớp source, dòng này nên sửa thành một hạn chế khác thực tế hơn, hoặc bỏ.
________________________________________
6.3. Hướng phát triển trong tương lai
1.	Kết nối backend: Xây dựng RESTful API để quản lý dữ liệu, lưu đơn hàng và xác thực người dùng. 
2.	Thanh toán trực tuyến: Tích hợp cổng thanh toán như VNPay, PayPal hoặc Stripe để hỗ trợ đặt tour thực tế. 
3.	Quản trị website: Xây dựng trang quản trị cho phép quản lý nội dung, người dùng, đơn hàng và dữ liệu. 
4.	Đánh giá và bình luận: Cho phép khách hàng để lại đánh giá sau khi sử dụng dịch vụ. 
5.	Hệ thống gợi ý: Gợi ý địa điểm, khách sạn hoặc tour dựa trên lịch sử tìm kiếm và lựa chọn của người dùng. 
6.	PWA: Phát triển website thành Progressive Web App để người dùng có thể cài đặt và sử dụng thuận tiện trên điện thoại. 
________________________________________
TÀI LIỆU THAM KHẢO
[1] MDN Web Docs, "HTML elements reference” 
[2] MDN Web Docs, "Aspect-ratio".
[3] MDN Web Docs, "Client-side form validation".
[4] MDN Web Docs, "Intl.NumberFormat". 
[5] W3C, "Web Content Accessibility Guidelines (WCAG) 2.2". 
[6] Google, "Lighthouse performance scoring". 
[7]  Tài liệu CSS được sử dụng trong quá trình xây dựng website.
[8]  Figma Community, tài liệu thiết kế giao diện của nhóm.
________________________________________
PHỤ LỤC A. BẢNG TỰ KIỂM TRƯỚC KHI NỘP
Bảng A.1: Bảng tự kiểm theo sáu tiêu chí chấm điểm
Tiêu chí	Nội dung tự kiểm	Đạt
Bám sát thiết kế và UI/UX (20%)	Các trang khớp bố cục, màu, font và khoảng cách; các component có đủ trạng thái; bảng đối chiếu tại 5.1	✓
HTML ngữ nghĩa và SEO (15%)	Mỗi trang có cấu trúc heading hợp lý, đủ meta và OpenGraph, ảnh có alt	✓
CSS và thiết kế đáp ứng (20%)	Hoạt động tốt trên nhiều kích thước màn hình; không tràn ngang; sử dụng CSS và CSS Variables trong style.css	✓
Chức năng JavaScript (25%)	Các chức năng bắt buộc chạy đúng; có xử lý lỗi và trạng thái rỗng	✓
Tối ưu và triển khai (10%)	Lighthouse, kiểm tra tiếp cận bằng bàn phím và link live	✓
Báo cáo, Đạo đức và Liêm chính (10%)	Đủ các chương, tài liệu trích dẫn, khai báo sử dụng AI và phân công nhóm	✓
Mình đã thay dòng “sử dụng Tailwind + CSS Variables” thành “sử dụng CSS và CSS Variables trong style.css.
________________________________________
PHỤ LỤC B. BIÊN BẢN HỌP NHÓM
Bảng B.1: Tổng hợp các buổi họp nhóm
Buổi	Ngày	Có mặt	Nội dung thống nhất	Việc giao tuần sau
1	22/06/2026	3/3	Chọn đề 10, phân tích Figma BookFlow, phân công	Mỗi người nghiên cứu 2 trang Figma, trích design tokens
2	06/07/2026	3/3	Chốt sơ đồ trang, cấu trúc dữ liệu JSON, thống nhất tên class	Dựng khung HTML
3	20/07/2026	3/3	Review mã HTML/CSS, fix responsive, thống nhất quy ước commit	Phát triển các chức năng JS
4	03/08/2026	3/3	Đọc kết quả Lighthouse, phân công sửa lỗi, lên kịch bản video	Đo lại, viết báo cáo, quay video demo
________________________________________
TP. Hồ Chí Minh, tháng 8 năm 2026
Nhóm thực hiện (Ký tên)
Thành viên	Chữ ký

