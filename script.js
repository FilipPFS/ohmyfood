window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".layout").style.display = "flex";
  }, 3000);
});
