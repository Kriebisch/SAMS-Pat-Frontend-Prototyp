
/*
Eigentlich funktioniert sowohl das Hamburger-Menü als auch das Account-Menü komplett ohne JavaScript. Allerdings bin ich später
darauf gestoßen, dass es doch wichtig wäre das Burgermenu auch schließen zu können wenn man einen Link anklickt oder außerhalb
des Bereichs klickt. Daher hatte ich angefangen mit Eventlistenern und JS die Funktion zu bearbeiten. das funktioniert auch ganz gut
allerdings lässt sich das Menu aus einem Grund den ich nicht beseitigen konnte nicht mehr über die Checkbox selber schließen

*/

// Selektiere die Checkboxen und die Sidebars
const hamburgerCheckbox = document.querySelector('.hamburger-checkbox');
const accountCheckbox = document.querySelector('.account-checkbox');
const hamburgerSidebar = document.querySelector('.sidebar');
const accountSidebar = document.querySelector('.account-sidebar');

// Event-Listener: Klick auf die Checkbox für das Hamburger-Menü
hamburgerCheckbox.addEventListener('click', (event) => {
  // Verhindert, dass der Klick als "außerhalb" registriert wird
  event.stopPropagation();
  
  // Wenn das menü geschlossen ist, wird es geöffnet
  if (!hamburgerCheckbox.checked) {
    hamburgerCheckbox.checked = true;
  }
});

// Event-Listener: klick auf die Checkbox für das account-Menü
accountCheckbox.addEventListener('click', (event) => {
  // Verhindert, dass der Klick als "außerhalb" registriert wird
  event.stopPropagation();
  
  // Wenn das Menü geschlossen ist, öffnen wir es
  if (!accountCheckbox.checked) {
    accountCheckbox.checked = true;
  }
});

// Event-Listener: Klick außerhalb der Sidebars (Schließen der Menüs)
document.addEventListener('click', (event) => {
  // Wenn das Hamburger-Menü geöffnet ist und irgendwo außerhalb geklickt wurde, schließen
  if (hamburgerCheckbox.checked && !hamburgerSidebar.contains(event.target) && event.target !== hamburgerCheckbox) {
    hamburgerCheckbox.checked = false;
  }

  // Wenn das Account-Menü geöffnet ist und irgendwo außerhalb geklickt wurde, schließen
  if (accountCheckbox.checked && !accountSidebar.contains(event.target) && event.target !== accountCheckbox) {
    accountCheckbox.checked = false;
  }
});

// Event-Listener: Klick auf Links innerhalb der Sidebars
const hamburgerLinks = document.querySelectorAll('.sidebar a');
const accountLinks = document.querySelectorAll('.account-sidebar a');

// Schließe die Menüs beim Klick auf einen Link
hamburgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerCheckbox.checked = false;
  });
});

accountLinks.forEach((link) => {
  link.addEventListener('click', () => {
    accountCheckbox.checked = false;
  });
});


