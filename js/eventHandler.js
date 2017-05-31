//Check if user make change to the search box values
function isCharacter(){
	var preValue=document.getElementById(SRBID).getAttribute(SBPVVA);
	var nowValue=document.getElementById(SRBID).value;
	if(preValue.localeCompare(nowValue)!=0){
		document.getElementById(SRBID).setAttribute(SBPVVA,nowValue);
		return true;
	}
	return false;
}
function SGLListenner(key){
	var sgNumb=document.getElementById(TSGLID).childNodes.length-1;
	function goDown(){
		if(SGLCCH==SGLNSS){
			SGLCCH=0;
			makeActive(SGLCCH,SGLCCH);
		}else
			if(SGLCCH==sgNumb){
				SGLCCH=SGLNSS;
				clearActive(sgNumb);
			}else makeActive(SGLCCH,++SGLCCH);
	}
	function goUp(){
		if(SGLCCH==SGLNSS){
			SGLCCH=sgNumb;
			makeActive(SGLCCH,SGLCCH);
		}else
			if(SGLCCH==0){
				SGLCCH=SGLNSS;
				clearActive(0);
			}else makeActive(SGLCCH,--SGLCCH);
	}
	switch(key.keyCode){
		case 38://Up arrow key
		case 40://Down arrow key
		key.preventDefault();
		if(SGLCCH!=SGLNSHS){ //check if the suggestion list is on
			if(key.keyCode==38) goUp();
			else goDown();
			hideDescriptionBar();
			if(SGLCCH!=SGLNSS) 
				updateDescriptionBar();
		}
		break;
		case 13://Enter
		showDescriptionBar();
		break;
		case 27://Escape
		hideDescriptionBar();
		default:
		if(isCharacter()) {
			if(HDLTBFS) {
				clearTimeout(HDLTBFS);
				HDLTBFS=setTimeout(function(){sendKeyword();},DLTBFS);
			}else HDLTBFS=setTimeout(function(){sendKeyword();},DLTBFS);
		}
	}
}
function registerListenner(){
	document.getElementById(SRBID).addEventListener("keyup",SGLListenner);
}
function settingInitialValue(){
	//tao atribute prevalue cho input box
	document.getElementById(SRBID).setAttribute(SBPVVA,"");
}
function onLoad(){
//	loadFacebookLib();
	graphicLoad();
	registerListenner();
	settingInitialValue();
}
function onResize(){
	adaptScreenSize();
}
//function use to indicate the img is completely loaded
function bookCoverImgOnLoad(img){
	img.setAttribute(BCILCA,BCILCALV);
	var tmp=img.getAttribute(SGLIIA);
	if(tmp==SGLCCH)
		makeActive(SGLCCH,SGLCCH);
}
//This function detect a mouse hover event on an item of the suggestion list and make
//THe item active
function suggestListItemonMouseOver(item){
	var itemPos=item.getAttribute(SGLIIA);
	if(SGLCCH==SGLNSS)makeActive(itemPos,itemPos);
	else makeActive(SGLCCH,itemPos);
	SGLCCH=itemPos;
}
//new cell
function newCell(vl){
	var tmp=document.createElement("td");
	if(typeof(vl)=="object")
		tmp.appendChild(vl);
	else
		tmp.innerHTML=vl;
	return tmp;
}
function newSelectiMethod(choseItemIndex){
	// TM TC MM MC 
	// 0  1  2  3
	var tmp=document.createElement("select");
	var opt=document.createElement("option");
	opt.innerHTML="TM";
	tmp.add(opt);
	opt=document.createElement("option");
	opt.innerHTML="TC";
	tmp.add(opt);
	opt=document.createElement("option");
	opt.innerHTML="MM";
	tmp.add(opt);
	opt=document.createElement("option");
	opt.innerHTML="MC";
	tmp.add(opt);
	tmp.selectedIndex=choseItemIndex;
	return tmp;
}
function newSelectiNumber(choseItemIndex){
	var tmp=document.createElement("select");
	for(var i=0;i<=MIPB;i++){
		var opt=document.createElement("option");
		opt.innerHTML=i;
		tmp.add(opt);
	}
	tmp.selectedIndex=choseItemIndex;
	return tmp;
}
function newButton(rowObject){
	var tmp=document.createElement("button");
	tmp.innerHTML="X";
	tmp.onclick=function(){
		document.getElementById(SBTID).removeChild(rowObject);
	}
	return tmp;
}
//Function adding element to shopping basket iMethod= 0 TM-rent new - 1TC rent old - 2MM buy new- 3MC buy old
function addNewItem2Basket(iName,iMethod,iPrice,iNumber,iIndex){
	var newRow=document.createElement("tr");
	newRow.appendChild(newCell(iName));
	newRow.appendChild(newCell(newSelectiMethod(iMethod)));
	newRow.appendChild(newCell(iPrice));
	newRow.appendChild(newCell(newSelectiNumber(iNumber)));
	newRow.appendChild(newCell(newButton(newRow)));
	newRow.setAttribute(SGLIIA,iIndex);
	document.getElementById(SBTID).appendChild(newRow);
	//Flash the shopping basket
	document.getElementById(FEID).style.left=0;
	clearTimeout(HDSB);
	HDSB=setTimeout(function(){document.getElementById(FEID).removeAttribute("style");},BFDT);
}
//Function add item base on the button clicked
function onClickButtonChoice(iMethod){
	if(SGLCCH>=0){
		switch(iMethod){
			case 0:
			var iPrice=bookSuggestedList[SGLCCH].rentNewPrice;
			break;
			case 1:
			var iPrice=bookSuggestedList[SGLCCH].rentOldPrice;
			break;
			case 2:
			var iPrice=bookSuggestedList[SGLCCH].buyNewPrice;
			break;
			case 3:
			var iPrice=bookSuggestedList[SGLCCH].buyOldPrice;
			break;
		}
		addNewItem2Basket(bookSuggestedList[SGLCCH].bookName,iMethod,iPrice,1,document.getElementById(SBTID).childNodes.length-2);
	}
}
function onSigninClickShow(){
	document.getElementById(SIRBID).style.display="block";
	document.getElementById(SIRBID).style.opacity="1";
}
function onSigninClickHide(){
	document.getElementById(SIRBID).style.opacity="0";
}
function onRegisterClickShow(){
	document.getElementById(RGBID).style.display="block";
}
function onRegisterClickHide(){
	document.getElementById(RGBID).removeAttribute("style");
}