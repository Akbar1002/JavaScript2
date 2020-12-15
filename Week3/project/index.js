// Your code goes in here

// document.querySelector('#app').innerText = 'TIP CALCULATOR';

//create header/
const app = document.querySelector('#app');
const header = document.createElement('header');
header.setAttribute('class', 'header');
header.innerText = 'TIP CALCULATOR';

app.appendChild(header);

//create main section
//first part
const bill = document.createElement('h2');
bill.setAttribute('class', 'bill');
const billInput = document.createElement('input');
billInput.setAttribute('class', 'billInput');
bill.innerText = 'how much was your bill?';

app.appendChild(bill);
app.appendChild(billInput);

// second part
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

//third part
