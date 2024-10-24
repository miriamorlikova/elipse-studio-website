import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function MouseCursor() {
  const numCircles = 10;
  const startPosition = Array.from({ length: numCircles }).map(() => ({
    x: 0,
    y: 0,
  }));
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const circlePositions = useRef(startPosition);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // update na zaklade pozice mysi
    function flameCircles() {
      const newPositions = [...circlePositions.current];
      let x = position.x;
      let y = position.y;

      // Update kazde dalsi kulicky na zaklade nove pozice, aby nasledovala tu predchozi + mys
      newPositions.forEach((circle) => {
        circle.x += (x - circle.x) * 0.75;
        circle.y += (y - circle.y) * 0.75;
        x = circle.x;
        y = circle.y;
      });

      circlePositions.current = newPositions;

      requestAnimationFrame(flameCircles);
    }

    flameCircles();
  }, [position]);

  return (
    <>
      {circlePositions.current.map((circle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            x: circle.x - 12,
            y: circle.y - 12,
            width: 24 - index * 2,
            height: 24 - index * 2,
            borderRadius: "50%",
            backgroundColor: `#FDF8F3`,
            position: "fixed",
            pointerEvents: "none",
            zIndex: 9999,
            scale: 1 - index * 0.05,
            opacity: 1,
          }}
          transition={{ duration: 0 }}
        />
      ))}
    </>
  );
}
