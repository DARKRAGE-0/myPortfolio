let works = [
	['Portfolio','This Portfolio was made for a Graphic Designer. <a href="https://anwaar.netlify.app" target="blank">Visit.</a> <small>16/05/2021</small>'],
];

function workScan() {
	for (var i = 0; i < works.length; i++) {
		console.log(works[i]);

    let newWork = document.createElement('content');
    newWork.classList.add('work');
    newWork.innerHTML = '<h3>'+works[i][0]+'</h3>'+works[i][1]+'<div class="work1"></div>';
    document.querySelector('main').appendChild(newWork);

	}
}

