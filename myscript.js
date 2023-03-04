// Webpage Element detectors
let introf = document.getElementById('intro');
let namef = document.getElementById('name');
let myButtonf = document.getElementById('myButton');
let imgf = document.getElementById('mouthimage');
let spannamef = document.getElementById('spannamef');
let badif = document.getElementById('badid');
// Randomizer intro
let rPhrase = Math.floor(Math.random() * 15) + 1;

// Autocomplete remover //
namef.setAttribute("autocomplete", "off");
// Placeholder Illusion
spannamef.innerHTML = namef.innerHTML;
// Alphabet characters and space only
function a(event){
	var char = event.which;
	if(char >31 && char!= 32 && (char<65 || char>90) && (char < 97 || char >122)) {
		return false;
	}else{
		var badwords = /(Fuck|Shit|Admin|Mod|Stupid|Fck|Sht|Ass|Bitch|Btch|Porn|Puss|Damn|Gigolo|Slut|Tit|Cunt|Bull|Bool|Head|Master)/gi;
		var clean = namef.value.replace(badwords, "");
		namef.value = clean;
	}
}
// Copy Pasta Disabler //
namef.addEventListener('paste',e=>e.preventDefault())

if(typeof document.onselectstart!="undefined"){
	document.onselectstart=new Function ("return false");
}else{
	document.onmousedown=new Function ("return false");
	document.onmouseup=new Function ("return false");
}

// List of Intro //
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
		introf.innerHTML = "It is unreasonable to reason out that 'you miss her', mister. Because your future will be miserable if you live your life as a miser."
	}else if(rPhrase == 9){
		introf.innerHTML = "I was once told that there's balance in all things. Since my past is all composed of darkness, then I expect that my future to be full of brightness."
	}else if(rPhrase ==10){
		introf.innerHTML = "That's why our eyes are designed to look what's ahead, so that you should never look back."
	}else if(rPhrase ==11){
		introf.innerHTML = "Who cares about what you have once said? What matters the most now would be your new judgement. That's why there is a craft called character development."
	}else if(rPhrase ==12){
		introf.innerHTML = "Time is the reason that many people still have hope. How ironic that for some people it's actually a reason to despair."
	}else if(rPhrase ==13){
		introf.innerHTML = "Accept the past. Learn from it. So that you may trust the present and build a future."
	}else if(rPhrase ==14){
		introf.innerHTML = "The hardest skill to master is patience. Because knowing the right timing can only be learned through experience."
	}else{
		introf.innerHTML = "Past? Learn from it through your mind. Present? Live it with all your heart. Future? Who cares? Leave it for the next generation."
	}
// Redirect to next page function
	function Redirect(){
		window.location = "dashboard/dashboard/dashboard.html"
	}
// Make Button disappear function.
	function disappear(){
		myButtonf.style.display = "none";
	}
	
	function titleCase(str) {
	var arr = str.toLowerCase().split(" ");
	var result = arr.map(function(val){
			return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
		});
	return result.join(" ");
}

// Button or Enter key function
document.getElementById('myButton').onclick = function(){
	//Trimming out whitespaces.
	a(event);
	let value = titleCase(namef.value.trim());
	console.log(value);
	//Checking if the input field is blank.
	if(value.length == 0){
		spannamef.classList.toggle('nochar');
		namef.classList.toggle('nochar');
	}else{
	//Calls myButton function disappear.
	disappear();
	//Clears data. Uppercase first letter of every word and lowercase others.
	namef.value = value;
	myButtonf.classList.toggle('fade');
	introf.classList.toggle('fade');
	namef.classList.toggle('up');
	spannamef.classList.toggle('fade');
	setTimeout(function () {
	imgf.src = 'images/mouthopen.png';
	Redirect();
	}, 2000);
	}
}
//Enter is presed. To call the click button function
namef.addEventListener('keyup', (e) => {
	if(e.keyCode === 13){
		namef.blur();
		myButton.onclick();
	}
})
