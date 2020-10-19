"use strict";

const contactUs = document.contains(document.querySelector(`.contact-us`)) ? document.querySelector(`.contact-us`) : ``;
const modalFeedback = document.contains(document.querySelector(`.modal-feedback`)) ? document.querySelector(`.modal-feedback`) : ``;
const modalFeedbackClose =  document.contains(document.querySelector(`.modal-feedback`)) ? modalFeedback.querySelector(`.modal-close`) : ``;
const map = document.contains(document.querySelector(`.map`)) ? document.querySelector(`.map`) : ``;
const modalMap = document.contains(document.querySelector(`.modal-map`)) ? document.querySelector(`.modal-map`) : ``;
const modalMapClose = document.contains(document.querySelector(`.modal-map`)) ? modalMap.querySelector(`.modal-close`) : ``;
const buyButton = document.querySelectorAll(`.buy-button`);
const modalCart = document.querySelector(`.modal-cart`);
const modalCartClose = modalCart.querySelector(`.modal-close`);

const FeedbackCloseHandler = () => {
  modalFeedback.classList.add(`hidden`);
};

const FeedbackOpenHandler= () => {
  modalFeedback.classList.remove(`hidden`);
}

const onCloseModalFeedbackClick = () => {
  FeedbackCloseHandler();
  document.removeEventListener(`keydown`, onModalFeedbackEscPress);
};

const onModalFeedbackEscPress = (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    FeedbackCloseHandler();
  }
};

const onContactUsClick = (evt) => {
  evt.preventDefault();
  FeedbackOpenHandler();

  document.addEventListener(`keydown`, onModalFeedbackEscPress);
}

const modalMapCloseHandler = () => {
  modalMap.classList.add(`hidden`);
};

const modalMapOpenHandler = () => {
  modalMap.classList.remove(`hidden`);
}

const onCloseModalMapClick = () => {
  modalMapCloseHandler();
  document.removeEventListener(`keydown`, onModalMapEscPress);
};

const onModalMapEscPress = (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    modalMapCloseHandler();
  }
};

const onMapClick = (evt) => {
  evt.preventDefault();
  modalMapOpenHandler();

  document.addEventListener(`keydown`, onModalMapEscPress);
}

const modalCartCloseHandler = () => {
  modalCart.classList.add(`hidden`);
};

const modalCartOpenHandler = () => {
  modalCart.classList.remove(`hidden`);
}

const onCloseModalCartClick = () => {
  modalCartCloseHandler();
  document.removeEventListener(`keydown`, onModalCartEscPress);
};

const onModalCartEscPress = (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    modalCartCloseHandler();
  }
};

if (contactUs) {
  contactUs.addEventListener(`click`, onContactUsClick);
  modalFeedbackClose.addEventListener(`click`, onCloseModalFeedbackClick);
}

if (map) {
  map.addEventListener(`click`, onMapClick);
  modalMapClose.addEventListener(`click`, onCloseModalMapClick);
}

buyButton.forEach((item) => {
  item.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    modalCartOpenHandler();

    document.addEventListener(`keydown`, onModalCartEscPress);
  });
});

modalCartClose.addEventListener(`click`, onCloseModalCartClick);
