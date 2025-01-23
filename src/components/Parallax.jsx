import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextureLoader } from 'three';

gsap.registerPlugin(ScrollTrigger);

const Globe = () => {
  const globeRef = useRef();

  // Load the Earth texture
  const texture = useLoader(TextureLoader, '/textures/03_earthlights1k.jpg');

  useEffect(() => {
    // GSAP Timeline for smooth movement, zoom, and rotation with adjusted duration
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll-container',
        start: 'top top', // Start animation when top of container reaches top of viewport
        end: 'bottom top', // End when bottom of container reaches top of viewport
        scrub: true, // Sync animation with scroll
      },
    });

    // Slow down the movement from left to right and back with longer duration
    tl.to(globeRef.current.position, {
      x: 5, // Move to the right (small movement)
      z: 1, // Slight depth effect
      duration: 6, // Slower duration for right movement
    })
      .to(globeRef.current.position, {
        x: 0, // Come back to the starting position
        z: 0, // Reset depth
        duration: 6, // Slower duration for returning to original position
      });

    // Slow down the rotation for smooth revolving effect
    tl.to(globeRef.current.rotation, {
      y: Math.PI * 2, // Full 360-degree rotation along Y-axis
      x: Math.PI, // Full flip on the X-axis
      duration: 6, // Slower duration for rotation
    });

    // Slow down the zoom effect
    tl.to(globeRef.current.scale, {
      x: 1.5, // Zoom in slightly
      y: 1.5, // Zoom in slightly
      z: 1.5, // Zoom in slightly
      duration: 6, // Slower zoom-in effect
    });
  }, []);

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1, 114, 104]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const ZoomAndRotateCamera = () => {
    const { camera } = useThree();
    const cameraRef = useRef(camera);
  
    useEffect(() => {
      // Animate the camera zoom-in effect and slight rotation to follow the globe
      gsap.to(cameraRef.current.position, {
        z: 10, // Zoom in closer to the globe
        y: 2, // Slightly elevate the camera for better view
        duration: 161, // Slow down camera zoom and movement
        scrollTrigger: {
          trigger: '.scroll-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
  
      gsap.to(cameraRef.current.rotation, {
        x: 0.1, // Tilt the camera a bit for perspective
        duration: 6, // Slow down camera tilt
        scrollTrigger: {
          trigger: '.scroll-container',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, []);
  
    return null; // This component handles only the camera transformations
  };
  

export default function Parallax() {
  return (
    <div className="scroll-container" style={{ height: '200vh', background: '#1a1a1a' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <ZoomAndRotateCamera />
        <Globe />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
