const arr = ["html", "css", "js"]
const ul = document.createElement("ul");

const render = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li")
        li.append(arr[i]);
        ul.append(li)
    }
    document.body.append(ul);
    return ul
};


const newArr = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]


  const renderNewArr = (newArr) => {
      for (let i = 0; i < newArr.length; i++) {
          const li = document.createElement("li");
          const a = document.createElement("a");
          const ul = document.createElement("ul");
          
          a.textContent = newArr[i].name;
          a.href = newArr[i].url;

          li.append(a);
          ul.append(li);
      };
      document.body.append(ul);
      return ul
  }
