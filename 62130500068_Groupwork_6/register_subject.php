<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Registration Result</title>
		<style>
			body {
				background-color: #FCFEBC;
			}
			h1 {
				color: green ;
			}
			h2 {
				color: purple ;
			}
		</style>
	</head>
	<body>
		<h1>THANK YOU</h1>
		<hr>
		<p>Thank you for submiting Resistration:</p>
		<h2>Your Information:</h2>
		<p>
			<b>Name :</b> <?php echo $_REQUEST["firstname"]." ".$_POST["lastname"] ; ?><br>
			<b>Email Address :</b> <?php echo $_POST["email"] ; ?><br>
			<b>Telephone Number :</b> <?php echo $_POST["phone"] ; ?><br>
			<b>Subject id :</b> <?php echo $_POST["chosensubject"] ; ?>
		</p>
			
	</body>
</html>
