// script.js

/* --- Part 2: JavaScript Functions — Scope, Parameters & Return Values --- */

// Global variable to keep track of how many animations triggered
let animationCount = 0;

/**
 * Calculates a scale value based on multiplier.
 * Demonstrates local scope and return value.
 * @param {number} multiplier - The scale multiplier.
 * @returns {number} The new scale value.
 */
function calculateScale(multiplier) {
  const baseScale = 1; // local variable
  return baseScale * multiplier;
}

/**
 * Toggles a CSS class on an element by ID.
 * Demonstrates DOM manipulation and conditional logic.
 * @param {string} id - The element's ID.
 * @param {string} className - The class to toggle.
 * @returns {boolean|null} True if added, false if removed, null if no element.
 */
function toggleClassById(id, className) {
  const element = document.getElementById(id);
  if (!element) return null;

  if (element.classList.contains(className)) {
    element.classList.remove(className);
    return false;
  } else {
    element.classList.add(className);
    animationCount++;
    return true;
  }
}

/* --- Part 3: Combining CSS Animations with JavaScript --- */

// When the DOM is fully loaded, add event listeners
document.addEventListener('DOMContentLoaded', () => {
  const animateBtn = document.getElementById('animateBtn');
  const box = document.getElementById('box');

  animateBtn.addEventListener('click', () => {
    // Use toggleClassById to add or remove the 'flip' animation class
    const toggled = toggleClassById('box', 'flip');

    if (toggled) {
      console.log(`Animation triggered! Total animations: ${animationCount}`);

      // Example use of calculateScale (not directly used here but demonstrates function usage)
      const scaleValue = calculateScale(1.1);
      box.style.transform = `scale(${scaleValue})`;
    } else {
      // Reset scale when animation removed
      box.style.transform = 'scale(1)';
    }
  });
});
