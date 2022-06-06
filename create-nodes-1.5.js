const div0 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div0.classList.add("red")
div2.classList.add("green")
div3.classList.add("blue")

div3.textContent = "Я вложен"

div2.append(div3);
div0.append(div2);

console.log(div0);

