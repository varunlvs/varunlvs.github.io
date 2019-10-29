var $body = document.getElementsByTagName('body')[0];

//	Button assignments - delivery order mail ids
var $d0 = document.getElementById('d0');
var $d1 = document.getElementById('d1');
var $d2 = document.getElementById('d2');
var $d3 = document.getElementById('d3');
var $d4 = document.getElementById('d4');
var $d5 = document.getElementById('d5');

// Info assignments - delivery orders
var d0Info = document.getElementById('d0Info').innerHTML;
var d1Info = document.getElementById('d1Info').innerHTML;
var d2Info = document.getElementById('d2Info').innerHTML;
var d3Info = document.getElementById('d3Info').innerHTML;
var d4Info = document.getElementById('d4Info').innerHTML;
var d5Info = document.getElementById('d5Info').innerHTML;

// Event Calling - DOs
$d0.addEventListener('click', function(ev) {
  copyToClipboard(d0Info);
});
$d1.addEventListener('click', function(ev) {
  copyToClipboard(d1Info);
});
$d2.addEventListener('click', function(ev) {
  copyToClipboard(d2Info);
});
$d3.addEventListener('click', function(ev) {
  copyToClipboard(d3Info);
});
$d4.addEventListener('click', function(ev) {
  copyToClipboard(d4Info);
});
$d5.addEventListener('click', function(ev) {
  copyToClipboard(d5Info);
});

// Copy function using temp input type and copy clipboard action
var copyToClipboard = function(message) {
	var $tempInput = document.createElement('INPUT');
	$body.appendChild($tempInput);
	$tempInput.setAttribute('value', message)
	$tempInput.select();
	document.execCommand('copy');
	$body.removeChild($tempInput);
}