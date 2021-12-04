<?php
/**
 * Author: flynn
 * Company: ISolution Technologies
 * URL: http://www.isolution.org
 * Date: 2019-09-01
 * Time: 04:47
 */

if(isset($_POST['submit'])){

	$username = $_POST['username'];
	$password = $_POST['password'];

	$connection = mysqli_connect('localhost','root', 'secret','basicDB');

	if($connection){
		$query = "insert into users (username, password) values ('$username', '$password')";

		$result = mysqli_query($connection, $query);
		if( !$result ){
			die("Query failed with: ".mysqli_error());
		}
		else{
			echo "username and password is saved.";
		}

	}else{
		die('connection failed.');
	}



}
