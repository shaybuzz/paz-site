var images = [], index = 0, interval = 3000;
images[0] = "images/adv1.jpg";
images[1] = "images/adv2.jpg";
images[2] = "images/adv3.jpg";

window.onload = function () {
    setInterval(function () { changePic(); }, interval);
}

function changePic() {
    index++;
    if (index == images.length) {
        index = 0;
    }
    var imgAdv = document.getElementById('dynamic');

    imgAdv.src = images[index];
}

