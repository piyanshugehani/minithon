import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import styled from "styled-components";

const GlobeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (min-width: 769px) {
    height: 500px;
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const WorldGlobe = () => {
  const globeEl = useRef();

  useEffect(() => {
    const globe = globeEl.current;

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;

    const CLOUDS_IMG_URL =
      "https://raw.githubusercontent.com/turban/webgl-earth/master/examples/earth-clouds.png";
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006;

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(
          globe.getGlobeRadius() * (1 + CLOUDS_ALT),
          75,
          75
        ),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      globe.scene().add(clouds);

      const rotateClouds = () => {
        clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
        requestAnimationFrame(rotateClouds);
      };
      rotateClouds();
    });
  }, []);

  return (
    <GlobeContainer>
      <Globe
        ref={globeEl}
        animateIn={false}
        width={350}
        height={400}
        backgroundColor="rgba(0,0,0,0)" // Transparent background
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      />
    </GlobeContainer>
  );
};

export default WorldGlobe;
