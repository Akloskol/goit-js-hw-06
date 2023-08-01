const nameInput = document.getElementById("name-input");
    const nameOutput = document.getElementById("name-output");

    // Додаємо обробник події input до інпуту
    nameInput.addEventListener("input", () => {
      // Отримуємо поточне значення інпуту
      const name = nameInput.value.trim();

      // Встановлюємо текстовий вміст для спана з відповідним значенням
      nameOutput.textContent = name === "" ? "Anonymous" : name;
    });