function showVal(newVal) {
  let results = newVal.id
  switch(results){
    case 'red':
      document.querySelector('#red-results').innerHTML = `<h4>${newVal.value}</h4>`;
      break;
    case 'green':
      document.querySelector('#green-results').innerHTML = `<h4>${newVal.value}</h4>`;
      break;
    case 'blue':
      document.querySelector('#blue-results').innerHTML = `<h4>${newVal.value}</h4>`;
  }
}