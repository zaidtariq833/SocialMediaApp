"use client"
import { useState, useEffect } from "react";

const useWindowDimensions = (windowWidth) => {
    const [width, setWidth] = useState(windowWidth);

    useEffect(() => {
      const handleResize = () => setWidth(windowWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return width;
  };

export default useWindowDimensions;