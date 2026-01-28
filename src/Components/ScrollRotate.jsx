import { useEffect, useRef } from "react";
import roundedIcon from "../assets/dc-rounded.png";

export default function AutoRotate() {
  const imageRef = useRef(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    let animationFrame;

    const rotate = () => {
      rotationRef.current += 1; 
      if (imageRef.current) {
        imageRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }
      animationFrame = requestAnimationFrame(rotate);
    };

    rotate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <img
      ref={imageRef}
      src={roundedIcon}
      alt="Rotating icon"
      style={{
        width: "150px",
        top: "50px",
        right: "50px",
        pointerEvents: "none",
        willChange: "transform"
      }}
    />
  );
}
