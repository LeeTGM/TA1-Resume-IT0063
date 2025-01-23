var colors = ["silver", "gold"];
var colorIndex = 0;

function changeColor() {
    var col = document.getElementById("resume");
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}