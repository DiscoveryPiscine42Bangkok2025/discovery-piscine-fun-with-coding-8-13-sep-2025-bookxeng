var backgrounds = ["green", "blue", "red"];
var width = 200;
var height = 200;

$(document).ready(function() {
    var $balloon = $("#balloon");

    $balloon.click(function() {
        var colorIdx = $balloon.data("colorIdx") || 0;
        $balloon.css("background-color", backgrounds[colorIdx % backgrounds.length]);
        $balloon.data("colorIdx", colorIdx + 1);

        if(width < 420 && height < 420) {
            width += 10;
            height += 10;
            $balloon.css({
                width: width + "px",
                height: height + "px"
            });
        } else {
            width = 200;
            height = 200;
            $balloon.css({
                width: width + "px",
                height: height + "px"
            });
        }
    });
});
