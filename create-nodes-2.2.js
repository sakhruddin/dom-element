const root = document.getElementById('root')
const array = ["html", "css", "js"]
const ul = document.createElement('ul')
function render(arr) {
for(let i = 0; i < arr.length; i++){
  const li = document.createElement('li')
  li.textContent = arr[i]
  ul.append(li)
}
}
render(array)
root.append(ul);