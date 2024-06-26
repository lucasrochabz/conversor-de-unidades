const inputElement = document.querySelector('#input');
const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');
const outputElement = document.querySelector('#output');
const convertButton = document.querySelector('#convert-btn');
const messageElement = document.querySelector('#message');

function convert() {

  const fromValue = fromElement.value;
  const toValue = toElement.value;

  if(fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = '';

    return;
  }

  let meters;
  switch(fromValue) {
    case 'km':
      meters = inputElement.value * 1000;
      break;
    case 'm':
      meters = inputElement.value;
      break;
    case 'cm':
      meters = inputElement.value / 100;
      break;
    case 'mm':
      meters = inputElement.value / 1000;
      break;
  }

  let result;
  switch(toValue) {
    case 'km':
      result = meters / 1000;
      break;
    case 'm':
      result = meters;
      break;
    case 'cm':
      result = meters * 100;
      break;
    case 'mm':
      result = meters * 1000;
      break;
  }

  const formattedResult = result.toLocaleString('pt-BR', {maximumFractionDigits: 2, useGrouping: true})

  // outputElement.value = result;
  outputElement.value = formattedResult;

  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;

  const message = `${inputElement.value} ${fromLabel} equivalem a ${formattedResult} ${toLabel}`;
  messageElement.textContent = message;

  return;
}

convertButton.addEventListener('click', convert);


