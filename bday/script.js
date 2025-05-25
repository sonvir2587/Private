const background = document.querySelector(".background");
const emojis = ["🌸", "🌼", "💐", "🌺", "🌻", "🌷"];

function createFlower() {
  const flower = document.createElement("span");
  flower.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 3 + Math.random() * 5 + "s";
  flower.style.opacity = Math.random();
  flower.style.fontSize = Math.random() * 20 + 20 + "px";
  background.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 8000);
}

setInterval(createFlower, 250);
