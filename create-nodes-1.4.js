const ul = document.createElement("ul");
const li = document.createElement("li");

ul.classList.add('list');
li.textContent = "Привет, мир";
console.log(ul);
console.log(li)

ul.append(li)