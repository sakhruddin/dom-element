const root = document.getElementById('root')
const array = ["html", "css", "js"]
const ul = document.createElement('ul')
for(let i = 0; i < array.length; i++){
  const li = document.createElement('li')
  li.textContent = array[i]
  ul.append(li)
}
root.append(ul);