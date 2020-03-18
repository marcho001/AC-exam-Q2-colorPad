const hexVal = document.querySelector('#hex-value')
const background = document.querySelector('#background')
let red = 'ff'
let green = 'ff'
let blue = 'ff'


function showVal(newVal) {
  let results = newVal.id
  let value = Number(newVal.value).toString(16)

  if(value.length < 2){
    value = '0' + value
  }

  switch(results){
    case 'red':
      red = value
      hexVal.innerText = `#${red}${green}${blue}`
      document.querySelector('#red-results').innerHTML = `<h4>${newVal.value}</h4>`;
      break;
    case 'green':
      green = value
      hexVal.innerText = `#${red}${green}${blue}`
      document.querySelector('#green-results').innerHTML = `<h4>${newVal.value}</h4>`;
      break;
    case 'blue':
      blue = value
      hexVal.innerText = `#${red}${green}${blue}`
      document.querySelector('#blue-results').innerHTML = `<h4>${newVal.value}</h4>`;
  }
  background.style.backgroundColor = `#${red}${green}${blue}` 
}

