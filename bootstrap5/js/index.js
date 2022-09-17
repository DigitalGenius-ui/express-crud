const btn = document.querySelector("[data-btn]");
const counter = document.querySelector("[data-counter]");

let i = 0;
btn.addEventListener("click", () => {
    counter.textContent = i++;
});