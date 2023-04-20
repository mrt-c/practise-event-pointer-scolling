document
  .querySelector("#myElement")
  .addEventListener("pointerover", function (event) {
    document.querySelector("#myElement").style.background = "blue";
  });
document
  .querySelector("#myElement")
  .addEventListener("pointerout", function (event) {
    document.querySelector("#myElement").style.background = "yellow";
  });

//2
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

child.addEventListener("pointerdown", function (event) {
  child.style.width = "200px";
  child.style.height = "200px";
  child.style.background = "green";
});

child.addEventListener("pointerup", function (event) {
  child.style.width = "100px";
  child.style.height = "100px";
  child.style.background = "red";
});

//3
let box = document.querySelector("#box");
box.addEventListener("pointerenter", function (event) {
  box.style.background = "red";
  box.innerHTML = "Оно живое! (c) Франкенштейн";
});
box.addEventListener("pointerleave", function (event) {
  box.style.background = "";
  box.innerHTML = "Наведите курсор на меня";
});

//4
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let no = document.querySelector("#child");
document.querySelector("#btnYes").addEventListener("click", function (event) {
  alert("Правильный ответ!");
});
no.addEventListener("pointerenter", function (event) {
  no.style.position = "absolute";
  no.style.top = getRandomInt(300) + 50 + "px";
  no.style.left = getRandomInt(300) + 50 + "px";
});

//5
function changeBackgroundColor(elem, color) {
  let a = elem.style.background;
  elem.addEventListener("pointerenter", function () {
    elem.style.background = color + "";
  });
  elem.addEventListener("pointerleave", function () {
    elem.style.background = a + "";
  });
}

changeBackgroundColor(document.querySelector(".aaa"),"red")
