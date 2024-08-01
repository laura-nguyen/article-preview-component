const shareBtn = document.querySelector(".card__share");
const shareContainer = document.querySelector(".card__share-container");
const mobileBtn = document.querySelector(".card__share--mobile");

function toggleVisibility() {
  shareContainer.classList.toggle("visible");
  shareBtn.classList.toggle("active");
}

function hideShareContainer() {
  shareContainer.classList.remove("visible");
  shareBtn.classList.remove("active");
}

shareBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleVisibility();
});

mobileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleVisibility();
});

document.addEventListener("click", (e) => {
  if (!shareContainer.contains(e.target) && !shareBtn.contains(e.target)) {
    hideShareContainer();
  }
});
