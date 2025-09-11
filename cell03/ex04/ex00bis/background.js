// function randomize() {
// 	document.body.style.background = randomColors();
// }

function randomColors() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + color.padStart(6, '0');
}

$(document).ready(function(){
    $("button").click(function(){
        document.body.style.backgroundColor = randomColors();
    });
});
