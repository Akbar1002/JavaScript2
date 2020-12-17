// Your code goes in here

// document.querySelector('#app').innerText = 'TIP CALCULATOR';

//create header/
const app = document.querySelector('#app');
const header = document.createElement('header');
header.setAttribute('class', 'header');
header.innerText = 'TIP CALCULATOR';

app.appendChild(header);

//create main section

//bill amount part
const bill = document.createElement('h2');
bill.setAttribute('class', 'bill');
const billInput = document.createElement('input');
billInput.setAttribute('class', 'billInput');
bill.innerText = 'How much was your bill?';

app.appendChild(bill);
app.appendChild(billInput);

// service select part
const service = document.createElement('h3');
service.setAttribute('class', 'service');
const serviceSelect = document.createElement('select');
serviceSelect.setAttribute('class', 'serviceSelect');
const option1 = document.createElement('option');
option1.setAttribute('value', 0.1);
option1.innerText = '10% - OK';
const option2 = document.createElement('option');
option2.setAttribute('value', 0.2);
option2.innerText = '20% - GOOD';
const option3 = document.createElement('option');
option3.setAttribute('value', 0.3);
option3.innerText = '30% - EXCELLENT';

service.innerText = 'How was your service?';

serviceSelect.appendChild(option1);
serviceSelect.appendChild(option2);
serviceSelect.appendChild(option3);

app.appendChild(service);
app.appendChild(serviceSelect);

//sharing the bill part

const share = document.createElement('h3');
share.innerText = 'How many people are sharing the bill?';
share.setAttribute('class', 'share');
const container = document.createElement('div');
container.setAttribute('class', 'container');
const peopleInput = document.createElement('input');
peopleInput.setAttribute('class', 'peopleInput');
const people = document.createElement('people');
people.setAttribute('class', 'people');
people.innerText = 'people';

app.appendChild(share);
container.appendChild(peopleInput);
container.appendChild(people);
app.appendChild(container);

// last caculation result part

const calculateBtn = document.createElement('button');
calculateBtn.setAttribute('id', 'btn');
calculateBtn.innerText = 'CALCULATE!';

const tipAmount = document.createElement('tipAmount');
tipAmount.setAttribute('class', 'tip');
tipAmount.innerText = 'TIP AMOUNT';
const resultContainer = document.createElement('num');
resultContainer.setAttribute('class', 'result');
resultContainer.innerText = 'xx';

const each = document.createElement('each');
each.setAttribute('class', 'each');
each.innerText = 'each';

app.appendChild(calculateBtn);
app.appendChild(tipAmount);

app.appendChild(each);

calculateBtn.addEventListener('click', calculation);

function calculation() {
  const billTotal = Number(billInput.value);
  const serviceRate = Number(serviceSelect.value);
  const peopleNum = Number(peopleInput.value);

  tipResult = (billTotal * serviceRate) / peopleNum;
  fixedTipResult = tipResult.toFixed(2);
  resultContainer.innerText = `$ ${fixedTipResult}`;
  app.appendChild(resultContainer);
}
