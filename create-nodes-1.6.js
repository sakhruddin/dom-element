const div = document.createElement('div')
const ul = document.createElement('ul');
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const a1 = document.createElement('a')
const a2 = document.createElement('a')
const root = document.getElementById('root')
a1.textContent = ' наш сайт '
a2.textContent = 'наш инстаграм'
a1.href = 'https://intocode.ru/'
a2.href = 'https://instagram.com'
li1.prepend(a1)
li2.prepend(a2)
ul.prepend(li1)
ul.append(li2)
div.prepend(ul)
root.prepend(div)
console.log(div)