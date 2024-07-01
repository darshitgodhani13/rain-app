import React, { useState, useEffect } from "react";
import "./boxrow.css";

const BoxRow = () => {
  const boxCount = 15;
  const rowCount = 20;
  const colors = [
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "#7500e0",
    "#5701ce",
    "#0e018a",
    "#000067",
    "#060351",
    "#000346",
    "#000021",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "#D000FB",
    "#AB00D5",
    "#8600B0",
    "#65008D",
    "#41046B",
    "#190049",
    "#000025",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "#E803A8",
    "#EB00AD",
    "#CB0192",
    "#B10175",
    "#8B0054",
    "#67012A",
    "#490008",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "#E61D07",
    "#E61D07",
    "#AA0000",
    "#880001",
    "#660100",
    "#470000",
    "#1B0000",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "#D58D00",
    "#C37300",
    "#A95A00",
    "#873900",
    "#671700",
    "#000102",
    "#1C0000",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
    "black",
  ];

  const initialColors = Array(boxCount).fill("black");

  const startingIndices = [
    5, 8, 2, 15, 6, 9, 20, 11, 4, 14, 3, 10, 1, 13, 0, 12, 8, 2, 15, 6,
  ];

  const initialBoxColors = Array(rowCount).fill(initialColors);

  const [boxColors, setBoxColors] = useState(initialBoxColors);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoxColors((prevBoxColors) => {
        const newBoxColors = prevBoxColors.map((rowColors, rowIndex) => {
          const startIdx = startingIndices[rowIndex] || 0;
          const newColors = rowColors.map((_, i) => {
            const colorIndex = (currentStep + startIdx + i) % colors.length;
            return colors[colorIndex];
          });
          return newColors;
        });
        return newBoxColors;
      });

      setCurrentStep((prevStep) => (prevStep + 1) % colors.length);
    }, 200);

    return () => clearInterval(interval);
  }, [currentStep]);

  return (
    <div className="box-rows">
      {boxColors.map((rowColors, rowIndex) => (
        <div key={rowIndex} className="box-row">
          {rowColors.map((color, index) => (
            <div key={index} className="box" style={{ backgroundColor: color }}>
              .
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoxRow;
