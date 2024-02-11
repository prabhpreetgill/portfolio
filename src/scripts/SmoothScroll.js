import { useEffect } from 'react';

const SmoothScroll = ({ duration = 500, delay = 500 }) => {
  useEffect(() => {
    // Function to handle the smooth scrolling
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const next = easeInOutQuad(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, next);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          } else {
            setTimeout(() => {
              window.scrollTo(0, targetPosition);
            }, delay);
          }
        };

        requestAnimationFrame(animation);
      }
    };

    // Add smooth scroll to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      // Clean up event listeners
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [duration, delay]);

  // Easing function
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return null; // This component does not render anything
};

export default SmoothScroll;
