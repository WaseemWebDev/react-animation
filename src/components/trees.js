import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
export default function Crows() {
    const { ref, } = useWebAnimations({
        keyframes: {
          transform: ["translateX(0px)","translateX(-1350px)","rotateY(180deg)"], // Move by 500px
        },
        timing: {
          delay: 500, // Start with a 500ms delay
          duration: 32000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          // direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
      });
    return (
        <img   ref={ref} src="https://lh3.googleusercontent.com/proxy/lRg9Gppm6RfoCOzkzsWvJ1aRgW4AGD_5qY7VQKbKmIIGM2EyKH95VpOOJ2TOt9K-zNzvaHvk8cEGP2fyZxM7j2jL0gW5I88" alt="tree"
            style={{ position: "absolute", zIndex: "9999", right: "290px", bottom: "340px" }}

        />
    );
}