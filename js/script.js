const main = document.querySelector('main');
const container = document.querySelector('.container');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
let sellectedPage = 1;
function nav() {
	home.style.borderBottom='none';home.style.color='gray';
	about.style.borderBottom='none';about.style.color='gray';
	work.style.borderBottom='none';work.style.color='gray';
if (sellectedPage==1){home.style.borderBottom='2px solid #828DF8';home.style.color='black';}
if (sellectedPage==2){about.style.borderBottom='2px solid #828DF8';about.style.color='black';}
if (sellectedPage==3){work.style.borderBottom='2px solid #828DF8';work.style.color='black';}
}
function navChange(n) {
	sellectedPage= n;
	nav();
	pageChange();
}

function pageChange() {
	if (sellectedPage==1){main.innerHTML="<content><div></div>HTML</content><content class='c2'><div></div>CSS</content><content class='c3'><div></div>JAVASCRIPT</content>";container.innerHTML="<img src='images/banner.jpg' class='banner' style='width:100%'><div class='darkner'></div><div>Hi, I'm Anwaar</div><div class='cap'>Frontend Web Developer</div>";}
	else if (sellectedPage==2){main.innerHTML="<content class='about'><div></div>Anwaar Ullah Khan<br><samp>PAKISTAN<br><br></samp><samp id='samp2'>Frontend Web Developer<br>No Degree</samp></content>";container.innerHTML="<img src='images/banner.jpg' class='banner' style='width:100%'><div class='darkner'></div>";}
}


nav();