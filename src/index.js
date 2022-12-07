// import _ from 'lodash';
import './style.css';

// grab items
const todolist = document.querySelector('.to-do-list');

const toDoItems = [
  {
    index: 1,
    description: 'Read the novel',
    completed: false,
  },
  {
    index: 2,
    description: 'Play video game with friends',
    completed: false,
  },
  {
    index: 3,
    description: 'Go for a movie',
    completed: false,
  },
];

const dynamic = () => {
  toDoItems.forEach((list) => {
    todolist.innerHTML += `
        <li class="the-item" id="${list.index}">
            <div class="item-list">
                <input type="checkbox">
                <p class="item">${list.description}</p>
            </div>
        </li>
        `;
  });
};

dynamic();