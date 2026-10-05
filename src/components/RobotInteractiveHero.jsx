import React, { useEffect, useRef, useState } from 'react';
import './RobotInteractiveHero.css';

const RobotInteractiveHero = ({ mousePos, scrollY }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    let animId;
    let start = Date.now();

    const loop = () => {
      const elapsed = (Date.now() - start) / 1000;
      setTime(elapsed);
      animId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(animId);
  }, []);

  // Compute 3D Rotations & Parallax Offsets
  const mouseX = mousePos.current.x; // -1 to +1
  const mouseY = mousePos.current.y; // -1 to +1
  const currentScroll = scrollY.current || 0;
  const scrollFactor = Math.min(currentScroll / 500, 1);

  // Breathing Float Animation
  const breathingY = Math.sin(time * 1.6) * 6;
  const breathingRotateZ = Math.sin(time * 0.8) * 0.8;

  // 3D Matrix Transforms
  const robotRotateY = mouseX * 8 + Math.sin(time * 1.0) * 1.5;
  const robotRotateX = -mouseY * 6;
  const robotTranslateX = mouseX * 22;
  const robotTranslateY = mouseY * 15 + breathingY;
  const robotScale = 1 - scrollFactor * 0.12;

  // Emissive Light Pulses
  const blueVisorOpacity = 0.85 + Math.sin(time * 2.8) * 0.15;
  const redJointOpacity = 0.7 + Math.sin(time * 1.4) * 0.3;

  // Floating HUD Tag Items
  const hudTags = [
    {
      id: "ai-systems",
      label: "AI SYSTEMS",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="hud-icon">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8" />
        </svg>
      ),
      depth: 1.6,
      top: "14%",
      left: "2%"
    },
    {
      id: "software",
      label: "SOFTWARE",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="hud-icon">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      depth: 2.2,
      top: "42%",
      left: "-4%"
    },
    {
      id: "automation",
      label: "AUTOMATION",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="hud-icon">
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      ),
      depth: 1.4,
      top: "18%",
      right: "2%"
    },
    {
      id: "cloud",
      label: "CLOUD",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="hud-icon">
          <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
        </svg>
      ),
      depth: 1.8,
      top: "45%",
      right: "-4%"
    }
  ];

  return (
    <div className="robot-interactive-container" ref={containerRef}>
      {/* Background Depth Atmosphere */}
      <div 
        className="robot-bg-depth-layer"
        style={{
          transform: `translate3d(${mouseX * -15}px, ${mouseY * -10}px, -100px)`
        }}
      >
        <div className="bg-cyan-horizon-glow"></div>
        <div className="bg-floor-reflective-line"></div>
      </div>

      {/* 3D Robot Subject Layer (Exact Approved Reference Robot) */}
      <div 
        className="robot-3d-stage"
        style={{
          transform: `perspective(1000px) rotateY(${robotRotateY}deg) rotateX(${robotRotateX}deg) translate3d(${robotTranslateX}px, ${robotTranslateY}px, 0px) scale(${robotScale})`,
          transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)'
        }}
      >
        {/* Approved Reference Robot Image */}
        <div className="robot-image-frame">
          <img 
            src="/hero-robot-reference.jpg" 
            alt="SoftivaX Approved 3D Humanoid Robot" 
            className="approved-robot-img"
          />

          {/* Interactive Emissive Overlay Lights (Mapped to Visor & Chest Core) */}
          <div className="emissive-overlay-layer">
            {/* Electric Blue Head Visor Light */}
            <div 
              className="glow-blue-visor" 
              style={{ opacity: blueVisorOpacity }}
            ></div>

            {/* Electric Blue Core Light */}
            <div 
              className="glow-blue-core" 
              style={{ opacity: blueVisorOpacity }}
            ></div>

            {/* Red Mechanical Joint Strips (Collar, Shoulder, Elbow) */}
            <div 
              className="glow-red-collar" 
              style={{ opacity: redJointOpacity }}
            ></div>
            <div 
              className="glow-red-shoulder" 
              style={{ opacity: redJointOpacity }}
            ></div>
            <div 
              className="glow-red-ribs" 
              style={{ opacity: redJointOpacity }}
            ></div>
          </div>

          {/* Metallic Specular Reflection Highlight */}
          <div 
            className="metallic-glare-sweep"
            style={{
              transform: `translateX(${mouseX * 60}px) translateY(${mouseY * 40}px)`
            }}
          ></div>
        </div>

        {/* Floor Contact Shadow */}
        <div className="robot-contact-shadow"></div>
      </div>

      {/* Floating HUD Panels Layer */}
      <div className="robot-hud-layer">
        {hudTags.map((hud) => {
          const offsetX = mouseX * hud.depth * 25;
          const offsetY = mouseY * hud.depth * 18;

          return (
            <div 
              key={hud.id}
              className={`hud-panel-card hud-${hud.id}`}
              style={{
                top: hud.top,
                left: hud.left,
                right: hud.right,
                transform: `translate3d(${offsetX}px, ${offsetY}px, 0px)`
              }}
            >
              <div className="hud-icon-box">{hud.icon}</div>
              <span className="hud-label-text">{hud.label}</span>
              <div className="hud-corner-accent"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RobotInteractiveHero;
