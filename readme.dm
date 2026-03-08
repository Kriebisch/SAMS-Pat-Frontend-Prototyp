# SAMS-Pat Frontend Prototype

**Frontend prototype** developed during an internship at the **Berlin Institute of Health (BIH)**, Charité Berlin.  
The project explores interface concepts for a **patient-oriented frontend** of **SAMS (Symptom Annotation Made Simple)**, a system for structured patient phenotype documentation.

---

## Project Background

Developed within the research group **Bioinformatics and Translational Genetics**, focused on **rare and genetic diseases**.  
SAMS uses standardized medical ontologies:

- **HPO** – symptom annotation  
- **OMIM** – genetic disease references  
- **Orphanet** – rare disease classification  

Data can be stored in a database or exported via **GA4GH Phenopacket**.

**Objective:** Explore how patients can contribute symptom information via a **guided web interface**.

---

## Project Goals

- Patient-centered, step-by-step interface  
- Structured symptom documentation  
- Evaluate vanilla web technologies for interactive workflows  
- Focus on **UI/UX and frontend architecture** rather than production readiness

---

## Technologies

- **HTML** / **CSS** / **JavaScript** (vanilla)  
- No frameworks used: emphasizes **DOM manipulation, layout, and browser behavior**

---

## Features

- Login and registration  
- Onboarding workflow for new users (`getStarted`)  
- Dashboard to manage symptom entries  
- Guided workflow for creating entries (`createVisit`)  
- Dropdown-based interactive elements  
- Responsive, mobile-first layout  
- Hamburger / account menu

*Note: Some features are only partially implemented due to the internship timeframe.*

---

## Project Structure

README.md

src/
index.html
register.html
getStarted.html
dashboard.html
createVisit.html

css/
styles.css
burger.css
inputForm.css
styleRadio.css
dashboard.css
getStarted.css
createVisit.css

js/
script.js
getStarted.js
dashboard.js
createVisit.js
dateCarousel.js

docs/
project-context.md
frontend-documentation.md

assets/
Figma images and screenshots 

This structure was chosen to keep **layout, styling, and interaction logic clearly separated**.

---

## Prototype Status

- Conceptual frontend prototype  
- Some features incomplete: symptom hierarchy navigation, modifier assignment, full routing  
- Demonstrates **UI concepts, workflows, and responsiveness**

---

## Documentation

See `docs/` for:

- Project context & institution  
- Architecture and design decisions  
- Frontend implementation details

---

## Author

Internship project at **Berlin Institute of Health (BIH), Charité Berlin**