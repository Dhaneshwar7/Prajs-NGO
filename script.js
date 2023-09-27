const menuBtn = document.querySelector('.menu-btn');
const menuBtnLines = document.querySelectorAll('.menu-btn .line');
// console.log(menuBtn);
// console.log(menuBtnLines);
let clickBtnFlag = 0;
menuBtn.addEventListener('click', () => {
	if (clickBtnFlag === 0) {
		menuBtn.children[0].style.transform = 'rotate(35deg)';
		clickBtnFlag = 1;
	} else {
		menuBtn.children[0].style.transform = 'rotate(0deg)';
		clickBtnFlag = 0;
	}
	// console.log(menuBtn.children[0])
});
