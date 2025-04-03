document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.product-slider', {
        slidesPerView: 3, // يمكنك تعديل عدد الشرائح المعروضة
        spaceBetween: 20, // المسافة بين الشرائح
        loop: false, // تفعيل التكرار اللانهائي
        autoplay: false, // تفعيل التشغيل التلقائي
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
});