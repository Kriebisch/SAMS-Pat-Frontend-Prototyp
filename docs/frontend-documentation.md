# SAMS-Pat Frontend Prototype Documentation

## Table of Contents

1. [Introduction](#introduction)  
2. [Design Approach](#design-approach)  
3. [Incomplete Features](#incomplete-features)  
4. [Prototype Status](#prototype-status)  
5. [Technical Overview](#technical-overview)  

---

## Introduction

Frontend prototype for patient phenotyping: **interactive, step-by-step symptom documentation**, entry creation and editing.  
Implemented using **vanilla HTML, CSS, JavaScript**, without frameworks.

---

## Design Approach

- **Single-Page App Concept:** content dynamically loaded into main container  
- **Step-by-Step Workflow:** `getStarted` tutorial  
- **Data Management:** dashboard for creating, editing, searching entries  
- **Responsive & Interactive:** mobile-first design, dropdown sliders, progress bars

**Implementation Steps:**

1. Define page structure (header, main, footer)  
2. Develop core UI elements (HTML → CSS → JS)  
3. Test isolated interactions  
4. Integrate components and responsive layouts

**Advantages:** Incremental development, clear DOM manipulation, CSS & layout practice  
**Limitations:** Time-consuming without frameworks, partial state management

---

## Incomplete Features

- **Dashboard Entry List:** expandable entries, symptom counts, change indicators  
- **createVisit Workflow:** symptom specification, modifier assignment, final summary pending  
- **Additional Features:** free-text input for modifiers, help button, full state management

---

## Prototype Status

- HTML pages structured; design refinements pending  
- CSS modular for maintainability  
- JS handles menus, progress, sliders; some interactions incomplete  
- Accessibility (ARIA, screen readers) not fully implemented  

Demonstrates **UI concepts, responsiveness, workflows** without backend.

---

## Technical Overview

**HTML:** `index.html`, `register.html`, `getStarted.html`, `dashboard.html`, `createVisit.html`  
**CSS:** `styles.css`, `burger.css`, `inputForm.css`, `styleRadio.css`, `dashboard.css`, `getStarted.css`, `createVisit.css`  
**JS:** `script.js`, `getStarted.js`, `createVisit.js`, `dashboard.js`, `dateCarousel.js`