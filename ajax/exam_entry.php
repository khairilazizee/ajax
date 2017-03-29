<?php

include "../mainfile.php";
session_start();
$markah = number_format($_GET['markah'],2);
$credithour = $_GET['credit'];
$bil = $_GET['bil'];

echo "<input type='text' readonly name='txtTotal$bil' value='$markah' size='5' style='background-color:#ffffff;border:1px solid #ffffff;text-align:center;'/>";
echo "|";

$sql = "SELECT grd_grade, grd_credit_point FROM exam_grade WHERE grd_min_mark <= '$markah' and grd_max_mark >='$markah' ";
//echo($sql);
$res = mysql_query($sql,$dbi);
$info = mysql_fetch_array($res);
$grade = $info['grd_grade'];
echo "<input type='text' readonly name='txtGrade$bil' value='$grade' size='5' style='background-color:#ffffff;border:1px solid #ffffff;text-align:center;'/>";

echo "|";

$credit_point = $info['grd_credit_point'] * $credithour;
echo "<input type='text' readonly name='txtCredit$bil' value='$credit_point' size='5' style='background-color:#ffffff;border:1px solid #ffffff;text-align:center;'/>";



?>