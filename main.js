// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
function submitForm() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;

    const person = {
        name: name,
        surname: surname,
        age: age
    };

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = ` Ім'я: ${person.name}  Нік: ${person.surname}  Вік: ${person.age} р.`;
}
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1]
let resultNum = localStorage.getItem(`curr`);
document.getElementById(`curr`).innerText = resultNum;
resultNum++;
localStorage.setItem(`curr`, resultNum);
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let currDate = new Date();
let timestamp = currDate.toLocaleString();
let session = JSON.parse(localStorage.getItem(`session`,))  || [];
session.push({ timestamp });
localStorage.setItem(`session`, JSON.stringify(session));
// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

objectArray = [];
for (let i = 0; i < 100; i++) {
    objectArray.push({index: i, value: `Object ${i + 1}`});
}

// Елементи DOM
const objectsList = document.getElementById('objectsList');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Початковий індекс для виведення об'єктів
let currentIndex = 0;

// Функція для виведення об'єктів на сторінку
function displayObjects() {
    objectsList.innerHTML = '';

    // Виведення наступних 10 об'єктів
    for (let i = currentIndex; i < currentIndex + 10 && i < objectsArray.length; i++) {
        const objectElement = document.createElement('div');
        objectElement.textContent = `ID: ${objectsArray[i].id}, Value: ${objectsArray[i].value}`;
        objectsList.appendChild(objectElement);
    }
}

// Обробник події для кнопки "Наступні"
nextButton.addEventListener('click', function() {
    currentIndex += 10;
    displayObjects();
});

// Обробник події для кнопки "Попередні"
prevButton.addEventListener('click', function() {
    currentIndex = Math.max(0, currentIndex - 10);
    displayObjects();
});

// Виведення перших 10 об'єктів при завантаженні сторінки
displayObjects();





//
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається