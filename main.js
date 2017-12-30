function loadPage() {
  drawCanvas();
  document.getElementById('save').addEventListener('click', savePDF);
}

function savePDF() {
  let canvas = document.getElementById('graph');
  let img = canvas.toDataURL();

  let doc = new jsPDF('portrait', 'mm', 'letter');
  doc.addImage(img, 'JPEG', 0, 0);
  doc.save('letter.pdf');
}

function drawCanvas() {
  let canvas = document.getElementById('graph');
  let ctx = canvas.getContext('2d');

  let spacing = 16;
  let width = 816;
  let height = 1056;

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
