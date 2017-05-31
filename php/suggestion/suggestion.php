<?php
	define("XMLRESPMODEL","responseHeader.xml");
	define("XMLRESPMDENAME","BOOK");
	//For operation on database
	define("TABLENAME","book_data");
	define("SEARCHKEY","key");
	define("REPRESENT","?");
	define("CMPRC","BOOK_NAME");
	define("SEARCH_COLUMNS",
	"BOOK_NAME_ID
	,BOOK_NAME
	,CATEGORY
	,AUTHOR
	,DESCRIPTION
	,QUANTATY_TOTAL
	,QUANTATY_OLD
	,RENTAL_NEW_PRICE
	,RENTAL_OLD_PRICE
	,BUY_NEW_PRICE
	,BUY_OLD_PRICE
	,IMG_NUMBER");
	define("queryStatement","SELECT ".SEARCH_COLUMNS." FROM ".TABLENAME." WHERE UCASE(".CMPRC.") LIKE '%?%'"); 

	//Code scope
	/*
	$_username="b10_17708769";
	$_password="123456789";
	$_databaseName="b10_17708769_library";
	$_SQLSever="sql104.byethost10.com";
	*/
	function blockSQLInjection($query){
		return $query;
	}
	function sqlQuerySuggestion($query){
		$username="huan";
		$password="123456789";
		$databaseName="b10_17708769_library";
		$SQLSever="localhost";
/*		$username="huankimtran";
		$password="123456789";
		$databaseName="dbook";
		$SQLSever="db4free.net";
*/
		$conn = new mysqli($SQLSever, $username, $password, $databaseName);
		if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);
		$tmp=str_replace(REPRESENT,$query,queryStatement);
		$result=$conn->query($tmp);
		if($result->num_rows>0){
			$xmlObj=new DOMDocument();
			try{$xmlObj->load(XMLRESPMODEL);}
			catch(DOMException $e){die($e->getMessage());}
			//load the xml model of the message which will be sent back to client
			$rootNode=$xmlObj->documentElement;
			$inputNode=$rootNode->removeChild($rootNode->firstChild);
			while($row = $result->fetch_assoc()){
				foreach($row as $column => $data)
					$inputNode->getElementsByTagName($column)->item(0)->nodeValue=$data;
				$rootNode->appendChild($inputNode);
				$inputNode=$inputNode->cloneNode(TRUE);
			 }
			header("Content-type: text/xml");
			echo $xmlObj->saveXML();
		}
		$conn->close();
	}
	//Start point of the program
	sqlQuerySuggestion($_GET[SEARCHKEY]);
?>