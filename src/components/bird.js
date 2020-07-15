import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import bird from '../bird.gif';
import '../App.css';
function Bird(){
    const { ref, } = useWebAnimations({
        keyframes: {
          transform: ["translateX(0px)","translateX(1550px)","rotateY(180deg)"], // Move by 500px
        },
        timing: {
          delay: 500, // Start with a 500ms delay
          duration: 33000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          //  direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
      });

   
      return (
         <img src={bird} width="200"  ref={ref} alt="car" id="car" style={{position:"absolute", zIndex:"9999",left:"0px"}}/>
      );
    
}
export default Bird;