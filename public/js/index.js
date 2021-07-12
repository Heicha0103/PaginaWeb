const container = document.getElementById("container");
window.onmousemove = (e) => {
    var x = e.clientX;
    var y = e.clientY;
    container.style.backgroundPositionX = x + "px";
    container.style.backgroundPositionY = y + "px";
};