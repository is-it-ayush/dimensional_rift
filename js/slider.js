// This is slider.js
export var swiper;
export function loadSwiper() {

    swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    console.log("[SwiperJS] Slider Instance has been initialized.")
}

export function destroySwiper() {
    swiper.destroy(false);
    console.log("[SwiperJS] Slider Instance has been destroyed.")
}

export default { loadSwiper, swiper, destroySwiper};