const ul = document.createElement('ul')
ul.classList.add('list')
const li = document.createElement('li')
li.textContent =' привет мир '
ul.append(li)
console.log(li)
console.log(ul);
// Создай узел тега ul и добавь к нему класс list. Следом создай узел тега li с текстовым контентом 
// "привет, мир". Вложи узел li внутрь узла ul. Выведи в консоль оба получившихся узла.