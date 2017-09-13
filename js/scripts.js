
$(document).ready(function() {
    $(".clickable").click(function() {
        $("img").toggle();
        $("#walrus-showing").toggle();
        $("#walrus-hidden").toggle();
    });
});
