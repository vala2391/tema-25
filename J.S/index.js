const toDoList = localStorage.getItem('myToDo') ? JSON.parse(localStorage.getItem('myToDo')) : [];

const addToDoForm = document.getElementById('addToDo');
const incompleteToDo = document.getElementById('incompleteToDo');
const completedToDo = document.getElementById('completedToDo');
const toDoTitleField = document.getElementById('toDoTitle');
const toDoDescriptionField = document.getElementById('toDoDescription');

const addListItem = (item) => {
  const listItem = document.createElement('div');
  listItem.classList.add('toDoWrapper');

  const listCheck = document.createElement('input');
  listCheck.setAttribute('type', 'checkbox');

  const titleElement = document.createElement('div');
  titleElement.innerText = item.title;

  const descriptionElement = document.createElement('div');
  descriptionElement.classList.add('toDoDescription');
  descriptionElement.innerText = item.description; 

  listItem.appendChild(listCheck);
  listItem.appendChild(titleElement);
  listItem.appendChild(descriptionElement);

  listCheck.addEventListener('change', () => {
    if (listCheck.checked) {
      completedToDo.appendChild(listItem);
    } else {
      incompleteToDo.appendChild(listItem);
    }
  });

  incompleteToDo.appendChild(listItem);
}

toDoList.forEach((item) => {
  addListItem(item);
});

addToDoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const toDo = Object.fromEntries(data.entries());
  toDoList.push(toDo);

  addListItem(toDo);

  
  toDoTitleField.value = '';
  toDoDescriptionField.value = '';

  localStorage.setItem('myToDo', JSON.stringify(toDoList));
});
