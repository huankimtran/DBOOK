var SUGGESTION_QUERY_ADDRESS="../php/suggestion.php";
var SEPARATING_MARK="~";
//Need to be rewriten to check the AJAX support of the use's browsers
//Function check the support of AJAX and return a correspond XMLHttpRequest depends on
//the client's browser
function checkSupport(){
	return new XMLHttpRequest();
}
function sendKeyword(keyword){
	var ajax=checkSupport();
	ajax.open("POST",SUGGESTION_QUERY_ADDRESS,true);
	ajax.send(keyword);
	return ajax;
}
//Get response of the sever
//ajax is the XMLHttpRequest used to send the request
//Response of sever is a string containing names of suggested books separated by character "~"
//function return an array of which each element is the name of a suggested book
function getListSuggestion(ajax){
	if(ajax.status==200 && ajax.readyState==4){
		return ajax.responseText.split("~");
	}else{
		return null;
	}
}
function 