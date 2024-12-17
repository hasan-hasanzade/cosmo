const slider = document.getElementById('get-slider');
const btnLeft = document.getElementById('get-slider-left');
const btnRight = document.getElementById('get-slider-right');

let currentPosition = 0;

function getItemWidth() {
    if (window.innerWidth <= 768) {
        return 100; // 1 айтем на экране
    } else if (window.innerWidth <= 992) {
        return 50; // 2 айтема на экране
    } else {
        return 33.333; // 3 айтема на экране
    }
}

let itemWidth = getItemWidth();

btnRight.addEventListener('click', () => {
    if (currentPosition > -(slider.children.length - (100 / itemWidth)) * itemWidth) {
        currentPosition -= itemWidth;
        slider.style.transform = `translateX(${currentPosition}%)`;
    }
});

btnLeft.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += itemWidth;
        slider.style.transform = `translateX(${currentPosition}%)`;
    }
});

// При изменении размера экрана пересчитываем ширину айтемов
window.addEventListener('resize', () => {
    currentPosition = 0; // Сбрасываем позицию
    itemWidth = getItemWidth(); // Обновляем ширину айтема
    slider.style.transform = `translateX(${currentPosition}%)`;
});




const reviewsSlider = document.getElementById('reviews-slider');
const reviewsBtnLeft = document.getElementById('reviews-slider-left');
const reviewsBtnRight = document.getElementById('reviews-slider-right');

let reviewsPosition = 0;
const totalItems = reviewsSlider.children.length;
const reviewsItemWidth = 100;

reviewsBtnRight.addEventListener('click', () => {
    if (Math.abs(reviewsPosition) < (totalItems - 1) * reviewsItemWidth) {
        reviewsPosition -= reviewsItemWidth;
    } else {
        reviewsPosition = 0;
    }
    reviewsSlider.style.transform = `translateX(${reviewsPosition}%)`;
});

reviewsBtnLeft.addEventListener('click', () => {
    if (reviewsPosition < 0) {
        reviewsPosition += reviewsItemWidth;
    } else {
        reviewsPosition = -(totalItems - 1) * reviewsItemWidth;
    }
    reviewsSlider.style.transform = `translateX(${reviewsPosition}%)`;
});


const openModalButtons = document.querySelectorAll(".open-modal-btn");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

function hideScroll() {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
}

function showScroll() {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
}

openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.style.display = "flex";
        hideScroll();
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    showScroll();
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        showScroll();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuLinks = document.querySelectorAll(".mobile-link");
    const body = document.body; // Ссылка на body для управления скроллом

    // Открытие/закрытие меню
    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");

        // Переключаем класс для запрета скролла
        if (mobileMenu.classList.contains("active")) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }
    });

    // Закрытие меню при клике на ссылки
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("active");
            body.classList.remove("no-scroll"); // Возвращаем прокрутку
        });
    });
});

