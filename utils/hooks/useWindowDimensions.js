"use client"
import { useState, useEffect } from "react";

const useWindowDimensions = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return width;
  };


export default useWindowDimensions;