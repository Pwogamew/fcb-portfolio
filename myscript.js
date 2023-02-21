let introf = document.getElementById('intro');
let namef = document.getElementById('name');
let myButtonf = document.getElementById('myButton');
let imgf = document.getElementById('mouthimage');
let spannamef = document.getElementById('spannamef');
let rPhrase = Math.floor(Math.random() * 12) + 1;

namef.setAttribute("autocomplete", "off");
spannamef.innerHTML = namef.innerHTML;

if(rPhrase == 1){
		introf.innerHTML = "If you were given a chance to live another life on a different world... Will you live your life the same way?"
	}else if(rPhrase == 2){
		introf.innerHTML = "Mistakes? I will always have one. Regrets? I will always have none!"
	}else if(rPhrase == 3){
		introf.innerHTML = "The whole humanity is behind my back. It comes with its good and bad. Still, I decide to move forward."
	}else if(rPhrase == 4){
		introf.innerHTML = "The past is what's through and what should lie beyond is the future."
	}else if(rPhrase == 5){
		introf.innerHTML = "Well, I know it can never erase my fear. But atleast I get to drink beer."
	}else if(rPhrase == 6){
		introf.innerHTML = "Worrying about tomorrow is like living your present with sorrow."
	}else if(rPhrase == 7){
		introf.innerHTML = "So you decided to be a pushover? Then let this sink into you brother, 'Life has no do over.'"
	}else if(rPhrase == 8){
		introf.innerHTML = "It is unreasonable to reason out that 'you miss her', mister. Because your own future will be miserable if you live your life as a miser."
	}else if(rPhrase == 9){
		introf.innerHTML = "I was once told that there's balance in all things. Since my past is all composed of darkness, then I expect that my future to be full of brightness."
	}else if(rPhrase ==10){
		introf.innerHTML = "That's why our eyes are designed to look what's ahead, so that you should never look back."
	}else if(rPhrase ==11){
		introf.innerHTML = "Who cares about what you have once said? I believe what matters the most now would be your new judgement. That's why there is a craft called character development."
	}else{
		introf.innerHTML = "Time is the reason that many people still have hope. How ironic that for some people it's actually a reason to despair."
	}

document.getElementById('myButton').onclick = function(){
	let value = namef.value.trim();
	if(value.length == 0){
		spannamef.classList.toggle('nochar');
		namef.classList.toggle('nochar');
	}else{

	myButtonf.classList.toggle('fade');
	introf.classList.toggle('fade');
	namef.classList.toggle('up');
	spannamef.classList.toggle('fade');
	setTimeout(function () {
	imgf.src = 'images/mouthopen.png';

	}, 2000);
	}
}

namef.addEventListener('keyup', (e) => {
	if(e.keyCode === 13){
		namef.blur();
		myButton.onclick();
	}
})
