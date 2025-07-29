import { useEffect, useRef, useState } from "react";
import igniup from "../assets/igniup.png";
import codeXplainer from "../assets/codeXplainer.png";
import globaltuitions from "../assets/globaltuitions.png";
import type { Projects } from "../types/types";
import {
  expressjs,
  js,
  mongoDB,
  n8n,
  nodejs,
  reactjs,
  tailwind,
  ts,
} from "../utils/svgs";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

export function About() {
  const containerRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

  const [visibleImg, setVisibleImg] = useState<number | null>(null);

  const targetPos = useRef({ x: 0, y: 0 });
  const imgPos = useRef({ x: -10, y: -10 });

  const leadRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      const dxLead = targetPos.current.x - imgPos.current.x;
      const dyLead = targetPos.current.y - imgPos.current.y;
      imgPos.current.x += dxLead * 0.2;
      imgPos.current.y += dyLead * 0.2;

      if (leadRef.current) {
        leadRef.current.style.left = `${imgPos.current.x}px`;
        leadRef.current.style.top = `${imgPos.current.y}px`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current!);
  }, []);

  const updatePosition = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current) {
      // const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;

      targetPos.current = { x, y };
      setVisible(true);
    }
  };

  const hide = () => {
    setVisible(false);
    setVisibleImg(null);
    targetPos.current = { x: -9999, y: -9999 };
  };

  const projects = [
    {
      id: 1,
      title: "igniUp",
      desc: "Multi-IDE coding platform enabling real-time code execution, and workflow automation—built with React, Docker, and WebSockets for a seamless in-browser coding experience.",
      url: "https://igniup.com",
      img: igniup,
      techStack: [tailwind, js, reactjs, nodejs, expressjs, mongoDB, n8n],
    },
    {
      id: 2,
      title: "globaltuitions.co.uk",
      desc: "An educational platform connecting students with expert tutors worldwide. It offers personalized learning paths, secure video sessions built with React, Express and MongoDB.",
      url: "https://globaltuitions.co.uk",
      img: globaltuitions,
      techStack: [tailwind, js, reactjs, nodejs, expressjs, mongoDB],
    },
    {
      id: 3,
      title: "codeXplainer",
      desc: "CodeXplainer is an AI-powered platform that explains complex code in simple terms. It supports multiple languages and offers instant breakdowns of logic, functions, and algorithms—designed to help developers learn and debug faster.",
      url: "https://atif-muhammad.github.io/codeXplainer/",
      img: codeXplainer,
      techStack: [tailwind, ts, reactjs, nodejs, expressjs, mongoDB, n8n],
    },
    {
      id: 4,
      title: "property-builder",
      desc: "Property Builder is a sleek portfolio showcase platform for real estate developers, enabling them to present projects with dynamic layouts, high-quality media, and unit-wise breakdowns. Designed for clarity and elegance to impress potential buyers and investors.",
      url: "https://property-builder.vercel.app/",
      img: codeXplainer,
      techStack: [tailwind, ts, reactjs],
    },
  ];

  const handleImgOnHover = (img: number) => {
    setVisibleImg(img);
  };

  const handleImgonLeave = () => {
    hide();
    setVisibleImg(null);
  };

  const mainContainerRef = useRef(null);
  const isInView = useInView(mainContainerRef, {
    threshold: 0.3,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-16 sm:gap-y-20 py-16 sm:py-20 relative bg-black">
      <motion.div
        ref={mainContainerRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="z-10 px-4 text-center sm:text-left"
      >
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4">
          <motion.span
            variants={textVariants}
            className="text-3xl sm:text-5xl text-white"
          >
            As a{" "}
            <motion.span
              variants={textVariants}
              className="text-stroke text-4xl sm:text-6xl uppercase font-bold inline-block"
            >
              full-stack
            </motion.span>{" "}
            problem solver,
          </motion.span>
          <motion.span
            variants={textVariants}
            className="text-white text-xl sm:text-2xl tracking-wider"
          >
            I bring
          </motion.span>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mt-2">
          <motion.span
            variants={textVariants}
            className="text-white text-xl sm:text-2xl tracking-wider"
          >
            clarity and
          </motion.span>
          <motion.span
            variants={textVariants}
            className="text-[#F8F3CE] text-4xl sm:text-6xl uppercase font-bold"
          >
            intelligent systems
          </motion.span>
          <motion.span
            variants={textVariants}
            className="text-white text-xl sm:text-2xl tracking-wider"
          >
            to life with code.
          </motion.span>
        </div>
      </motion.div>

      <div className="w-full overflow-hidden h-20 sm:h-32 group">
        <div className="marquee-container">
          <div className="marquee-track whitespace-nowrap">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className={`font-bold text-[10vw] sm:text-9xl mx-6 ${i % 2 === 0 ? "text-[#7A7A73]" : "text-stroke"
                  }`}
              >
                WORKS -
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-10">
        {projects.map((project: Projects, index: number) => (
          <motion.div
            ref={containerRef}
            key={index}
            onMouseMove={updatePosition}
            onMouseEnter={() => handleImgOnHover(project.id)}
            onMouseLeave={handleImgonLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="py-10 sm:py-15 px-4 sm:px-10 w-full border-t border-b border-white flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6"
          >
            <motion.div
              className="flex flex-col w-full sm:w-1/2 gap-2 sm:gap-4"
              onMouseEnter={hide}
              onMouseLeave={() => handleImgOnHover(project.id)}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <p className="text-white text-3xl sm:text-6xl font-semibold">
                {project.title}
              </p>
              <p className="text-gray-300 text-base sm:text-lg font-light">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                {project.techStack.map((stack: string, i: number) => (
                  <motion.img
                    key={i}
                    className="w-5 h-5"
                    src={stack}
                    alt={stack}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      delay: index * 0.2 + i * 0.05,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            </motion.div>

            <div className="border-2 border-amber-50 opacity-10 p-10 rounded-full pointer-events-none pulse-glow">
              <div className="border-2 border-amber-50 p-5 rounded-full pulse-glow-inner1">
                <div className="border-2 border-amber-50 p-1 rounded-full pulse-glow-inner2">
                </div>
              </div>
            </div>


            <motion.div
              onClick={() => window.open(project.url, "_blank")}
              onMouseEnter={hide}
              onMouseLeave={() => handleImgOnHover(project.id)}
              className="bg-white p-6 sm:p-8 rounded-full rotate-5 hover:bg-white/70 transition-all duration-150 cursor-pointer"
              initial={{ opacity: 0, rotate: -60 }}
              whileInView={{ opacity: 1, rotate: -45 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>

            {visibleImg === project.id && visible && (
              <motion.img
                ref={leadRef}
                className={`w-[60vw] sm:w-1/3 max-w-sm rounded-xl absolute z-50 pointer-events-none`}
                src={project.img}
                alt="img"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "fixed",
                  left: `${imgPos.current.x}px`,
                  top: `${imgPos.current.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
