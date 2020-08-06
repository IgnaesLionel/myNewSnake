window.onload = function()
{

  var canvas
  var ctx
  var delay = 1000;
  var x = 0
  var y = 0
  //affichage du canvas

  init()


  function init ()
  {
    canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style.border= "1px solid";
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    refreshCanvas();
  }

  function refreshCanvas()
  {
    x += 5;
    y += 5;
    ctx.clearRect(0,0,canvas.width, canvas.height); // clear tout le canvas
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x ,y , 100, 50); // reasigne la nouvelle position
    setTimeout(refreshCanvas,delay)
  }



}
