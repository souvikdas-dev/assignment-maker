let UploadPage = document.getElementById("UploadPage");
let DefaultPage = document.getElementById("DefaultPage");
let ChangeFont = document.getElementById("ChangeFont");
let UploadFont = document.getElementById("UploadFont");
let DownloadPage = document.getElementById("DownloadPage");

let adjustX = document.getElementById("adjustX");
let adjustY = document.getElementById("adjustY");
let adjfontSize = document.getElementById("adjfontSize");
let adjustWidth = document.getElementById("adjustWidth");

let adjLetterSpacing = document.getElementById("adjLetterSpacing");
let adjWordSpacing = document.getElementById("adjWordSpacing");
let adjLineHeight = document.getElementById("adjLineHeight");

UploadPage.onclick = () => {
  var uploadPageBtn = document.createElement("input");
  uploadPageBtn.type = "file";
  uploadPageBtn.accept = "image/*";
  // uploadPageBtn.style.display = "none";
  uploadPageBtn.click();
  // input.remove();

  uploadPageBtn.onchange = (evt) => {
    const [file] = uploadPageBtn.files;
    if (file) {
      imgSrc = URL.createObjectURL(file);
      redraw();
    }
  };

  //   uploadPageBtn.onchange = function(event) {
  //     var reader = new FileReader();
  //     reader.onload = function(){
  //       var output = document.getElementById('blah');
  //       output.src = reader.result;
  //       imgSrc = reader.result;
  //       redraw();
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   };
};

DefaultPage.onclick = () => {
  imgSrc = "pages/page (0).jpg";
  redraw();
};

ChangeFont.onclick = () => {
  fontindex < totalfontnum ? fontindex++ : (fontindex = 0);
  loadFonts();
  //   redraw();
};

UploadFont.onclick = () => {
  var uploadFontBtn = document.createElement("input");
  uploadFontBtn.type = "file";
  // input.accept = "image/*";
  //   input.style.display = "none";
  uploadFontBtn.click();
  // input.remove();

  uploadFontBtn.onchange = (evt) => {
    const file = uploadFontBtn.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      async function () {
        const font = new FontFace("myfont", "url(" + reader.result + ")");
        // wait for font to be loaded
        await font.load();
        // add font to document
        document.fonts.add(font);
        // enable font with CSS class
        // document.body.classList.add("fonts-loaded");
        ctx.font = dfont;
        ctx.fillStyle = "#00f";
        redraw();
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };
};

DownloadPage.onclick = () => {
  var link = document.createElement("a");
  link.download = "page.png";
  link.href = canvas.toDataURL("Image/png", 1.0);
  link.click();
  link.remove();
};

adjustX.oninput = () => {
  x = parseInt(adjustX.value);
  redraw();
};

adjustY.oninput = () => {
  y = parseInt(adjustY.value);
  redraw();
};

adjfontSize.oninput = () => {
  // var fs = parseInt(adjfontSize.value);
  var fs = adjfontSize.value;
  dfont = fs + "px myfont";
  ctx.font = dfont;
  redraw();
};

adjustWidth.oninput = () => {
  maxWidth = parseFloat(adjustWidth.value);
  redraw();
};

adjLetterSpacing.oninput = () => {
  canvas.style.letterSpacing = adjLetterSpacing.value + "px";
  ctx = canvas.getContext("2d");
  ctx.font = dfont;
  redraw();
};

adjWordSpacing.oninput = () => {
  canvas.style.wordSpacing = adjWordSpacing.value + "px";
  ctx = canvas.getContext("2d");
  ctx.font = dfont;
  redraw();
};

adjLineHeight.oninput = () => {
  lineHeight = parseFloat(adjLineHeight.value);
  redraw();
};
