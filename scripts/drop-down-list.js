document.querySelectorAll('.faq-question').forEach((el) => {
	el.addEventListener('click', () => {
		 let item = el.closest('.faq-item');
		 let content = item.querySelector('.faq-answer');
		 let icon = el.querySelector('.faq-icon');

		 if (item.classList.contains('open')) {
			  // Закрываем элемент
			  item.classList.remove('open');
			  icon.querySelectorAll('.cross-path').forEach((path) => {
					path.classList.remove('rotated');
			  });
		 } else {
			  // Закрываем все открытые элементы
			  document.querySelectorAll('.faq-item').forEach((faqItem) => {
					faqItem.classList.remove('open');
			  });
			  document.querySelectorAll('.cross-path').forEach((path) => {
					path.classList.remove('rotated');
			  });

			  // Открываем текущий элемент
			  item.classList.add('open');
			  icon.querySelectorAll('.cross-path').forEach((path) => {
					path.classList.add('rotated');
			  });
		 }
	});
});