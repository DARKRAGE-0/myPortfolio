const main = document.querySelector('main');
const container = document.querySelector('.container');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const contact = document.querySelector('#contact');
let sellectedPage = 1;
function nav() {
	home.style.borderBottom='none';home.style.color='gray';
	about.style.borderBottom='none';about.style.color='gray';
	work.style.borderBottom='none';work.style.color='gray';
	contact.style.borderBottom='none';contact.style.color='gray';
if (sellectedPage==1){home.style.borderBottom='2px solid #828DF8';home.style.color='black';}
if (sellectedPage==2){about.style.borderBottom='2px solid #828DF8';about.style.color='black';}
if (sellectedPage==3){work.style.borderBottom='2px solid #828DF8';work.style.color='black';}
if (sellectedPage==4){contact.style.borderBottom='2px solid #828DF8';contact.style.color='black';}
}
function navChange(n) {
	sellectedPage= n;
	nav();
	pageChange();
}

function pageChange() {

//	 PAGE # 1
if (sellectedPage==1){
	main.innerHTML="<content><div></div>HTML</content>"+
	"<content class='c2'><div></div>CSS</content>"+
	"<content class='c3'><div></div>JAVASCRIPT</content>";
	container.innerHTML="<img src='images/banner.jpg' class='banner' style='width:100%'>"+
	"<div class='darkner'></div><div>Hi, I'm Anwaar</div>"+
	"<div class='cap'>Frontend Web Developer</div>";
	if(window.innerWidth>500){document.body.style.marginBottom='50px';}
	else{document.body.style.marginBottom='0px';}
}

//	 PAGE # 2
else if (sellectedPage==2){
	main.innerHTML="<content class='about'><div></div>"+
	"Anwaar Ullah Khan<br><samp>PAKISTAN<br><br></samp>"+
	"<samp id='samp2'>Frontend Web Developer<br>No Degree</samp>"+
	"<samp id='samp3'><hr>Anwaar was born in Peshawar, Pakistan.</samp>"+
	"</content>";container.innerHTML="<img src='images/banner.jpg' class='banner' "+ 
	"style='width:100%'><div class='darkner'></div>";
	if(window.innerWidth>500){document.body.style.marginBottom='50px';}
	else{document.body.style.marginBottom='0px';}
}

//	 PAGE # 3
else if (sellectedPage==3){
	main.innerHTML="";
	container.innerHTML="<img src='images/banner.jpg' class='banner' "+
	"style='width:100%'><div class='darkner'></div>";
	container.innerHTML="<img src='images/banner.jpg' class='banner' style='width:100%'>"+
	"<div class='darkner'></div><div>My Work</div>";workScan();
	if(window.innerWidth>500){document.body.style.marginBottom='50px';}
	else{document.body.style.marginBottom='0px';}
}

//	 PAGE # 4
else if (sellectedPage==4){
	main.innerHTML="<content class='email'>E-Mail</content>"+
	"<content class='discord'>Discord</content>"+
	"<content class='insta'>Instagram</content>"+
	"<content class='fiverr'>Fiverr</content>"+
	"<content class='github'>Github</content>";
	container.innerHTML="<img src='images/banner.jpg' class='banner'"+
	" style='width:100%'><div class='darkner'></div><div>Contact Me</div>";
	if(window.innerWidth>500){document.body.style.marginBottom='150px';}
	else{document.body.style.marginBottom='0px';}
}
}


nav();