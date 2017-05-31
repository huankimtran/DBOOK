<?php
	echo "conan1.jpg~conan1.jpg~conan2.jpg~conan2.jpg";
/*	define("SEARCHKEY","key");
	define("REPRESENT","?");
	define("SEARCH_COLUMN","BOOK_NAME");
	define("queryStatement","SELECT ".SEARCH_COLUMN." FROM book_data WHERE UCASE(".SEARCH_COLUMN.") LIKE '%?%'"); 
	$_username="b10_17708769";
	$_password="123456789";
	$_databaseName="b10_17708769_library";
	$_SQLSever="sql104.byethost10.com";
	function blockSQLInjection($query){
		return $query;
	}
	function sqlQuerySuggestion($query){
		$username="huan";
		$password="123456789";
		$databaseName="b10_17708769_library";
		$SQLSever="localhost";
		$conn = new mysqli($SQLSever, $username, $password, $databaseName);
		if ($conn->connect_error) {
			echo("Connection failed: " . $conn->connect_error);
			exit();
		}
		$tmp=str_replace(REPRESENT,$query,queryStatement);
		$result=$conn->query($tmp);
		if($result->num_rows>0){
			 while($row = $result->fetch_assoc()) {
				echo $row[SEARCH_COLUMN]."~";
			 }
		}
		$conn->close();
	}
	sqlQuerySuggestion($_GET[SEARCHKEY]);
*/
?>