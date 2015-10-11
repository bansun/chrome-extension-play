var cssId = 'greenPulse.css';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://website.com/css/stylesheet.css';
    link.media = 'all';
    head.appendChild(link);
}

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
function toggleSidebar() {
	if(sidebarOpen) {
		// hide it
		// var btn = document.getElementById("mybtn");  
		// btn.parentNode.removeChild(btn);
		sidebarOpen = false;
		var el = document.getElementById('mySidebar');
		el.parentNode.removeChild(el);
		var el1 = document.getElementById('mySidebar1');
		el1.parentNode.removeChild(el1);
		
		
	} else {
		// var btn = document.createElement("BUTTON");  
		// btn.id = "mybtn";
		// btn.style.cssText = "\
		//  	position:fixed;\
		//  	top:0px;
		//  	background:red;\
		// 	z-index:999999;\

		// ";
		// document.body.appendChild(btn);   

		var sidebar = document.createElement('BUTTON');
		sidebar.id = "mySidebar";
		// sidebar.innerHTML = "\
		// 	<h1>Hello World!</h1>\
		// ";
		sidebar.style.cssText = "\
			position:fixed;\
			top:0px;\
			left:50%;\
			width:50px;\
			height:50px;\
			color: white;\
			opacity: 0.5;\
			background:black;\
			border-radius:50px;\
			box-shadow:inset 0 0 1em black;\
			z-index:999999;\
		";

		var sidebar1 = document.createElement('BUTTON');
		sidebar1.id = "mySidebar1";
		sidebar1.innerHTML = "\
			<h1>Hello World!</h1>\
		";
		sidebar1.style.cssText = "\
			position:fixed;\
			top:500px;\
			left:50%;\
			width:50%;\
			height:50%;\
			color: white;\
			opacity: 0.5;\
			background:red;\
			border-radius:50px;\
			box-shadow:inset 0 0 1em black;\
			z-index:999999;\
		";
		
		var docFrag = document.createDocumentFragment();
		docFrag.id = "wholething";
		docFrag.appendChild(sidebar);
		docFrag.appendChild(sidebar1);
		document.body.appendChild(docFrag);
		
		sidebarOpen = true;
	}
}

