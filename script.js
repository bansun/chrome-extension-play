/*Handle requests from background.html*/
function handleRequest(
	//The object data with the request params
	request, 
	//These last two ones isn't important for this example, if you want know more about it visit: http://code.google.com/chrome/extensions/messaging.html
	sender, sendResponse
	) {
	if (request.callFunction == "toggleSidebar")
		toggleSidebar();
}
chrome.extension.onRequest.addListener(handleRequest);

/*Small function wich create a sidebar(just to illustrate my point)*/
var sidebarOpen = false;
var pfx = ["webkit", "moz", "MS", "o", ""];
var clicked = false;

function toggleSidebar() {
	if(sidebarOpen) {
		// hide it
		// var btn = document.getElementById("mybtn");  
		// btn.parentNode.removeChild(btn);
		sidebarOpen = false;
		var el = document.getElementById('link');
		el.parentNode.removeChild(el);
		var el1 = document.getElementById('mySidebar1');
		el1.parentNode.removeChild(el1);
		
		
	} else {
		var image = document.createElement("img");
		image.src = chrome.extension.getURL("bear.gif");
		document.getElementsByTagName("body")[0].appendChild(image);
			sidebar.onclick = function() {
          //Your code here
          	if (clicked) {
				// sidebar.style.backgroundColor = "red";
				sidebar1.style.visibility = "visible";
          		clicked = false;
          	} else {
				sidebar1.style.visibility = "hidden";
          		clicked = true;
          	}
    	}
		sidebar.id = "mySidebar";
		sidebar.innerHTML = "\
			<h1>1</h1>\
		";
		sidebar.style.cssText = "\
			position:fixed;\
			top:50px;\
			left:50px;\
			z-index:999999;\
		";

		var sidebar1 = document.createElement('BUTTON');
		sidebar1.id = "mySidebar1";
		sidebar1.innerHTML = "\
			<h1>2</h1>\
		";
		sidebar1.style.cssText = "\
			position:fixed;\
			top:200px;\
			left:50px;\
			width:100px;\
			height:100px;\
			color: white;\
			opacity: 0.5;\
			background:black;\
			border-radius:100px;\
			box-shadow:inset 0 0 5em white;\
			z-index:999999;\
		";


		var docFrag = document.createDocumentFragment();
		docFrag.id = "wholething";
		docFrag.appendChild(sidebar);
		docFrag.appendChild(sidebar1);
		document.body.appendChild(docFrag);

		sidebarOpen = true;
		hovered = false;
	}
}

