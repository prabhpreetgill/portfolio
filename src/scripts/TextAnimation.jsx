import '../App.css'

export default function animateText(delay) {
    return {
        animation: `animate-header 2s ease forwards ${delay}s`,
        visibility: 'visible' // Make sure to initialize visibility as 'visible' in your @keyframes to see the element after animation
    };
}
