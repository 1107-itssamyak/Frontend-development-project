const navbarbtn = document.querySelector("#navbar-btn");
const leftbutton1 = document.querySelectorAll("#left1");
const rightbutton1 = document.querySelectorAll("#right1");
const icontain1 = document.querySelector("#imgs1");

const leftbutton2 = document.querySelectorAll("#left2");
const rightbutton2 = document.querySelectorAll("#right2");
const icontain2 = document.querySelector("#imgs2");

// setting intervals for moving the images here using setInterval
// let interval = setInterval(run, 6000);

let cnt = 1;
let cnt2 = 4;
let num1 = 1;

navbarbtn.addEventListener("click", () => {
	if (num1 === 1) {
		navbarbtn.innerHTML = `<i class="fas fa-times"></i>`;
		num1 = 0;
	} else {
		navbarbtn.innerHTML = `<i class="fas fa-bars"></i>`;
		num1 = 1;
	}
});

function run() {
	cnt++;
	changeImage();
	cnt2++;
	changeImage2();
}

function changeImage() {
	if (cnt < 1) cnt = 3;
	else if (cnt > 3) cnt = 1;

	remover(cnt);
}

function remover(cnt) {
	icontain1.classList.remove("carousel1");
	icontain1.classList.remove("carousel2");
	icontain1.classList.remove("carousel3");

	icontain1.classList.add(`carousel${cnt}`);
}

//* adding onclick eventlisteners
leftbutton1.forEach((btn) => {
	btn.addEventListener("click", () => {
		cnt--;
		if (cnt < 1) cnt = 3;

		remover(cnt);
	});
});

rightbutton1.forEach((btn) => {
	btn.addEventListener("click", () => {
		cnt++;
		if (cnt > 3) cnt = 1;

		remover(cnt);
	});
});

//? second carousel functions
function changeImage2() {
	if (cnt2 < 4) cnt2 = 2;
	else if (cnt2 > 5) cnt2 = 4;

	remover2(cnt2);
}

function remover2(cnt2) {
	icontain2.classList.remove("carousel4");
	icontain2.classList.remove("carousel5");

	icontain2.classList.add(`carousel${cnt2}`);
}

leftbutton2.forEach((btn) => {
	btn.addEventListener("click", () => {
		cnt2--;
		if (cnt2 < 4) cnt2 = 5;

		remover2(cnt2);
	});
});

rightbutton2.forEach((btn) => {
	btn.addEventListener("click", () => {
		cnt2++;
		if (cnt2 > 5) cnt2 = 4;

		remover2(cnt2);
	});
});
