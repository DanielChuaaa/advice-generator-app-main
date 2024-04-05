const apiUrl = "https://api.adviceslip.com/advice";
const adviceText = document.getElementById("adviceText").querySelector("h1");
const adviceId = document.getElementById("adviceId");
const button = document.querySelector(".getAdvice");

button.addEventListener("click", adviceRandom);

function adviceRandom() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      adviceId.textContent = data.slip.id;
      adviceText.textContent = data.slip.advice;
    })
    .catch((error) => {
      adviceText.textContent = error;
    });
}

document.addEventListener("DOMContentLoaded", adviceRandom);
