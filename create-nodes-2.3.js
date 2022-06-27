const root = document.getElementById('root')
const array = [
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
const ul = document.createElement('ul')

function render(arr) {
for(let i = 0; i < arr.length; i++){
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.textContent = arr[i].name
  a.href = arr[i].url
  li.append(a)
  ul.append(li)
}
}
render(array)
root.append(ul);