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

var current = 0;

$('generate').addEventListener('click', function (e) {
    var flag = true;
    var value = generateRandomValue();
    while(flag) {
        value = generateRandomValue();
        if(value != current) {
            flag = false;
            current = value;
        }
    }
    changeFunction(positions[value][0], positions[value][1]);
});

var positions = {
    '1': [270, 0],
    '2': [0, 0],
    '3': [0, 270],
    '4': [0, 180],
    '5': [0, 90],
    '6': [90, 180]
};

var changeFunction = function (x, y) {
   $('cube').style.webkitTransform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
};