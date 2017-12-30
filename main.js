function drawCanvas() {
  let canvas = document.getElementById("graph");
  let ctx = canvas.getContext("2d");

  let width = canvas.width;
  let height = canvas.height;
  let spacing = 10;
  let yPos = 0;
  let xPos = 0;

  while (yPos < height) {
    yPos = yPos + spacing;
    drawHorizontalLine(ctx, yPos, width)
  }

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
