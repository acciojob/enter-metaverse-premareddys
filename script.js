//your JS code here. If required.
const metaverse= document.getElementById("status");
const button= document.getElementById("enterBtn");
function listener(){
	document.getElementById('status').innerHTML = '<h1>Entered Metaverse</h1>';
}

button.addEventListener("click", listener);
