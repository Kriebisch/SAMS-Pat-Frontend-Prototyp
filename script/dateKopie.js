document.addEventListener("DOMContentLoaded", () => {
    const daysMobile = document.querySelectorAll(".day-mobile");
    const prevBtnMobile = document.querySelector(".carousel-nav-mobile.prev-mobile");
    const nextBtnMobile = document.querySelector(".carousel-nav-mobile.next-mobile");
    const lastEntryDateLabel = document.getElementById("last-entry-date");

    // Hilfsfunktion: Datum aus "Letzter Eintrag" extrahieren
    const parseDateToIndex = (dateStr) => {
        const [day] = dateStr.split(".").map(Number);
        return day; // Verwende den Tag direkt
    };

    // holt den aktiven Tag aus letzten Eintrag
    let activeDayIndexMobile = parseDateToIndex(lastEntryDateLabel.textContent);

    // Aktualisiert das Karussell mit aktiven tag
    const updateActiveDayMobile = (centerDay) => {
        daysMobile.forEach((day, i) => {
            const displayedDay = centerDay - 2 + i; // Berechne den angezeigten Tag
            day.textContent = displayedDay;

            // markierung des aktiven Elements
            day.classList.toggle("active-mobile", i === 2);

            // Verstecke ungültige Tage (< 1 oder > 31)
            day.style.visibility = displayedDay < 1 || displayedDay > 31 ? "hidden" : "visible";
        });
    };

    // Navigation im Karussell
    prevBtnMobile.addEventListener("click", () => {
        if (activeDayIndexMobile > 1) { // Gehe nicht unter Tag 1
            activeDayIndexMobile--;
            updateActiveDayMobile(activeDayIndexMobile);
        }
    });

    // vorwärts im Karussell
    nextBtnMobile.addEventListener("click", () => {
        if (activeDayIndexMobile < 31) { // Gehe nicht über Tag 31
            activeDayIndexMobile++;
            updateActiveDayMobile(activeDayIndexMobile);
        }
    });

    // Klickt auf einen Tag, um ihn aktiv zu setzen ist aber eigentlich optional
    daysMobile.forEach((day) => {
        day.addEventListener("click", () => {
            const clickedDay = parseInt(day.textContent, 10);
            if (clickedDay >= 1 && clickedDay <= 31) {
                activeDayIndexMobile = clickedDay;
                updateActiveDayMobile(activeDayIndexMobile);
            }
        });
    });

    // zieht sich das Datum aus dem Label "letzter Eintrag" heraus und aktualisiert den Karussell
    updateActiveDayMobile(activeDayIndexMobile);
});
