
function tab(a1,a2){
	a1.onmouseover=function(){
		a2.style.display="block";
		a2.style.background="#fff";
		a1.style.background="#fff";
	}
}
function lab(a1,a2){
	a1.onmouseout=function(){
		a2.style.display="none";
		a1.style.background="#f2f2f2";
	}
}