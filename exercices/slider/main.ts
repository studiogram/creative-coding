import "@/style.css";
import "./style.css";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

/* Slider des macarons */
const slides = document.querySelectorAll(".macarons .swiper-slide");
const slider = new Swiper(".macarons", {
  slidesPerView: 3,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

slider.on("slideChange", function () {
  const currentIndex =
    slider.realIndex + 1 < slider.slides.length ? slider.realIndex + 1 : 0;
  const sliderEl = document.getElementById("slider");
  const sliderCircle = document.getElementById("circle");
  const backgroundColor = slides[currentIndex].getAttribute("data-background");
  const circleColor = slides[currentIndex].getAttribute("data-circle");
  /* Modifications des couleurs */
  if (sliderEl && backgroundColor) {
    sliderEl.style.background = backgroundColor;
  }
  if (sliderCircle && circleColor) {
    sliderCircle.style.background = circleColor;
  }
});

/* Slider en boucle */
new Swiper(".slider", {
  slidesPerView: 3,
  spaceBetween: 120,
  loop: true,
  speed: 4000,
  modules: [Autoplay],
  allowTouchMove: false,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
});
