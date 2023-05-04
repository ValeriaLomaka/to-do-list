const input = document.querySelector('#myInput');
const btn = document.querySelector('.addBtn');
const toDoArea = document.querySelector('#myUL');
const LOCAL_STORAGE_KEY = 'to-do';

const toDoTasksLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
console.log(toDoTasksLocalStorage);

btn.addEventListener('click', onBtnClick);

createListToDoFromLS();

function onBtnClick() {
 
    const inputValue = input.value;
    input.value = '';
    const li = `<li>${inputValue}</li>`;
    toDoArea.insertAdjacentHTML('beforeend',li);
    saveToLocalStorage(li);
}

function createListToDoFromLS() {
    const markup = toDoTasksLocalStorage.join('');
    toDoArea.innerHTML = markup;
}

function saveToLocalStorage(value) {
    toDoTasksLocalStorage.push(value);
    console.log(toDoTasksLocalStorage);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDoTasksLocalStorage)
    );
}

