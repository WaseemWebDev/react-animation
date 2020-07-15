import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import { Howl } from 'howler';
import horn from '../horn.mp3';
import car from '../car.png';
import '../App.css';

function Car() {

  const { ref, getAnimation } = useWebAnimations({
    keyframes: {
      transform: ["translateX(1400px)"], // Move by 500px
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 24000,
      playbackRate: 0.5,
      fill: "forwards", // Run for 1000ms
      iterations: Infinity, // Repeat once
      // direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  const play = () => {
    getAnimation().play();
  };
  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 1.4);
  };
  const pause = () => {
    getAnimation().pause();
  };
  const jumpToHalf = () => {
    const animation = getAnimation();
    animation.currentTime = animation.effect.getTiming().duration / 2;
  };

  useEffect(() => {
    function carSlow() {
      setInterval(() => {
        const animation = getAnimation();
        if (animation.playbackRate > 4) {
          animation.updatePlaybackRate(animation.playbackRate * 0.8);
        }
        if (animation.playbackRate === 0.5) {
          animation.updatePlaybackRate(animation.playbackRate = 0.5);
        }
      }, 1000);
    }
    carSlow();
  });


  function soundPlay() {
    var sound = new Howl({
      src: [horn],
      html5: true,
    });

    sound.play();
  }

  return (
    <>
      <img src={car} ref={ref} alt="car" id="car" style={{ position: "absolute", zIndex: "9999", left: "0px", bottom: "0px" }} />
      <div id="buttons">
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={jumpToHalf}>Jump to Half</button>
        <button onClick={speedUp}>Speed Up</button>
        <button onClick={soundPlay}>Horn</button>


      </div>

    </ >

  );

}
export default Car;