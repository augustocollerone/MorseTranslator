var img = new Image();
img.src = 'https://i.imgur.com/jTKLGWV.png';
var canvas = document.getElementById('canvas');
var translated = document.getElementById('translated');
var ctx = canvas.getContext('2d');
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
  translated.textContent = 'Loadded';
  read2();
};
window.onload = function() {
  read2();
};

function read2() {
  translated.textContent = 'read2';
  translated.textContent = 'read2.2';
	var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  translated.textContent = 'read2.3';



  if (data[0] != 0) {

  }

	var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);


	var data = imgData.data;

// enumerate all pixels
// each pixel's r,g,b,a datum are stored in separate sequential array elements
    translated.textContent = 'read2.8';

	for(var i=0; i<data.length; i+=4) {
 		 var red = data[i];
  	var green = data[i+1];
 	 var blue = data[i+2];
 	 var alpha = data[i+3];
   var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';
  //translated.style.background =  rgba;
    translated.textContent = '"""asdasdas';

	}
}










function read() {
	var lines = canvas.height;
  var columns = canvas.width;
 	for (var line in lines) {
		translated.textContent = "un for";
  	for (var column in columns) {
    	  var pixel = ctx.getImageData(line, column, 1, 1);
        translated.textContent = "dos for";
    }
  }
	var startX = 55;
  var startY = 53;
  var endX = 645;
  var endY = 645;
	var x = 50;
  var y = -150;
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';
  translated.style.background =  rgba;
}




















//read()
/*
function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';
  color.style.background =  'rgba(150,150,150,1)';
  color.textContent = rgba;
}
canvas.addEventListener('mousemove', pick);
*/
