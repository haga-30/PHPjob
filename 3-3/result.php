<?php
$my_number = $_GET["my_number"];
?>

<p><?php echo date("Y年m月d日", time()); ?>の運勢は</p>

<p>選ばれた数字は
  <?php
  $str = str_split($my_number);
  $num = array_rand( $str, 1 );
  $selected = $str[$num];
  echo $selected;
  ?>
</p>

<p>
  <?PHP 
  if ($selected >= 9) {
    echo "大吉";
  } elseif ($selected >= 7) {
    echo "吉";
  } elseif ($selected >= 4) {
    echo "中吉";
  } elseif ($selected >= 1) {
    echo "小吉";
  } else {
    echo "凶";
  }
  ?>
</p>
