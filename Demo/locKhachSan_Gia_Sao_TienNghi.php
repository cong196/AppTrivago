<?php
	require "dbConnect.php";
	$trang = $_GET["trang"];
	settype($trang, "int");
	$from = ($trang - 1) * 4;

	$tiennghi = $_GET["tiennghi"];
	settype($tiennghi, "string");

	$giamin = $_GET["giamin"];
	$giamax = $_GET["giamax"];
	settype($giamin, "int");
	settype($giamax, "int");

	$sosao = $_GET["sosao"];
	$temparr = str_split($sosao);

	$tempstr = '(';
	foreach($temparr as $item) {
    	$tempstr = $tempstr . $item . ',';
	}
	$tempstr = substr($tempstr, 0, -1);
	$tempstr = $tempstr . ')';

	$qr = "select id,ten,hinhanh,gia,diachi 
			from khachsan
			where tiennghihangdau = $tiennghi and sosao in $tempstr and gia<= $giamax && gia >= $giamin
			order by ngaycapnhat DESC
			limit $from,4";



	$ds = mysql_query($qr);
	$mang = array();
	while ($row = mysql_fetch_array($ds)) {
			array_push($mang, new KhachSan(
				$row["id"],
				$row["ten"],
				$row["hinhanh"],
				$row["gia"],
				$row["diachi"]
			));
	}
	echo json_encode($mang);
?>