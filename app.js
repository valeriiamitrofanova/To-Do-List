const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

//TEMPLATE
const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

  list.innerHTML += html;
};

//TEMPLATE

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //to get rid of extra spaces
  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    //to make the form to reset after i submit info
    addForm.reset();
  }
});

//delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//filter
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};
//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});

// Reset form

// document.addForm.reset();
