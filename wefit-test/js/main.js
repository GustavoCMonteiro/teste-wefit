const newMenu = () => {
  const menu = document.querySelector(".btn-group-vertical");

  menu.classList.remove("btn-group-vertical");
  menu.classList.add("btn-group-horizontal");
};

newMenu();

const newHeader = () => {
  const container = document.querySelector(".jumbotron");
  container.style.backgroundColor = "#6b757e";
  container.style.color = "#fff";
  container.style.textAlign = "end";

  const button = container.querySelector("a");
  button.style.backgroundColor = "#27a844";
  button.style.border = "#27a844";

  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#15862e";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#27a844";
  });

  button.addEventListener("focus", () => {
    button.style.boxShadow = "0 0 0 0.2rem rgba(39, 168, 68, .5)";
  });

  button.addEventListener("blur", () => {
    button.style.boxShadow = "none";
  });
};

newHeader();

const newCards = () => {
  const cards = document.querySelectorAll(".card");

  cards[0].parentElement.style.order = "2";
  cards[1].parentElement.style.order = "4";
  cards[2].parentElement.style.order = "3";
  cards[3].parentElement.style.order = "1";

  const animaisButton = cards[0].querySelector("a");
  animaisButton.style.backgroundColor = "#27a844";
  animaisButton.style.border = "#27a844";

  animaisButton.addEventListener("mouseover", () => {
    animaisButton.style.backgroundColor = "#15862e";
  });

  animaisButton.addEventListener("mouseout", () => {
    animaisButton.style.backgroundColor = "#27a844";
  });

  animaisButton.addEventListener("focus", () => {
    animaisButton.style.boxShadow = "0 0 0 0.2rem rgba(39, 168, 68, .5)";
  });

  animaisButton.addEventListener("blur", () => {
    animaisButton.style.boxShadow = "none";
  });
};

newCards();

const newList = () => {
  const list = document.querySelector(".list-group");
  list.firstElementChild.classList.remove("active");

  const newItem1 = document.createElement("li");
  const newItem2 = document.createElement("li");

  newItem1.textContent = "Quarto item";
  newItem2.textContent = "Quinto item";

  newItem1.classList.add("list-group-item", "active");
  newItem2.classList.add("list-group-item");

  list.appendChild(newItem1);
  list.appendChild(newItem2);
};

newList();
