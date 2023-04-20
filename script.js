$(document).ready(function() {
    $("button[name='darkModeBtn']").click(function() {
        if ($(this).html() === '<i class="fa-solid fa-lightbulb"></i>') {
            $(this).html('<i class="fa-regular fa-lightbulb"></i>');
        } else {
            $(this).html('<i class="fa-solid fa-lightbulb"></i>');
        }
    });
});