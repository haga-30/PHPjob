<?php
$fruits = ["りんご" => 100, "みかん" => 150, "もも" => 500];

$lot = [3, 1, 6];
$i = 0;

function gettotal($price,$num) {
  $total = $price * $num;
  return $total;
}

foreach($fruits as $key => $value) {
  echo $key. "は". gettotal($value,$lot[$i]). "円です。<br>";
  $i ++;
}
?>