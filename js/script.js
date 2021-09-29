let canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var inkColor = "blue";
var imgSrc = "pages/page (0).jpg";
var dfont = "22px myfont";
var mydata =
  "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
var maxWidth = 720;
var lineHeight = 24;
var x = 28;
var y = 22 + 22;
var fontindex = 0;
var totalfontnum = 8;
window.onload = draw();

let text_input = document.getElementById("inputText");
text_input.addEventListener("input", () => {
  //   console.log(text_input.value);
  mydata = text_input.value;
  redraw();
});

function draw() {
  imageObj = loadimg();
  imageObj.onload = function () {
    ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
    defaultFontload();
  };
}
function redraw() {
  imageObj = loadimg();
  imageObj.onload = function () {
    ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
    drawText(ctx, mydata, x, y, maxWidth, lineHeight);
  };
}
function loadimg() {
  var imageObj = new Image();
  imageObj.src = imgSrc;
  return imageObj;
}

function drawText(context, text, x, y, line_width, line_height) {
  var line = "";
  var paragraphs = text.split("\n");
  for (var i = 0; i < paragraphs.length; i++) {
    var words = paragraphs[i].split(" ");
    for (var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + " ";
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > line_width && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + " ";
        y += line_height;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
    y += line_height;
    line = "";
  }
}

async function loadFonts() {
  const font = new FontFace(
    "myfont",
    "url('fonts/font (" + fontindex + ").ttf')"
  );
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  // document.body.classList.add("fonts-loaded");
  ctx.font = dfont;
  ctx.fillStyle = inkColor;
  //   drawText(ctx, mydata, x, y, maxWidth, lineHeight);
  redraw();

  //   console.log(i);
}
async function defaultFontload() {
  const font = new FontFace("myfont", "url('fonts/font (0).ttf')");
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  // document.body.classList.add("fonts-loaded");
  ctx.font = dfont;
  ctx.fillStyle = inkColor;
  drawText(ctx, mydata, x, y, maxWidth, lineHeight);

  // console.log("default font loaded");
}
