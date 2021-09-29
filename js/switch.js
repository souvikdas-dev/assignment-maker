var darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
var darkmode = Boolean(darkThemeMq.matches);

// let change = document.getElementById("change");
let changeMode = document.getElementById("changeMode");
changeMode.onclick = () => {
  if (darkmode) {
    darkmode = false;
    document.body.style.cssText = "background: #FFF;color: #333;";
    // changeMode.classList.replace("bx-cog","bxs-cog");
    changeMode.style.color = "rgb(0, 225, 225)";
  } else {
    darkmode = true;
    document.body.style.cssText = "background: #333;color: #FFF;";
    // changeMode.classList.replace("bxs-cog","bx-cog");
    changeMode.style.color = "rgba(252, 70, 107, 1)";
  }
};

var inputColor = document.getElementById("inputColor");
// inputColor.value="#383b3e";
inputColor.style.borderColor = inputColor.value;
inputColor.oninput = () => {
  inputColor.style.borderColor = inputColor.value;
  inkColor = inputColor.value;
  console.log(inputColor.value);
  ctx.fillStyle = inkColor;
  redraw();
};
// function getRandomRGBValue() {
//     return Math.min(Math.floor(Math.random() * 255 + 1), 255);
// }

// function getRandomColor() {
//     var r = getRandomRGBValue(),
//         g = getRandomRGBValue(),
//         b = getRandomRGBValue();
//     return "#" + (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
// }

// function changeThemeColor() {
//     var metaThemeColor = document.querySelector("meta[name=theme-color]");
//     metaThemeColor.setAttribute("content", getRandomColor());
//     setTimeout(function() {
//         changeThemeColor();
//     }, 3000);
//     console.log("run");
// }

// changeThemeColor();
