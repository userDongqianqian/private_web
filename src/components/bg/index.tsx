import classes from "./index.module.less";
import React, { useEffect, useState } from "react";
const MyBg: React.FC = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event:any) => {
      const { clientX, clientY } = event;
      setBackgroundPosition({ x: clientX, y: clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={classes.bgWrap}>
      <div
        style={{
          top: `${backgroundPosition.y}px`,
          left: `${backgroundPosition.x}px`,
        }}
        className={classes.bg}
      ></div>
    </div>
  );
};
export default MyBg;
