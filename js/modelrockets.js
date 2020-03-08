function setContentMarginTop() {
  var elem = document.getElementById('nav');
  if(!isNaN(elem)) {
    let height = elem.height;

    console.log(height);

    document.getElementById('content').style.marginTop = height;
  }
  else {
    document.getElementById('content').style.marginTop = 200;
  }
}
