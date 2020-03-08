function setContentMarginTop() {
  let height = document.getElementById('nav').height;

  console.log(height);

  document.getElementById('content').style.marginTop = height;
}
