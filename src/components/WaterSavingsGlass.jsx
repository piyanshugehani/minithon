import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Enhanced wave animation using keyframes for the moving effect
const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
    transform: translateX(10px);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
    transform: translateX(10px);

  }
`;

// Styled Components for the glass and water level
const GlassContainer = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  border: 3px solid #3498db;
  border-radius: 18px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.05);
`;

const WaterLevel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #3498db;
  height: ${({ height }) => height};
  transition: height 3s ease; // Smoother water filling effect
  overflow: hidden;
`;

const WaterSurface = styled.div`
  position: absolute;
  top: -15px; // Positioned slightly above the water container to show the surface animation
  left: 0;
  width: 250px; // Increased width to match GlassContainer
  height: 30px; // Increased height for a more prominent wave
  background: rgba(255, 255, 255, 0.2);
  border-radius: 60%; // Slightly rounded corners for a more organic look
  animation: ${waveAnimation} 3s infinite ease-in-out;
`;

const PercentageIndicator = styled.span`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 28px;
  font-weight: bold;
  color: #fff;
`;

const WaterSavingsGlass = ({ waterSavedPercentage }) => {
  const [waterLevelHeight, setWaterLevelHeight] = useState("0%");

  useEffect(() => {
    // Animate the water level when the component mounts
    setWaterLevelHeight(`${waterSavedPercentage}%`);
  }, [waterSavedPercentage]);

  return (
    <GlassContainer>
      <WaterLevel height={waterLevelHeight}>
        <WaterSurface />
      </WaterLevel>
      <PercentageIndicator>{`${Math.round(
        waterSavedPercentage
      )}%`}</PercentageIndicator>
    </GlassContainer>
  );
};

export default WaterSavingsGlass;
