const div5 = document.createElement("div");
const ul5 = document.createElement("ul");
const li5 = document.createElement("li");
const li6 = document.createElement("li")
const instagram = document.createElement("a");
const intocode = document.createElement("a");

instagram.textContent = "наш инстаграмм"
instagram.href = "https://instagram.com/intocode"

intocode.textContent = "наш сайт"
intocode.href = "https://intocode.ru"

div5.append(ul5);
ul5.append(li5, li6);
li5.append(instagram);
li6.append(intocode);
document.body.append(div5)
console.log(div5)
