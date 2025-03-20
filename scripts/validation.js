import { z } from "https://cdn.jsdelivr.net/npm/zod@3.21.4/lib/index.mjs";

// Новая схема валидации
const formSchema = z.object({
    name: z.string()
        .min(2, "Имя должно содержать минимум 2 символа")
        .max(50, "Имя слишком длинное"),
    phone: z.string()
        .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Некорректный формат телефона"),
    email: z.string()
        .email("Некорректный email"),
    message: z.string()
        .min(10, "Сообщение должно содержать минимум 10 символов")
});

// Обновленный обработчик формы
document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    // Валидация
    const result = formSchema.safeParse(formData);

    // Очистка ошибок
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.input-group input, .input-group textarea').forEach(el => 
        el.classList.remove('error'));

    if (!result.success) {
        result.error.issues.forEach(issue => {
            const field = issue.path[0];
            const errorElement = document.getElementById(`${field}Error`);
            const inputElement = document.getElementById(field);
            
            if (errorElement && inputElement) {
                errorElement.textContent = issue.message;
                inputElement.classList.add('error');
            }
        });
    } else {
        console.log('Valid data:', result.data);
        showSuccessModal();
    }
});

// Остальные функции остаются без изменений
function showSuccessModal() {
    const modal = document.getElementById("successModal");
    modal.style.display = "flex";

    document.querySelector('.close').onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
        if (event.target === modal) modal.style.display = "none";
    };
}