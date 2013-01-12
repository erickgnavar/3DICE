var $ = function (id) {
    return document.getElementById(id);
};

var generateRandomValue = function () {
    var a = 1;
    var b = 6;
    var r = Math.random();
    var result = a + ((b - a) * r);
    return Math.round(result);
};

$('start').addEventListener('click', function (e) {
    
});

$('end').addEventListener('click', function (e) {
    
});

var xAngle, yAngle;
xAngle = yAngle = 0;
document.addEventListener('keydown', function (e) {
    switch(e.keyCode) {
        case 37:
            yAngle -= 90;
            break;
        case 38:
            xAngle += 90;
            break;
        case 39:
            yAngle += 90;
            break;
        case 40:
            xAngle -= 90;
            break;
    }
    $('cube').style.webkitTransform = 'rotateX(' + xAngle + 'deg) rotateY(' + yAngle + 'deg)';
}, false);