import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import About from "../../components/About/About";
import LOGO from "../../assets/images/about_logo.svg";
import abtBtm from "../../assets/images/NavBtm.svg";
import homelogo from "../../assets/images/Committee/homelogo.png";
import FlyerContent from "./FlyerContent";

export default function HomePage() {
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowFirstText(prevShowFirstText => !prevShowFirstText);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <>
      <div className="container-fluid position-relative p-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#FFD700",
              },
              links: {
                color: "#ff0000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          style={{ position: 'absolute', zIndex: 1 }}
          className="particals-effect"
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          {showFirstText ? (
            <h1 className="fadeInOut misty-text sunShadow">
              International conference on Nextgen Technology and Ai for a sustainable future (NTAI2025)
            </h1>
          ) : (
            <img
              src={homelogo}
              alt="NTAI2025 logo"
              className="sunShadow w-175 w-md-50 h-auto" // Adjust the size for mobile screens
            />
          )}
          <CountdownTimer date={new Date('2025-04-12T13:00:00')} />
        </div>

        <div className="position-absolute w-100 overflow-hidden mt-5">
          <img src={abtBtm} className="w-100 nav-h-img" />
          {/*<About/>*/}
        </div>
      </div>
      <Footer />
    </>
  );
}
