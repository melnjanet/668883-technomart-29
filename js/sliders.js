"use strict";

  const slides = document.contains(document.querySelector(`.carousel-list`)) ? document.querySelectorAll(`.carousel-item`) : ``;
  const dots = document.contains(document.querySelector(`.carousel-list`)) ? document.querySelector(`.carousel-controls`).children : ``;
  const tabs = document.contains(document.querySelector(`.services-slider`)) ? document.querySelectorAll(`.services-slider-tab`) : ``;
  const tabsButtons = document.contains(document.querySelector(`.services-slider`)) ? document.querySelectorAll(`.services-navigation-item`) : ``;
  const nextButton = document.contains(document.querySelector(`.carousel-navigation`)) ? document.querySelector(`.carousel-navigation-next`) : ``;
  const prevButton = document.contains(document.querySelector(`.carousel-navigation`)) ? document.querySelector(`.carousel-navigation-prev`) : ``;

  let slideIndex = 1;
  const TIME_INTERVAL = 5000;

  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  }

  const showSlides = (n) => {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if(n < 1){
      slideIndex = slides.length;
    }

    slides.forEach((item) => {
      item.classList.add('hidden')
    });

    Array.from(dots).forEach((item) => {
      item.classList = item.classList.remove(`current`);
    });

    slides[slideIndex - 1].classList.remove(`hidden`);
    dots[slideIndex - 1].classList.add(`current`);
  }

  const slideTime = (n) => {
    n = 1;
    let index = slideIndex === slides.length ? slideIndex -= n : slideIndex += n;
    showSlides(index);
  }

  const timer = setInterval(slideTime, TIME_INTERVAL);

  const onNextButtonClick = () => {
    showSlides(slideIndex += 1);
      clearInterval(timer);
      setInterval(timer, TIME_INTERVAL);
  }

  const onPrevButtonClick = () => {
    showSlides(slideIndex -= 1);
      clearInterval(timer);
      setInterval(timer, TIME_INTERVAL);
  }

  if (slides) {
    showSlides(slideIndex);
    nextButton.addEventListener(`click`, onNextButtonClick);
    prevButton.addEventListener(`click`, onPrevButtonClick);
  }

  const showSlidesTab = (n) => {
    tabsButtons.forEach((item) => {
      item.classList.remove(`services-navigation-item-active`);
    });

    tabsButtons[n].classList.add(`services-navigation-item-active`);

    tabs.forEach((item) => {
      item.classList.add('hidden');
      item.classList.remove(`slider-tab-active`)
    })

    tabs[n].classList.remove(`hidden`);
  }

  const currentTab = (n) => {
    showSlidesTab(n);
  }

  if (tabs) {
    tabs.forEach((item) => {
      item.classList.add(`hidden`);
    })

    tabs[0].classList.remove(`hidden`);
  }
  window.sliders = {
    currentTab,
    currentSlide
  }
