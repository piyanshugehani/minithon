import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextureLoader } from 'three';
import SplitText from './ui/SplitText';
import './ui/Parallax.css'
import RollingGallery from './ui/RollingGallery';
import SpotlightCard from './ui/RollingGallery';
import { Gauge, Lock, Settings, ShieldCheck } from 'lucide-react';
import { MdSpeed } from 'react-icons/md';
import { Button } from './ui/button';


gsap.registerPlugin(ScrollTrigger);

const Globe = () => {
  const globeRef = useRef();

  // Load the Earth texture
  const texture = useLoader(TextureLoader, '/textures/23322.jpg');

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

    tl.to(globeRef.current.position, {
      x: 0, // Move to the right (small movement)
      z: 2, // Slight depth effect
      duration: 2, // Slower duration for right movement
    })
      .to(globeRef.current.position, {
        x: 0, // Come back to the starting position
        z: 0, // Reset depth
        duration: 6, // Slower duration for returning to original position
      });

    // Slow down the rotation for smooth revolving effect
    tl.to(globeRef.current.rotation, {
      y: Math.PI * 2, // Full 360-degree rotation along Y-axis
      duration: 12, // Increased duration for smoother rotation
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
    <div className="scroll-container" style={{ height: '200vh', background: '#000', color: '#fff' }}>
      {/* Hero Section */}
      {/* <section
        className="hero-section flex flex-col items-center justify-center text-center h-[300vh] px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #022c43, #000)' }}
      >
        <div className="relative z-10 top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">EcoConnect</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Connecting renewable energy project creators with investors. Leveraging geolocation, real-time tracking, and integrated payment systems to democratize green energy investments and community participation.
          </p>
        </div>
       */}
      <div className="relative z-10 text-center pt-20">
        <SplitText
          text="EcoConnect"
          className="text-4xl md:text-6xl font-bold mb-4 text-white mt-20"
          delay={70}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-6 fade-in">
          Connecting renewable energy project creators with investors. Leveraging geolocation, real-time tracking, and integrated payment systems to democratize green energy investments and community participation.
        </p>
      </div>

      <Canvas className="w-full z-0" style={{ 'marginTop': '-900px', 'position': 'absolute', 'height': '300vh' }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <ZoomAndRotateCamera />
        <mesh scale={[0.9, 0.9, 0.9]}> {/* Increase scale factor as needed */}
          <Globe />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} />

      </Canvas>

      {/* Features Section */}
      <section className="features-section py-16 px-8" style={{ marginTop: '55rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          <SpotlightCard spotlightColor="rgba(0, 149, 255, 0.15)">
            <Lock className="h-8 w-8 text-[#00E5FF]" />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Enhanced Security</h2>
              <p className="text-sm text-zinc-400">State-of-the-art security measures for peace of mind.</p>
            </div>
            <Button className="mt-2 bg-[#00E5FF] hover:bg-[#00C2FF] text-black font-medium">Learn more</Button>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 149, 255, 0.15)">
            <ShieldCheck className="h-8 w-8 text-[#00E5FF]" />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Data Protection</h2>
              <p className="text-sm text-zinc-400">Latest encryption keeps your data secure.</p>
            </div>
            <Button className="mt-2 bg-[#00E5FF] hover:bg-[#00C2FF] text-black font-medium">Learn more</Button>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 149, 255, 0.15)">
            <Settings className="h-8 w-8 text-[#00E5FF]" />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Seamless Integration</h2>
              <p className="text-sm text-zinc-400">Smooth integration with your infrastructure.</p>
            </div>
            <Button className="mt-2 bg-[#00E5FF] hover:bg-[#00C2FF] text-black font-medium">Learn more</Button>
          </SpotlightCard>

          <SpotlightCard spotlightColor="rgba(0, 149, 255, 0.15)">
            <Gauge className="h-8 w-8 text-[#00E5FF]" />
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">High Performance</h2>
              <p className="text-sm text-zinc-400">Handles large data volumes efficiently.</p>
            </div>
            <Button className="mt-2 bg-[#00E5FF] hover:bg-[#00C2FF] text-black font-medium">Learn more</Button>
          </SpotlightCard>
        </div>

      </section>


      {/* Call to Action Section */}
      <section className="cta-section bg-gray-500 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Join the Green Revolution</h2>
        <p className="text-lg md:text-xl text-black mt-4">
          Empower communities and create a sustainable future. Be part of the change with EcoConnect.
        </p>
        <button
          className="mt-8 px-8 py-4 text-lg font-medium bg-black hover:bg-gray-800 text-white rounded-md shadow-lg transition-all"
          onClick={() => alert('Sign Up Now!')}
        >
          Sign Up Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} EcoConnect. All rights reserved.</p>
      </footer>
    </div>
  );
}
