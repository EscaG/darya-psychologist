import * as flsGuru from "./modules/functions.js";
import { addClassActive, handlerCloseMenu, removeClassActive } from "./modules/burger.js";
import { headerScrollAnimation } from "./modules/headerScrollAnimation.js";

window.onload = function () {
	flsGuru.isWebp();
	headerScrollAnimation();

	const burger = document.getElementById("burger");


	burger.onclick = () => {
		if (burger.classList.contains('active')) {
			removeClassActive();
		} else {
			addClassActive();
		}
	}

	document.addEventListener('click', handlerCloseMenu);


}




