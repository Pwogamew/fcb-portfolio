let introf = document.getElementById('intro');
let namef = document.getElementById('name');
let myButtonf = document.getElementById('myButton');
let imgf = document.getElementById('mouthimage');
let spannamef = document.getElementById('spannamef');
document.getElementById('myButton').onclick = function(){
	myButtonf.classList.toggle('fade');
	introf.classList.toggle('fade');
	spannamef.classList.toggle('fade');
	namef.classList.toggle('up');
	setTimeout(function () {
	imgf.src = 'images/mouthopen.png';

	}, 2000);
}

namef.addEventListener('keyup', (e) => {
	if(e.keyCode === 13){
		namef.blur();
		myButton.onclick();
	}
})

namef.setAttribute("autocomplete", "off");