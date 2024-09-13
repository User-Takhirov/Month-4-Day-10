const box = document.querySelector(".box");
const tab = document.querySelector(".tab");
const btns = document.getElementsByClassName("btns");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const inputBox = document.querySelector(".input_box");
import {
  getTabData,
  getTabContent,
  Create,
  getPosts,
  deleteItem,
} from "./service.js";

const renderTabContent = async (path) => {
  const data = await getTabContent(path);
  box.innerHTML = data.map((item) => `<h1>${item.title}</h1>`).join("");
};

const renderTabHeader = async () => {
  const data = await getTabData();
  tab.innerHTML = data
    .map(
      (item) =>
        `<button class="btns" data-path="${item.path}">${item.name}</button>`
    )
    .join("");
  btns[0].style.color = "red";
  renderTabContent(data[0].path);
};

renderTabHeader();

tab.addEventListener("click", (e) => {
  if (e.target.dataset.path) {
    renderTabContent(e.target.dataset.path);
    for (let i of btns) {
      i.style.color = "";
    }
    e.target.style.color = "red";
  }
});

const renderInput = async () => {
  const data = await getPosts();
  inputBox.innerHTML = data
    .map(
      (item) => `
      <div class="input_text_block">
      <h1 class="title_in">${item.title}</h1>
      <button class="input_inner_del" data-id="${item.id}">Delete</button>
      <button class="input_inner_btn a" data-edit="${item.id}">Edit</button>
      </div>`
    )
    .join("");
};
renderInput();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await Create({ title: input.value });
  input.value = "";

  renderInput();
});

inputBox.addEventListener("click", async (e) => {
  const deleteItemId = e.target.dataset.id;
  if (deleteItemId) {
    await deleteItem(deleteItemId);
  }
  renderInput();
});
