let count = 1;
let max = 5;
document.getElementById('radio1').checked = true;

setInterval( function() {
    nextImage();
}, 4000)

function nextImage() {
    count++
    if(count > max) {
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
}