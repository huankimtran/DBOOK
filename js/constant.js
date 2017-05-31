//ID Constant
var SRBID="search-box"
var ISRBID="inner-search-bar";	//Search box ID
var SRBARID="search-bar";		//Search box div encloser ID
var SGLBGID="SgListBG";			//Suggestion list background ID
var SBTID="item-table";			//Suggestion list background ID
var BDBID="book-description-bar";	//Description area
var BDID="des-brief";	//Description area
var BCTGID="des-category";		//Book category id
var BAID="des-author";			//book author id
var BTID="book-description-title";			//Description area
var FEID="floating-element";
var SGLBID="SgLBox";			//ID of the Suggestion list div
var GGIFID="ssIFrame_google";	//google iframe id
var SIRBID="sign-board";		//Sign regis board id
var RGBID="regis-board";		//Register board id
//var SGLSCRID="SgListScrn"		//Suggestion list screen ID
var TSGLID="SgLBox";				//Id of suggesting box under input search
var HDIV="header";				//header div id
var CDIV="content";				//content div id
var FDIV="footer";				//footer div id
//Constant for screenHandler
var SRB2SGL=30;					//distance from search box to suggestion list
var ACTCHOP=1;					//opacity of an active suggestion in the suggestion list. Need to be updated to have the same value with the value of SgListBG a:hover in the CSS
var UACTCHOP=0.25;				//opacity of an unactive suggestion in the suggestion list.Need to be updated to have the same value with the value of SgListBG a:hover in the CSS
var BSIR=1.5;					//ration of the width and height of the suggestion book img
var BCID=["rent-new","rent-old","buy-new","buy-old"]; //ID of choice button
var BFDT=2000;					//Shopping basket flashing delay time
var DBFDT=3000;					//Description bar flashing delay time
//Constant for suggestionGrabber
var SUGGESTION_QUERY_ADDRESS="/php/suggestion/suggestion.php?";
var SGHOLDER=SGLBGID;
var REPLACEMARK="?";
var BIMGPATH="/img/book_cover/";	//On sever, each book title has its own images folder
var BCIFN="/cover.jpg";				//and in that folder, except for the book cover image
var BNICFN="img_?.jpg";				//file name which will always have name cover.jpg, all
									//other images will have file name with format
									//img_index.jpg where index is a number between 1 and
									//the value specified in IMG_NUMBER column of that book title.
var MIN_CHAR=3;
var KEY_WORD="key=";
var RANDOM_KEY="&rand="
var COLUMNS_NAME=["BOOK_NAME_ID","BOOK_NAME"
	,"CATEGORY","AUTHOR","DESCRIPTION","QUANTATY_TOTAL"
	,"QUANTATY_OLD","RENTAL_NEW_PRICE","RENTAL_OLD_PRICE"
	,"BUY_NEW_PRICE","BUY_OLD_PRICE","IMG_NUMBER"];
var BOOKTAG="BOOK";					//name of the tag that contain smaller book information tags

var IMGTAGNAME="img"				//name of the img tag;
var BCVALUE=["Thuê mới","Thuê cũ","Mua mới","Mua cũ"]; //Title of buttons
//eventHandler
var DLTBFS=100;					//Delay time before search
var SBPVVA="preValue";			//Attribute that contain the previous value of the box. this is to check if user press anything control key
var BCILCA="complete";			//Attribute that show if the img is completely loaded
var SGLIIA="index";				//Suggestion list item index attribute
var BCILCAIV="false"			//Book cover image load attribute initial value
var BCILCALV="true"				//Book cover image load attribute loaded value
var SGLNSHS=-2;					//Suggestion list non show
var SGLNSS=-1;					//Suggestion list non select
var MIPB=15;					//Max item per buy
//Global variables- those variables down here appears in multiple javascript fileCreatedDate
var SGLCCH=SGLNSHS;					//The index of the current chosen suggestion in the suggestion list.-2 means the suggestion list is invisible
var bookSuggestedList=null			//suggested book data from sever. This is an array of element with bookObj type. Search for "Bookobj type definition" in suggestionGbrtabber.js
var HDLTBFS=0;						//Handle of the function after delay time before search
var HDDBF=null;						//Handle of the settimeout that make hide the description bar
var HDSB=null;						//Handle of the settimeout that hide the shopping basket
