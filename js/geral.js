function start() {
  document.getElementById("audio").play();

  document.querySelector(".opening").style.backgroundSize = "300%";

  btn = document.querySelector(".btn");
  btn.classList.add("is-clicked");
  btn.innerHTML = "";

  setTimeout(function () {
    btn.style.visibility = "hidden";
  }, 300);

  setTimeout(function () {
    window.location.href = "#pey";
  }, 3000);
}
