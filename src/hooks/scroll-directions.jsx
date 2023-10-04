import { useState, useEffect } from 'react';

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
    const [scrollValue,setScrollValue] = useState(0);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        // function to run on scroll
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            setScrollValue(scrollY)
            console.log(scrollY)
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection) {
              setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]); // run when scroll direction changes

    return scrollValue;
};

export default useScrollDirection;