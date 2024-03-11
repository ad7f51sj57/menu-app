import data from "../data.json" assert { type: "json" };

const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    items.forEach((item) => {
      item.classList.remove("clicked");
    });
    item.classList.add("clicked");

    fetchDataAndShowMenu(e.target.textContent);
  });
});

function createMenuItem(item) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("item-container");

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.name;

  const name = document.createElement("h2");
  name.textContent = item.name;

  const price = document.createElement("p");
  price.classList.add("menu-item-price");
  price.textContent = item.price;

  const description = document.createElement("p");
  description.classList.add("menu-item-description");
  description.textContent = item.description;

  menuItem.appendChild(img);
  menuItem.appendChild(name);
  menuItem.appendChild(price);
  menuItem.appendChild(description);

  return menuItem;
}

function fetchDataAndShowMenu(menuType) {
  const menuContainer = document.getElementById("list-container");
  menuContainer.replaceChildren();

  data.forEach((item) => {
    if (menuType === "ALL" || item.type === menuType) {
      menuContainer.appendChild(createMenuItem(item));
    }
  });
}

fetchDataAndShowMenu("ALL");
