import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import parrot from '../parrot.gif';
import '../App.css';
function Parrot(){
    const { ref, } = useWebAnimations({
        keyframes: {
          transform: ["translateX(-1000px)"], // Move by 500px
        },
        timing: {
          delay: 500, // Start with a 500ms delay
          duration: 16000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          // direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
      });
   
      return (
         <img src={parrot} width="200"  ref={ref} alt="car" id="car" style={{position:"absolute", zIndex:"9999",right:"300px"}}/>
      );
    
}
export default Parrot;