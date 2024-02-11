import { useEffect, useState } from 'react';

// Define Parallax as a React component
const Parallax = (speed, direction) => {
    const [offsetY, setOffsetY] = useState(0);
const [isNotPhone, setIsNotPhone] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsNotPhone(window.innerWidth > 768);
        };

        // Monitor window resize to update screen size check
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isNotPhone) {
            const handleScroll = () => {
                // Get current scroll position
                setOffsetY(window.pageYOffset);
            };

            // Add scroll event listener
            window.addEventListener("scroll", handleScroll);

            return () => {
                // Remove scroll event listener
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [isNotPhone]);

    // Calculate the text's vertical position and opacity based on scroll position
    const style = isNotPhone ? {
      transform: `translateY(${offsetY * speed * direction}px)`, // Move text up slower than the scroll speed
    } : {};
  // Render children with the parallax effect
  return (
    style
  )
};

export default Parallax;
