var menu = ['IPhone 13 Series', 'Apple Watch', 'IPad Pro ', 'Macbook Pro', 'Phụ kiện Apple']
var menuTitle = ['Hotsale giảm sốc', 'Mua nhiều giảm nhiều', 'Siêu sale giảm khủng', 'Đặt trước nhiều ưu đãi', 'Nhận quà cực khủng']
var mySwiper = new Swiper ('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '<br>' + (menuTitle[index]) + '</span>';
        },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })