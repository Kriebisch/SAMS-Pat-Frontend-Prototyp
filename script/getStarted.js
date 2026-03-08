document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const isVertical = window.innerWidth >= 768; // Ansicht prüfen
        if (isVertical) {
            updateVerticalProgress();
        } else {
            updateHorizontalProgress();
        }
    });

});

// Breakpoint überwachen und Ansichten aktualesieren
window.addEventListener('resize', function () {
    synchronizeProgress();
});

/* Funktion zur Synchronisierung der Fortschrittsanzeige */
function synchronizeProgress() {
    const isVertical = window.innerWidth >= 768;

    const activeStep = document.querySelector('.content.active');
    const activeIndex = Array.from(document.querySelectorAll('.content')).indexOf(activeStep);

    if (isVertical) {
        // Vertikale Ansicht synchronisieren
        const verticalCircles = document.querySelectorAll('.vertical-circle-container .circle');
        verticalCircles.forEach(circle => circle.classList.remove('active'));
        for (let i = 0; i <= activeIndex; i++) {
            verticalCircles[i].classList.add('active');
        }
    } else {
        // Horizontale Ansicht synchronisieren
        const horizontalLabels = document.querySelectorAll('.progress-label');
        const horizontalCircles = document.querySelectorAll('.circle');
        horizontalLabels.forEach(label => label.classList.remove('active'));
        horizontalCircles.forEach(circle => circle.classList.remove('active'));

        horizontalLabels[activeIndex]?.classList.add('active');
        for (let i = 0; i <= activeIndex; i++) {
            horizontalCircles[i].classList.add('active');
        }

        updateProgressBar('horizontal');
    }
}

/* Funktionen zur Aktualisierung der Fortschrittsanzeige in der horizontalen Ansicht*/ 

function updateHorizontalProgress() {
    const currentStep = document.querySelector('.content.active');
    const currentLabel = document.querySelector('.progress-label.active');
    let nextStep = currentStep.nextElementSibling;
    let nextLabel = currentLabel.nextElementSibling;

    if (!nextStep) {
        nextStep = document.querySelector('.content.step-1');
        nextLabel = document.querySelector('.progress-label');
    }

    currentStep.classList.remove('active');
    nextStep.classList.add('active');
    currentLabel.classList.remove('active');
    nextLabel.classList.add('active');

    updateProgressBar('horizontal');
}

/* Funktionen zur Aktualisierung der Fortschrittsanzeige in der vertikalen Ansicht*/ 

function updateVerticalProgress() {
    const currentStep = document.querySelector('.content.active');
    const currentCircle = document.querySelector('.vertical-circle-container .circle.active');
    const currentLabel = document.querySelector('.progress-label-vertical.active');

    let nextStep = currentStep.nextElementSibling;
    let nextCircle = currentCircle.parentElement.nextElementSibling?.querySelector('.circle');
    let nextLabel = currentLabel.parentElement.nextElementSibling?.querySelector('.progress-label-vertical');

    if (!nextStep) {
        nextStep = document.querySelector('.content.step-1');
        nextCircle = document.querySelector('.vertical-circle-container .circle');
        nextLabel = document.querySelector('.progress-label-vertical');
    }

    currentStep.classList.remove('active');
    nextStep.classList.add('active');

    currentCircle.classList.remove('active');
    nextCircle.classList.add('active');

    currentLabel.classList.remove('active');
    nextLabel.classList.add('active');

    updateProgressBar('vertical');

    // aktualesiert farben von Labels und Kreisen
    const circles = document.querySelectorAll('.vertical-circle-container .circle');
    const labels = document.querySelectorAll('.progress-label-vertical');

    circles.forEach((circle, index) => {
        if (circle.classList.contains('active')) {
            labels[index].classList.add('active');
        } else {
            labels[index].classList.remove('active');
        }
    });
}

/* Funktion zur Aktualisierung der Fortschrittsanzeige */

function updateProgressBar(view) {
    const activeStep = document.querySelector('.content.active');
    const activeIndex = Array.from(document.querySelectorAll('.content')).indexOf(activeStep) + 1;

    const progressBar = document.getElementById('progress');
    const circles = view === 'horizontal'
        ? document.querySelectorAll('.circle')
        : document.querySelectorAll('.vertical-circle-container .circle');

    const progress = (activeIndex / circles.length) * 100;
    progressBar.style.height = view === 'horizontal' ? `${progress}%` : null;

    circles.forEach(circle => circle.classList.remove('active'));
    for (let i = 0; i < activeIndex; i++) {
        circles[i].classList.add('active');
    }
}






// *********JS für die Auswahl der Krankheit *********//

// steuert die Markierung der Krankheit durch das Klichen auf den Button 

document.querySelectorAll('.select-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Finde die vorherige Zeile (Name der Krankheit)
        const diseaseRow = this.closest('tr').previousElementSibling;

        if (diseaseRow) {
            // Wenn die Zeile bereits ausgewählt ist, deselektiere sie
            if (diseaseRow.classList.contains('selected')) {
                diseaseRow.classList.remove('selected');
            } else {
                // Entfernen der vorherige auswahl aus allen Zeilen
                document.querySelectorAll('.searchresults-table tbody tr').forEach(row => {
                    row.classList.remove('selected');
                });

                // markiere die aktuelle Zeile
                diseaseRow.classList.add('selected');
            }
        }
    });
});




/* Panelsteuerung für die Diagnose */

$(document).ready(function () {
    $(".details-btn").click(function () {
        const button = $(this);
        const row = button.closest("tr"); // Die aktuelle Zeile (interaktive Buttons)
        let detailsPanel = row.next(".details-panel"); // Die nächste Zeile (Details-Panel)

        // Prüfe, ob ein Details-Panel bereits existiert
        if (detailsPanel.length === 0) {
            // Neues Details-Panel erstellen und nach der aktuellen Zeile einfügen
            detailsPanel = $(`
                <tr class="details-panel">
                    <td colspan="2">
                        <div class="details-content">
                            <h4>Details zur Krankheit:</h4>
                            <p>Hier können spezifische Informationen über die Krankheit angezeigt werden.</p>
                        </div>
                    </td>
                </tr>
            `);
            row.after(detailsPanel);
        }

        // Panel anzeigen/ausblenden mit Animation
        detailsPanel.find("td").slideToggle("slow");
    });
});



