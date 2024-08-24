import React, { useState } from "react";
import Image from "next/image";

const ZoomImage = ({ src, alt, customClassName }) => {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);
  const handleMouseMove = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <section
      className={`${customClassName} relative overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Image
        priority={true}
        src={src}
        alt={alt}
        className={`transition-transform duration-200 ${
          zoom ? "scale-150" : "scale-100"
        } `}
        style={{ transformOrigin: `${position.x}px ${position.y}px` }}
      />
    </section>
  );
};

export default ZoomImage;
