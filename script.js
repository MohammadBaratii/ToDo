const $ = document;
const plus = $.querySelector(".add__plus");
const input = $.querySelector(".add__input");
const content = $.querySelector(".pending__content");
const clearAll = $.querySelector(".pending__clear");
const counter = content.querySelector("span");
const addedThings = $.querySelector(".added-things");
const clear = $.querySelector(".added-things__clear");
const warning = $.querySelector(".warning");

plus.onclick = () => {
  //making and styling new divs
  if (input.value == "") {
    warning.style.display = "flex";
    input.style.border = "1px #ff1414 solid";
  } else {
    warning.style.display = "none";
    input.style.border = "1px #bbb solid";

    const makedDiv = $.createElement("div");
    const trashDiv = $.createElement("div");
    const trashIcon = $.createElement("i");
    const checkDiv = $.createElement("div");
    const checkIcon = $.createElement("i");

    makedDiv.classList.add("added-things__main");
    makedDiv.innerHTML = input.value;
    trashDiv.classList.add("added-things__clear");
    trashIcon.setAttribute("class", "fas fa-trash");
    checkDiv.classList.add("added-things__check");
    checkIcon.setAttribute("class", "fas fa-check");

    addedThings.appendChild(makedDiv);
    makedDiv.appendChild(trashDiv);
    makedDiv.appendChild(checkDiv);
    trashDiv.appendChild(trashIcon);
    checkDiv.appendChild(checkIcon);
    input.value = "";

    //click on trash box and delete parent
    trashDiv.onclick = () => {
      trashDiv.parentElement.remove();
      counter.innerHTML = addedThings.children.length;
      warning.style.display = "none";
      input.style.border = "1px #bbb solid";
    };
    //click on check box and add actice class
    checkDiv.onclick = () => {
      checkDiv.classList.toggle("active");
    };
  }
  //counter
  counter.innerHTML = addedThings.children.length;
};

//making enter keyboard to do the same thing as plus button
window.onkeyup = (event) => {
  if (event.keyCode === 13) {
    plus.onclick();
  }
};

//clear all btn
clearAll.onclick = () => {
  addedThings.querySelectorAll(".added-things__main").forEach((item) => {
    item.remove();
  });
  counter.innerHTML = addedThings.children.length;
  warning.style.display = "none";
  input.style.border = "1px #bbb solid";
};
