const card = document.querySelectorAll(".d-card");
let isMouseDown = false; // Флаг для отслеживания состояния нажатия кнопки мыши

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; // Положение курсора внутри карточки по X
  const y = e.clientY - rect.top; // Положение курсора внутри карточки по Y

  // Настраиваем наклон карточки так, чтобы она всегда "убегала" от курсора
  const rotateX = (rect.height / 2 - y) / 20; // Делим на 10 для большего наклона
  const rotateY = (x - rect.width / 2) / 20; // Делим на 10 для большего наклона

  // Если мышь нажата, добавляем scale(0.95), иначе scale(1.1)
  const scale = isMouseDown ? 1.05 : 1.08;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateZ(10px)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  isMouseDown = false; // Сбрасываем флаг при уходе курсора с карточки
});