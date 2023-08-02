const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

 const ulElement = document.getElementById("ingredients");

    // Проходимо по масиву ingredients і додаємо кожен елемент до списку
    ingredients.forEach((ingredient) => {
      // Створюємо елемент <li>
      const liElement = document.createElement("li");

      // Встановлюємо текстовий вміст для <li> зі значенням інгредієнта
      liElement.textContent = ingredient;

      // Додаємо клас "item" до елементу <li>
      liElement.classList.add("item");

      
    });
    
    // Додаємо елемент <li> до списку <ul>
      ulElement.appendChild(liElement);