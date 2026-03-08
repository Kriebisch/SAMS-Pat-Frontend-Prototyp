/*
Diese Funktionion ist zustandsbezogen und basiert auf der JQuery Bibliothek. Sie steuert die Funktion der "flip-button7" und "panel-button7" Elemente.
*/

$(document).ready(function () {
    $(".flip-button7").click(function () {
        const button = $(this);
        const panel = button.next(".panel-button7");

        // Verhindere erneutes Klicken während der Animation
        if (button.data("animating")) return;
        button.data("animating", true);

        // Toggle Panel mit Animation
        panel.slideToggle("slow", function () {
            // Reaktiviere den Button nach der Animation
            button.data("animating", false);
        });

        // Toggle die "active"-Klasse für die Animation des Triangles
        button.toggleClass("active");
    });
});
