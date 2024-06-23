import * as flsGuru from "./modules/functions.js";
import { addClassActive, handlerCloseMenu, removeClassActive } from "./modules/burger.js";
import { headerScrollAnimation } from "./modules/headerScrollAnimation.js";
import { readMore, resizeReadMore } from "./modules/readMore.js";

"use strict";

window.onload = function () {
	flsGuru.isWebp();
	headerScrollAnimation();

	// document.documentElement.scrollTo({
	// 	top: 0,
	// 	behavior: "smooth"
	// });

	const burger = document.getElementById("burger");

	document.addEventListener('click', handlerCloseMenu);

	burger.onclick = () => {
		if (burger.classList.contains('active')) {
			removeClassActive();
		} else {
			addClassActive();
		}
	}

	readMore();

	window.addEventListener('resize', (e) => {
		resizeReadMore(e.currentTarget.innerWidth);
	});

}




