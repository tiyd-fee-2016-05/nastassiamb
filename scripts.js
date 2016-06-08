// --------------- TABS CREATED -------------------------------
// ------------  code for how to create tabs courtesy of
// http://www.webhostingtalk.com/showthread.php?t=1045871

// <script type=”text/javascript”>
function tab(tab) {
document.getElementById(‘tab1′).style.display = ‘none’;
document.getElementById(‘tab2′).style.display = ‘none’;
document.getElementById(‘li_tab1′).setAttribute(“class”, “”);//the desired
// value goes in the empty parentheses
document.getElementById(‘li_tab2′).setAttribute(“class”, “”);
document.getElementById(tab).style.display = ‘block’;
document.getElementById(‘li_’+tab).setAttribute(“class”, “active”);
}
// </script>
