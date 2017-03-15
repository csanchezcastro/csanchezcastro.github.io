$('#mycarousel').carousel({
	interval: 15000
});

var spreadsheetID = '1VhzZaWAi_BExbA6j7NZLP3cZquRO4-IQ4-S3e0ROtzI',
spreadsheetTAB = 1,
spreadsheetURL = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/' + spreadsheetTAB + '/public/values';

var datos;
// Pedimos un recurso por AJAX usando JSON
$.getJSON( spreadsheetURL + '?alt=json', function( data ) {
	console.log(data);
});

var p = document.getElementById('copyright');
	p.innerHTML = "&copy; 2017 Carlos Sánchez-Castro Coy";
	p.style = 'color: #0275d8';
  console.log('p = ', p.getAttribute('style'), p.innerHTML);


/*var shiftWindow = function() { scrollBy(0, -70); };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);*/
