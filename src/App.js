import React from "react";
import Background from './components/Background';
import Car from './components/car';
import Parrot from './components/parrot';
import Bird from './components/bird';
import Crows from './components/trees';
import './App.css'

const App = () => {

  // useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     animate({
  //       keyframes: {
  //         transform: ["translateX(0px)", "translateX(500px)", "translate(0px,400px)"], // Move by 500px
  //         background: ["red", "blue", "green"], // Go through three colors
  //       },
  //       timing: {
  //         delay: 500, // Start with a 500ms delay
  //         duration: 3000, // Run for 1000ms
  //         iterations: 2, // Repeat once
  //         direction: "alternate", // Run the animation forwards and then backwards
  //         easing: "ease-in-out", // Use a fancy timing function
  //       },
  //     });
  //   });
  // }, [animate]);


  return (
    <div className="container">
      <Bird />
      <Parrot />
      <Background />
      <Crows />
      <Car />

      {/* <button onClick={play}>play</button> */}
      {/* <div className="target" ref={ref} /> */}
    </div>
  );
};
export default App;