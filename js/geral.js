function start() {
  document.getElementById("audio").play();

  document.querySelector(".opening").style.backgroundSize = "300%";

  btn = document.querySelector(".btn");
  btn.style.animation = "none";
  btn.style.width = "18000px";
  btn.style.height = "18000px";
  btn.classList.add("is-clicked");
  btn.innerHTML = "";

  setTimeout(function () {
    btn.style.visibility = "hidden";
  }, 300);

  setTimeout(function () {
    window.location.href = "#principal";
  }, 3000);
}
