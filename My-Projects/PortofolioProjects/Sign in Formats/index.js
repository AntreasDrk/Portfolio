let $test = document.getElementById("welcome").innerHTML,
  $html = "",
  $i;

function animatedText() {
  for ($i = 0; $i < $test.length; $i++) {
    $html +=
      '<span style="animation: boo ' + $i + 's">' + $test[$i] + "</span>";
  }
  document.getElementById("welcome").innerHTML = $html;
  document.getElementById("welcome").style.color = "white";
  document.getElementById("welcome").style.width = "210px";
  document.getElementById("welcome").style.marginLeft = "15px";
  document.getElementById("welcome").style.fontSize = "20px";
}

animatedText();
