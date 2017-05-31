//function parse the XML sent by sever into an array of bookObj element
function parseXMLResponse(xmlDoc){
	bookSuggestedList=new Array(); //sua cai nay lai
	var bookDataList=xmlDoc.getElementsByTagName(BOOKTAG);
	for(var i=0;i<bookDataList.length;i++)
		bookSuggestedList.push(parseXMLElement(bookDataList[i]));
}
//function parse a BOOK tag element into an bookObj of which each property represent a column
//e is the XMLDom represent a BOOK tag element in the response message
//Bookobj type definition
function parseXMLElement(e){
	var bookObj={
		bookId:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[0])[0]),
		bookName:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[1])[0]),
		category:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[2])[0]),
		author:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[3])[0]),
		description:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[4])[0]),
		quantatyTotal:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[5][0])),
		quantatyOld:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[6])[0]),
		rentNewPrice:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[7])[0]),
		rentOldPrice:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[8])[0]),
		buyNewPrice:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[9])[0]),
		buyOldPrice:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[10])[0]),
		numberImage:getNodeValue(e.getElementsByTagName(COLUMNS_NAME[11])[0]),
	};
	return bookObj;
}
function getNodeValue(node){
	if(node.firstChild) return node.firstChild.textContent;
	else return null;
}
//Need to be rewriten to check the AJAX support of the use's browsers
//Function check the support of AJAX and return a correspond XMLHttpRequest depends on
//the client's browser
function test(){
	alert("check");
}
//Function return a random number for preventing result from being cached
function getRandomURI(){
	return RANDOM_KEY+(new Date()).getTime();
}
function checkSupport(){
	return new XMLHttpRequest();
}
function sendKeyword(){
	var keyword=document.getElementById(SRBID).value.toUpperCase();
	if(keyword.length<MIN_CHAR) return showSGList(false);
	var ajax=checkSupport();
	ajax.onreadystatechange=function(){
		if(ajax.status==200 && ajax.readyState==4) 
			//Get response of the sever
			//ajax is the XMLHttpRequest used to send the request
			//Response of sever is a string containing names of suggested books separated by character "~"
			//function return an array of which each odd numbered element is the name of a suggested book
			//and the next even element is the name of the book's cover image
			if(ajax.responseXML!=null) {
				parseXMLResponse(ajax.responseXML);
				showSuggestion(bookSuggestedList);
			}else showSGList(false);
	}
	ajax.open("GET",SUGGESTION_QUERY_ADDRESS+encodeURI(KEY_WORD+keyword+getRandomURI()),true);
	ajax.send();
	return ajax;
}
//
function getBoookCoverImgLink(folderName){
	return BIMGPATH+folderName+BCIFN;
}
//create img of suggestion item
function generateImgElement(name,imgFolder){
	var cover=document.createElement("img");
	cover.src=getBoookCoverImgLink(imgFolder);
	cover.setAttribute(BCILCA,BCILCAIV);
	cover.onload=function(){bookCoverImgOnLoad(cover);};
	return cover;
}
function generateTextElement(content){
	var a=document.createElement("a");
	a.textContent=content;
	a.href="#";
	a.onmouseover=function(){suggestListItemonMouseOver(a);}
	return a;
}
//remove all child of the given node
function removeAllChild(list){
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
}
//remove all child with specific tag name
function removeAllChildWTag(list,tagN){
	var pos=0;
	while(pos<list.childNodes.length){
		if(list.childNodes[pos].tagName==tagN)
			list.removeChild(list.childNodes[pos]);
		pos++;
	}
}
//showing suggestion 
//list is an array of which each odd numbered element is the name of a suggested book
//and the next even element is the name of the book's cover image file
function showSuggestion(list){
	var imgHolder=document.getElementById(SGHOLDER);
	var textHolder=document.getElementById(TSGLID);
	removeAllChild(imgHolder);
	removeAllChild(textHolder);
	if(list.length){
		for(i=0;i<list.length;i++){
			var anItem={
					img:generateImgElement(list[i].bookName,list[i].bookId),
					tx:generateTextElement(list[i].bookName)
					};
			anItem.img.setAttribute(SGLIIA,i);
			anItem.tx.setAttribute(SGLIIA,i);
			anItem.tx.onclick=function(){
				updateDescriptionBar();
				showDescriptionBar();
			clearTimeout(HDDBF);
			HDDBF=setTimeout(hideDescriptionBar,DBFDT);
			};
			imgHolder.appendChild(anItem.img);
			textHolder.appendChild(anItem.tx);
		}
		showSGList(true);
	}else showSGList(false);
}