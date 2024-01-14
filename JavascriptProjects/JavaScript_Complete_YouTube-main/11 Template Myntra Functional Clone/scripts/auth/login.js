const resetOTPTimer = document.querySelector('[data-id="reset-otp-timer"]');
const OTPForm = document.querySelector('[data-id="otp-form"]');

window.addEventListener("load", (e) => {
  OTPTimerStart();
});

function OTPTimerStart() {
  let currentTime = 30;

  if (currentTime < 10) {
    currentTime = "0" + currentTime;
  }

  const resendOTPInterval = setInterval(() => {
    --currentTime;
    resetOTPTimer.textContent = `00: ${currentTime}`;

    if (currentTime <= 0) {
      clearInterval(resendOTPInterval);
    }
  }, 1000);
}

OTPForm.addEventListener("submit", () => {
  console.log("submit");
});
