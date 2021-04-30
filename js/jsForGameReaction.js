var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';//создание массива
    var color = '#';//добавление #
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];// выбираем рандомом позицию из массива и добавляем 6 раз при помощи цикла
    }
    return color;
}

function timeDisplayShape() {
    var square = Math.floor(Math.random()*2);
    var relativeLeft = Math.random()*1000;
    var relativeTop = Math.random()*300;
    var size = (Math.random()*200)+100;
    document.getElementById("shape").style.left = relativeLeft+"px";
    document.getElementById("shape").style.top = relativeTop+"px";
    document.getElementById("shape").style.height = size+"px";
    document.getElementById("shape").style.width = size+"px";
    if (square==1) {
        document.getElementById("shape").style.borderRadius = "0%";
    } else {
        document.getElementById("shape").style.borderRadius = "50%";
    }
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.display = "block";
    document.getElementById("relLeft").innerHTML = relativeLeft + "px"
    document.getElementById("relTop").innerHTML = relativeTop + "px"
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(timeDisplayShape, Math.random()*2000);
}
appearAfterDelay();

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var stop = new Date().getTime();
    var takeTime = (stop - start) / 1000;
    document.getElementById("takeTime").innerHTML = takeTime + "с."
    appearAfterDelay();
}