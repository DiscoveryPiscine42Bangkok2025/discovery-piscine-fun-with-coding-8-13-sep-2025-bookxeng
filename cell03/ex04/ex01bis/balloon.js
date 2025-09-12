$(document).ready(function () {
    let i = 0;
    const colors = ['red', 'green', 'blue'];

    $("#balloon").on("click", function () {
        let balloon = $(this);
        let newSize = balloon.height() + 10;

        if (newSize > 420) {
            balloon.css({
                width: "200px",
                height: "200px",
                backgroundColor: colors[0]
            });
            i = 0;
            return;
        }

        balloon.css({
            width: newSize + "px",
            height: newSize + "px",
            backgroundColor: colors[(i + 1) % colors.length]
        });

        i = (i + 1) % colors.length;
    });

    $("#balloon").on("mouseleave", function () {
        let balloon = $(this);
        let newSize = balloon.height() - 5;

        if (newSize < 200) newSize = 200;

        i = (i - 1 + colors.length) % colors.length;

        balloon.css({
            width: newSize + "px",
            height: newSize + "px",
            backgroundColor: colors[i]
        });
    });
});