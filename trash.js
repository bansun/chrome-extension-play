			bubble.onclick = function() {
          //Your code here
          	if (clicked) {
				bubble.style.backgroundColor = "red";
				bubble1.style.visibility = "visible";
          		clicked = false;
          	} else {
				bubble1.style.visibility = "hidden";
          		clicked = true;
          	}
    	}


		bubble.innerHTML = "\
			<h1>1</h1>\
		";

		
		// var bubble1 = document.createElement('BUTTON');
		// bubble1.id = "myBubble1";
		// bubble1.innerHTML = "\
		// 	<h1>2</h1>\
		// ";
		// bubble1.style.cssText = "\
		// 	position:fixed;\
		// 	top:200px;\
		// 	left:50px;\
		// 	width:100px;\
		// 	height:100px;\
		// 	color: white;\
		// 	opacity: 0.5;\
		// 	background:black;\
		// 	border-radius:100px;\
		// 	box-shadow:inset 0 0 5em white;\
		// 	z-index:999999;\
		// ";