const cards = document.querySelectorAll(".d-card");
let isMouseDown = false;

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (rect.height / 2 - y) / 20;
    const rotateY = (x - rect.width / 2) / 20;

    const scale = isMouseDown ? 1.05 : 1.08;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateZ(10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    isMouseDown = false;
  });
});