const submitBtn = document.getElementsByClassName("button")[0];
const emailInput = document.getElementsByClassName("email-input")[0];
const error = document.getElementsByClassName("not-valid")[0];
const box = document.getElementsByClassName("box")[0];

submitBtn.addEventListener("click", () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValid = emailPattern.test(emailInput.value);

  if (!isValid) {
    error.style.display = "block";
  } else {
    error.style.display = "none"; // Hide the error message if email is valid
    box.style.display = "none";

    // Create and show the message
    const message = document.createElement("div");
    message.className = "message";
    message.innerHTML = `
      <div class="message-content">
        <img src="./assets/images/icon-success.svg" alt="">
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to ${emailInput.value}. Please open
          it and click the button inside to confirm your subscription.
        </p>
        <h2 class="closeBtn">Dismiss message</h2>
      </div>`;

    // Append the message to the body
    document.body.appendChild(message);

    // Select the close button from the newly created message element
    const closeBtn = message.querySelector(".closeBtn");
    closeBtn.addEventListener("click", () => {
      message.remove();
      location.reload(); // Reload the website
    });
  }
});
