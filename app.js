(function () {
  const form = document.getElementById("checkout-form");
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phone-error");
  const modal = document.getElementById("confirm-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalOkBtn = document.getElementById("modal-ok-btn");
  const loadDiscountBtn = document.getElementById("load-discount-btn");

  function isPhoneValid(value) {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10;
  }

  function showPhoneError() {
    phoneError.hidden = false;
  }

  function hidePhoneError() {
    phoneError.hidden = true;
  }

  function openModal() {
    modal.hidden = false;
  }

  function closeModal() {
    modal.hidden = true;
  }

  phoneInput.addEventListener("blur", function () {
    if (phoneInput.value.trim() && !isPhoneValid(phoneInput.value)) {
      showPhoneError();
    } else if (!phoneInput.value.trim()) {
      hidePhoneError();
    } else {
      hidePhoneError();
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!isPhoneValid(phoneInput.value)) {
      showPhoneError();
      return;
    }

    hidePhoneError();
    openModal();
  });

  modalCloseBtn.addEventListener("click", closeModal);
  modalOkBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  loadDiscountBtn.addEventListener("click", function () {
    const promo = null;
    console.log(promo.code);
  });
})();
