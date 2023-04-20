$(document).ready(function() {
    $("button[name='darkModeBtn']").click(function() {
        var parentElement = $(this).parent();
        if ($(this).html() === '<i class="fa-solid fa-lightbulb"></i>') {
            $(this).html('<i class="fa-regular fa-lightbulb"></i>');
        } else {
            $(this).html('<i class="fa-solid fa-lightbulb"></i>');
        }
        console.log(parentElement)
    });
});