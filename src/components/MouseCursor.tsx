// import { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";

// export default function MouseCursor() {
//   const [cursorProps, setCursorProps] = useSpring(() => ({
//     xy: [0, 0],
//     config: { mass: 10, tension: 550, friction: 140 },
//   }));

//   const [shadowProps, setShadowProps] = useSpring(() => ({
//     xy: [0, 0],
//     config: { mass: 10, tension: 350, friction: 150 },
//   }));

//   const [shadow2Props, setShadow2Props] = useSpring(() => ({
//     xy: [0, 0],
//     config: { mass: 10, tension: 250, friction: 160 },
//   }));

//   const [position, setPosition] = useState([0, 0]);

//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       setPosition([event.clientX, event.clientY]);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     setCursorProps({ xy: position });
//     setShadowProps({ xy: position });
//     setShadow2Props({ xy: position });
//   }, [position, setCursorProps, setShadowProps, setShadow2Props]);

//   return (
//     <>
//       {/* MAIN DOT */}
//       <animated.div
//         style={{
//           width: 10,
//           height: 10,
//           borderRadius: "50%",
//           backgroundColor: "white",
//           position: "fixed",
//           pointerEvents: "none",
//           zIndex: 9999,
//           transform: cursorProps.xy.to(
//             (x, y) => `translate3d(${x}px, ${y}px, 0)`,
//           ),
//         }}
//       />

//       {/* FIRST SHADOW */}
//       <animated.div
//         style={{
//           width: 8,
//           height: 8,
//           borderRadius: "50%",
//           backgroundColor: "rgba(255, 255, 255, 0.6)",
//           position: "fixed",
//           pointerEvents: "none",
//           zIndex: 9998,
//           transform: shadowProps.xy.to(
//             (x, y) => `translate3d(${x - 4}px, ${y - 4}px, 0)`,
//           ),
//         }}
//       />

//       {/* SECOND SHADOW */}
//       <animated.div
//         style={{
//           width: 6,
//           height: 6,
//           borderRadius: "50%",
//           backgroundColor: "rgba(255, 255, 255, 0.3)",
//           position: "fixed",
//           pointerEvents: "none",
//           zIndex: 9997,
//           transform: shadow2Props.xy.to(
//             (x, y) => `translate3d(${x - 8}px, ${y - 8}px, 0)`,
//           ),
//         }}
//       />
//     </>
//   );
// }
