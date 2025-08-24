const form = document.getElementById(
  'signup-form'
);

const emailInput = form.querySelector(
  'input[type="email"]'
);
const successMessage =
  document.querySelector(
    '.mobile-success-message'
  );
const closeButton =
  successMessage.querySelector(
    '.btn-close'
  );
const errorMessageText =
  document.querySelector(
    '.visually-hidden'
  );

closeButton.addEventListener(
  'click',
  () => {
    successMessage.classList.add(
      'hidden'
    );
  }
);

form.addEventListener(
  'submit',
  (event) => {
    event.preventDefault();

    const email =
      emailInput.value.trim();

    // Run validation
    const validationResult =
      validateEmail(email);

    if (validationResult === true) {
      // Success
      successMessage.classList.remove(
        'hidden'
      );
    } else {
      //  Invalid (error string returned)
      successMessage.classList.add(
        'hidden'
      );
    }

    // clear the input & error message only on success
    if (validationResult === true) {
      emailInput.value = '';
    }
    if (validationResult === true) {
      errorMessageText.classList.remove(
        'visually-hidden'
      );
    }
  }
);

function validateEmail(email) {
  // Check empty
  if (email === '') {
    errorMessageText.textContent =
      'Email is required.';
    errorMessageText.classList.remove(
      'visually-hidden'
    );
    errorMessageText.style.color =
      'red';
    return 'Email is required';
  }

  // Check format
  const isValidEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isValidEmail.test(email)) {
    errorMessageText.textContent =
      'valid email is required.';
    errorMessageText.style.color =
      'red';

    return 'Invalid email format';
  }

  return true;
}
