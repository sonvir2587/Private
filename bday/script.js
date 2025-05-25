const flowersContainer = document.querySelector('.flowers');

function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = 5 + Math.random() * 5 + 's';
  flowersContainer.appendChild(flower);
  setTimeout(() => flower.remove(), 10000);
}

setInterval(createFlower, 300);
