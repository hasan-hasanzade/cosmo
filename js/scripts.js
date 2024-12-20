const slider = document.getElementById("get-slider");
const btnLeft = document.getElementById("get-slider-left");
const btnRight = document.getElementById("get-slider-right");

let currentPosition = 0;

function getItemWidth() {
  if (window.innerWidth <= 768) {
    return 100;
  } else if (window.innerWidth <= 992) {
    return 50;
  } else {
    return 33.333;
  }
}

let itemWidth = getItemWidth();

btnRight.addEventListener("click", () => {
  if (
    currentPosition >
    -(slider.children.length - 100 / itemWidth) * itemWidth
  ) {
    currentPosition -= itemWidth;
    slider.style.transform = `translateX(${currentPosition}%)`;
  }
});

btnLeft.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += itemWidth;
    slider.style.transform = `translateX(${currentPosition}%)`;
  }
});

window.addEventListener("resize", () => {
  currentPosition = 0;
  itemWidth = getItemWidth();
  slider.style.transform = `translateX(${currentPosition}%)`;
});

const reviewsSlider = document.getElementById("reviews-slider");
const reviewsBtnLeft = document.getElementById("reviews-slider-left");
const reviewsBtnRight = document.getElementById("reviews-slider-right");

let reviewsPosition = 0;
const totalItems = reviewsSlider.children.length;
const reviewsItemWidth = 100;

reviewsBtnRight.addEventListener("click", () => {
  if (Math.abs(reviewsPosition) < (totalItems - 1) * reviewsItemWidth) {
    reviewsPosition -= reviewsItemWidth;
  } else {
    reviewsPosition = 0;
  }
  reviewsSlider.style.transform = `translateX(${reviewsPosition}%)`;
});

reviewsBtnLeft.addEventListener("click", () => {
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
const registerBtn = document.getElementById("registerBtn");

function hideScroll() {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
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

document.addEventListener("DOMContentLoaded", () => { 
  const registerBtn = document.getElementById("registerBtn");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const modal = document.getElementById("modal");
  const successModal = document.getElementById("successModal");
  const closeModal = document.getElementById("closeModal");
  const closeSuccessModal = document.getElementById("closeSuccessModal");

  nameInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[0-9]/g, "");
  });

  registerBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    if (!name) {
      nameError.textContent = "Поле имя обязательно для заполнения.";
      valid = false;
    } else if (name.length < 2) {
      nameError.textContent = "Имя не должно быть меньше 2 символов.";
      valid = false;
    }

    if (!email) {
      emailError.textContent = "Поле email обязательно для заполнения.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = "Некорректный формат почты.";
      valid = false;
    }

    if (!password) {
      passwordError.textContent = "Поле пароль обязательно для заполнения.";
      valid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Пароль должен содержать не менее 6 символов.";
      valid = false;
    }

    if (valid) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
      successModal.style.display = "flex";
      
      nameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";

      setTimeout(() => {
        successModal.style.display = "none";
        document.body.style.overflow = "auto";
      }, 3000);
    }
  });

  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
  });

  closeSuccessModal.addEventListener("click", () => {
      successModal.style.display = "none";
      document.body.style.overflow = "auto";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = document.querySelectorAll(".mobile-link");
  const openModalButton = document.querySelector(".open-modal-btn");
  const body = document.body;

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });
  openModalButton.addEventListener("click", function () {
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      body.classList.remove("no-scroll");
    }
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
