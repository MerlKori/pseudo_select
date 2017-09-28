window.onload = function () {

var body = document.querySelector('body');
var selBtn = document.querySelector('.pseudo-select__main');
var list = document.querySelector('.pseudo-select__list');
var wrapSelect = document.querySelector('.pseudo-select');
var itemsSelect = document.querySelectorAll('.list__item');
var itemValue;

function hideList(){
	list.classList.remove('pseudo-select__list--active');
	wrapSelect.classList.remove('pseudo-select--active');
}

body.onclick = function () {
	hideList();
}
selBtn.addEventListener( 'click' , function(e) {
	e.stopPropagation();
  list.classList.toggle('pseudo-select__list--active');
  wrapSelect.classList.toggle('pseudo-select--active');
}, false);

  for (var i = 0; i < itemsSelect.length; i++) {
	itemsSelect[i].addEventListener( 'click' , function(e) {
    e.stopPropagation();
    itemValue = this.getAttribute('data-value');
    selBtn.setAttribute( 'value', itemValue);
    hideList();
    
   }, false);

}

} // window