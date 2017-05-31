//Update Description bar
function updateDescriptionBar(){
	document.getElementById(BTID).innerHTML=bookSuggestedList[SGLCCH].bookName;
	document.getElementById(BCTGID).innerHTML=bookSuggestedList[SGLCCH].category;
	document.getElementById(BAID).innerHTML=bookSuggestedList[SGLCCH].author;
	document.getElementById(BDID).innerHTML=bookSuggestedList[SGLCCH].description;
	updatePriceButton(bookSuggestedList[SGLCCH].rentNewPrice
					  ,bookSuggestedList[SGLCCH].rentOldPrice
					  ,bookSuggestedList[SGLCCH].buyNewPrice
					  ,bookSuggestedList[SGLCCH].buyOldPrice);
}
//Currency wrap
function addCurrency(vl){
	return "<br>"+vl+ " VND";
}
//update the price buttón
function updatePriceButton(rentNewV,rentOldV,buyNewV,buyOldV){
	var rentNew=document.getElementById(BCID[0]);
	var rentOld=document.getElementById(BCID[1]);
	var buyNew=document.getElementById(BCID[2]);
	var buyOld=document.getElementById(BCID[3]);
	rentNew.innerHTML=BCVALUE[0]+addCurrency(rentNewV);
	rentOld.innerHTML=BCVALUE[1]+addCurrency(rentOldV);
	buyNew.innerHTML=BCVALUE[2]+addCurrency(buyNewV);
	buyOld.innerHTML=BCVALUE[3]+addCurrency(buyOldV);

}
//Show the description bar
function showDescriptionBar(){
	document.getElementById(BDBID).style.right="0";
}
//Hide the description bar
function hideDescriptionBar(){
	document.getElementById(BDBID).removeAttribute("style");
}
//Make the choice active
//this function is used in key up and down event handler
function makeActive(idxOld,idxNew){
	var img=document.getElementById(SGLBGID);
	var tx=document.getElementById(TSGLID);
	img.childNodes[idxOld].removeAttribute("style");
	tx.childNodes[idxOld].removeAttribute("style");
	if(img.childNodes[idxNew].getAttribute(BCILCA)===BCILCALV) 
		img.childNodes[idxNew].style.opacity=ACTCHOP;
	tx.childNodes[idxNew].focus();
	tx.childNodes[idxNew].setAttribute("style","color:black;background-color:white");
	document.getElementById(SRBID).focus();
	document.getElementById(SRBID).value= tx.childNodes[idxNew].textContent;
}
function clearActive(idxOld){
	var img=document.getElementById(SGLBGID);
	var tx=document.getElementById(TSGLID);
	img.childNodes[idxOld].removeAttribute("style");
	tx.childNodes[idxOld].removeAttribute("style");
	document.getElementById(SRBID).value = document.getElementById(SRBID).getAttribute(SBPVVA);
	document.getElementById(SRBID).focus();
}
/* consider throw away
//Get the size of the scrollbar of a fully visible element
function getScrollSize(e){
	return e.clientWidth-e.offsetWidth;
}
//Hide the scrollbar of a visible element
//outter and inner are the ID of the viewed element and the holder which has the scrollbar element
//outter element must have style="position:relative;overflow=hidden";
//inner element must have style="posision:absolute;overflow-y=auto;width:need to be set";
//and inner is the only child of the outter
function hideScrollbar(outter,inner){
	var outter_obj=document.getElementById(outter);
	var inner_obj=document.getElementById(inner)
	outter_obj.style.width="100%";
	outter_obj.style.width=inner_obj.clientWidth + "px";
}
*/
//function show or hide an element. Set show to true to make the element visible viceversa
//Need id of the element
function showElement(show,id){
	var e=document.getElementById(id);
	if(show) e.style.display="block";
	else e.style.display="none";
}
//function show and hide the Suggestion List
function showSGList(show){
	showElement(show,SGLBGID);
	showElement(show,TSGLID);
	if(show) 
		SGLCCH=SGLNSS;
	else 
		SGLCCH=SGLNSHS;
}
//This set the height of content div so that the page is not overflowed
function resizeContent(){
	var tmp1=document.getElementById(HDIV).clientHeight;
	var tmp2=document.getElementById(FDIV).clientHeight;
	document.getElementById(SRBARID).style.height=(window.innerHeight-tmp1-tmp2)+"px";
}
function toPixel(v){
	return v+"px";
}
//Configure suggestion img
function confSuggestionImgDiv(){
	var bgSG=document.getElementById(SGLBGID);
	var innerWidth=window.innerWidth;
	var searchBarW=document.getElementById(ISRBID).clientWidth;
	var imgWidth=(innerWidth-searchBarW)/4;
	var imgHeight=imgWidth*BSIR;
	var searchBDivH=document.getElementById(SRBARID).clientHeight;
	//config the suggestion img size	
	bgSG.style.width=toPixel(imgWidth);
	bgSG.style.height=toPixel(imgHeight);
	//Locate the suggestion img position
	bgSG.style.left=toPixel((innerWidth+searchBarW+imgWidth)/2);
	bgSG.style.top=toPixel((searchBDivH-imgHeight)/2);
}
function adaptScreenSize(){
	//Fit the background with the screen
//	document.body.style.width=window.innerWidth+"px";
	document.body.style.height=window.innerHeight+"px";
	//Remove google iframe
	document.getElementById(GGIFID).style.display="none";
}
function graphicLoad(){
	adaptScreenSize();
	resizeContent();
	confSuggestionImgDiv();
}
