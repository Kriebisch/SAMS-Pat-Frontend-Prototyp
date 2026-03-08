


// *********JS um zur spezifizierung des Symptoms zu springen oder direkt zu Modifikatorn *********//

document.addEventListener("DOMContentLoaded", function () {
    // überwacht die buttons für Step 3 und 4
    document.querySelectorAll(".createVisit-action-btn[data-step]").forEach(button => {
        button.addEventListener("click", function () {
            const targetStep = this.getAttribute("data-step"); // Lese das Ziel-Step aus dem Attribut
            goToStep(targetStep);
        });
    });
});

// regelt das gezielte springen zum step
function goToStep(stepNumber) {
    const stepContainer = document.querySelector(".content.active"); // Aktuellen Step finden
    const nextStep = document.querySelector(`.content.step-${stepNumber}`); // Ziel-Step finden

    if (stepContainer && nextStep) {
        stepContainer.classList.remove("active"); // Aktuellen step ausblenden
        nextStep.classList.add("active"); // neuen Step aktiv sezen
    }

    synchronizeProgress(); // Fortschrittsanzeige synchronisieren
}



const accordionItems = document.querySelectorAll('.createVisit-accordion');

// Event-Listener für jedes Accordion-Element hinzufügen
accordionItems.forEach(item => {
    item.addEventListener('click', event => {
        // Prüfen, ob der Klick auf einen Button erfolgt ist
        const clickedElement = event.target;
        const isDetailsButton = clickedElement.classList.contains('createVisit-details-btn');

        // Wenn es der "Details"-Button ist, Panel ein-/ausblenden
        if (isDetailsButton) {
            const detailsRow = item.nextElementSibling;

            if (detailsRow && detailsRow.classList.contains('createVisit-accordion-content')) {
                // Toggle Sichtbarkeit
                detailsRow.style.display = (detailsRow.style.display === 'none' || detailsRow.style.display === '') 
                    ? 'table-row' 
                    : 'none';
            }
            // Verhindert, dass das gesamte Accordion ausgelöst wird
            event.stopPropagation();
        } else {
            // Toggle die "active"-Klasse für das Accordion-Element selbst
            item.classList.toggle('active');

            // Alle anderen Accordions schließen
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        }
    });
});