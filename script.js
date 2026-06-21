const music = document.getElementById("bgMusic");
const openBtn = document.getElementById("openBtn");

if (music) {
  music.volume = 0.35;

  window.addEventListener("load", () => {
    music.play().catch(() => {
      console.log("Autoplay blocked. Music will start after first click.");
    });
  });

  document.body.addEventListener("click", () => {
    music.play();
  }, { once: true });
}

if (openBtn) {
  openBtn.addEventListener("click", () => {
    if (music) {
      music.play();
    }

    window.location.href = "page2.html";
  });
}