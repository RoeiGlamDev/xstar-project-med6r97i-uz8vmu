import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations for luxury LRP cosmetics
 * This hook provides a mechanism to trigger animations on elements
 * to enhance the user experience on our luxury cosmetics website.
 * 
 * @returns {Object} - An object containing animation control functions
 */
export const useAnimation = () => {
    const elementsRef = useRef<HTMLElement[]>([]);

    /
     * Function to add an element to the reference array
     * @param {HTMLElement} element - The HTML element to animate
     */
    const addElement = (element: HTMLElement) => {
        if (element && !elementsRef.current.includes(element)) {
            elementsRef.current.push(element);
        }
    };

    /
     * Function to trigger animations on all registered elements
     * This function applies a luxury 3D effect by manipulating CSS properties
     */
    const triggerAnimation = () => {
        elementsRef.current.forEach((element) => {
            if (element) {
                // Applying a luxury animation effect
                element.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
                element.style.transform = 'translateY(0) scale(1)';
                element.style.opacity = '1';
            }
        });
    };

    /
     * Function to reset animations on all registered elements
     * This prepares elements for re-animation
     */
    const resetAnimation = () => {
        elementsRef.current.forEach((element) => {
            if (element) {
                // Resetting the animation state
                element.style.transform = 'translateY(20px) scale(0.9)';
                element.style.opacity = '0';
            }
        });
    };

    useEffect(() => {
        resetAnimation(); // Initial reset on mount
        triggerAnimation(); // Trigger animations after reset
    }, []);

    return { addElement, triggerAnimation, resetAnimation };
};