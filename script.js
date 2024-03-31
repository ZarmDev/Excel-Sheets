const sheets = document.getElementById('sheets');

const siteDocument = document.getElementsByTagName('body')[0];

const popup = document.getElementById('popup');
const buttons = document.getElementById('buttons');
const toolresult = document.getElementById('toolresult');
const item = document.getElementById('item');
// const sheets = document.getElementById('sheets');


/* Popup */

const myStuff = prompt('Enter \'columns, rows\' NOTE: 5,20 is recommended on computer, refer to documentation.');

if (myStuff !== '' || myStuff.includes(',') === true) {
  const myStuffArr = myStuff.split(',');
  
  console.log(myStuffArr);
  
  window.amountOfColumns = myStuffArr[0];
  
  window.amountOfRows = myStuffArr[1];

} else {
  window.amountOfColumns = 5;
  
  window.amountOfRows = 20;
}

/* Functions */
const itemVisible = document.getElementById('itemVisible');

function changeItem(test) {
  itemVisible.value = test.slice(test.indexOf('t') + 1, test.length);
}
function exportCreatePopup(test2) {
  console.log(test2);
}
function showFile() {
  toolresult.innerHTML = '';
  const exportTo = document.createElement('select');
  const optionFor = document.createElement('option');
  optionFor.value = 'HTML Table';
  optionFor.innerHTML = 'HTML Table';
  const optionFor2 = document.createElement('option');
  optionFor2.value = 'Excel File';
  optionFor2.innerHTML = 'Excel File';
  exportTo.onchange = function () {
    if (exportTo.value === 'HTML Table') {
      exportCreatePopup('HTML Table')
    } else {
      exportCreatePopup('Excel File')
    }
  }
  toolresult.appendChild(exportTo)
  exportTo.appendChild(optionFor)
  exportTo.appendChild(optionFor2)
}
function showProperties() {
  toolresult.innerHTML = '';
  const forButton = document.createElement('select');
  forButton.onchange = function () {
    document.getElementById('myNewElement' + itemVisible.value).style.fontFamily = '"Times New Roman", Times, serif';
  }
  document.getElementById('toolresult').appendChild(forButton)
  const option = document.createElement('option');
  option.value = 'Arial';
    option.innerHTML = 'Arial';
  forButton.appendChild(option)
  const option2 = document.createElement('option');
  option2.value = 'Times New Roman';
    option2.innerHTML = 'Times New Roman';
  forButton.appendChild(option2)
}

var counter = 0;

for (var x = 0; x < window.amountOfRows; x++) {
  for (var i = 0; i < window.amountOfColumns; i++) {
    const myNewElement = document.createElement('input');
    myNewElement.width = siteDocument
    myNewElement.style.fontSize = '2vh';
    counter++
    myNewElement.setAttribute('id', 'myNewElement' + counter)
    console.log(myNewElement.id);
    myNewElement.addEventListener("focus", function doFunctionStuff() {
      changeItem(myNewElement.id)
    }); 
    sheets.appendChild(myNewElement)
    document.getElementById("sheets").style.gridTemplateColumns = "repeat(" + window.amountOfColumns +", 1fr)";
  }
}
 var inputs = document.getElementsByTagName("input");
 for (var z = 0; z < inputs.length; z++) {
   inputs[z].style.height = "calc((50vh/" +window.amountOfRows +") - 3px)";
   //inputs[z].style.maxHeight = "calc((80vh/20) - 100px)";
}

/* Fix Issues OR Bugs */
const submitFormula = document.getElementById('submitFormula');

submitFormula.style.fontSize = '1vw';

submitFormula.style.width = '8em';
submitFormula.style.height = '1.5em';

/* Stuff Extra */
/* 

/*  /* Download Excel File

var A = [['n','sqrt(n)']];

for(var j=1; j<10; ++j){ 
    A.push([j, Math.sqrt(j)]);
}

var csvRows = [];

for(var i=0, l=A.length; i<l; ++i){
    csvRows.push(A[i].join(','));
}

var csvString = csvRows.join("%0A");
var a         = document.createElement('a');
a.href        = 'data:attachment/csv,' +  encodeURIComponent(csvString);
a.target      = '_blank';
a.download    = 'myFile.csv';

document.body.appendChild(a);
a.click();

*/
