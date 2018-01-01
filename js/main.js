const DPI = 96;

$(document).ready(function() {
  setDefaultValues();
  drawCanvas();
  $('#generate').click(drawCanvas);
  $('#save').click(savePDF);
})

function setDefaultValues() {
  document.getElementById('spacing').value = '.25';
}

function savePDF() {
  let canvas = document.getElementById('graph');
  let img = canvas.toDataURL();

  let doc = new jsPDF('portrait', 'mm', 'letter');
  doc.addImage(img, 'JPEG', 0, 0);
  doc.save('letter.pdf');
}

function getPixelsFromInches(inches) {
  return Math.floor(inches*DPI);
}

function getSpacing() {
  let spacingString = document.getElementById('spacing').value;
  let spacingNum = Number(spacingString);
  return getPixelsFromInches(spacingNum);
}

function getWidth() {
  let inches = 8.5;
  return getPixelsFromInches(inches);
}

function getHeight() {
  let inches = 11;
  return getPixelsFromInches(inches);
}

function drawCanvas() {
  let spacing = getSpacing();
  let width = getWidth();
  let height = getHeight();

  let canvas = document.getElementById('graph');
  let ctx = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  let yPos = 0;
  while (yPos < height) {
    yPos = yPos + spacing;
    drawHorizontalLine(ctx, yPos, width)
  }

  let xPos = 0;
  while (xPos < width) {
    xPos = xPos + spacing;
    drawVerticalLine(ctx, xPos, height);
  }
}

function drawHorizontalLine(ctx, yPos, width) {
  ctx.beginPath();
  ctx.moveTo(0, yPos);
  ctx.lineTo(width, yPos);
  ctx.stroke();
}

function drawVerticalLine(ctx, xPos, height) {
  ctx.beginPath();
  ctx.moveTo(xPos, 0);
  ctx.lineTo(xPos, height);
  ctx.stroke();
}
