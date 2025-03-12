<?php
$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$log = "IP: $ip | User-Agent: $userAgent | Time: " . date("Y-m-d H:i:s") . "\n";

// Save to a log file
file_put_contents("ip_log.txt", $log, FILE_APPEND);

// Send a 1x1 pixel image response
header("Content-Type: image/png");
$im = imagecreatetruecolor(1, 1);
$white = imagecolorallocate($im, 255, 255, 255);
imagesetpixel($im, 0, 0, $white);
imagepng($im);
imagedestroy($im);
?>
