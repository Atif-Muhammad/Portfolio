import { useEffect, useRef, useState } from "react";
import avatar from "../assets/TOM.png"
import { motion, useScroll, useTransform } from "framer-motion";

export function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const targetPos = useRef({ x: 0, y: 0 });
  const leadPos = useRef({ x: -9999, y: -9999 });
  const tailPos = useRef({ x: -9999, y: -9999 });

  const leadRef = useRef<HTMLDivElement>(null);
  const tailRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      const dxLead = targetPos.current.x - leadPos.current.x;
      const dyLead = targetPos.current.y - leadPos.current.y;
      leadPos.current.x += dxLead * 0.1;
      leadPos.current.y += dyLead * 0.1;

      const dxTail = leadPos.current.x - tailPos.current.x;
      const dyTail = leadPos.current.y - tailPos.current.y;
      tailPos.current.x += dxTail * 0.1;
      tailPos.current.y += dyTail * 0.1;

      if (leadRef.current) {
        leadRef.current.style.left = `${leadPos.current.x}px`;
        leadRef.current.style.top = `${leadPos.current.y}px`;
      }
      if (tailRef.current) {
        tailRef.current.style.left = `${tailPos.current.x}px`;
        tailRef.current.style.top = `${tailPos.current.y}px`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current!);
  }, []);

  const updatePosition = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      targetPos.current = { x, y };
      setVisible(true);
    }
  };

  const hide = () => {
    setVisible(false);
    targetPos.current = { x: -9999, y: -9999 };
  };



  // animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const atifX = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const muhammadX = useTransform(scrollYProgress, [0, 1], [0, 0]);


  return (
    
    <div
      ref={containerRef}
      onMouseMove={updatePosition}
      onMouseLeave={hide}
      className="w-full h-screen flex flex-col items-center justify-center relative bg-[#57564F] overflow-hidden"
    >
      <div className="w-[60vw] max-w-[450px] rounded-full overflow-hidden bg-[#7A7A73] pointer-events-none">
        <img className="w-full h-auto z-10 relative" src={avatar} alt="myAvatar" />
      </div>

      <div className="absolute flex flex-col items-center justify-center leading-[.9] text-transparent font-extrabold pointer-events-none ">
        
        <motion.span
          style={{ left: atifX}}
          className="relative transform text-[clamp(3rem,10vw,10rem)] text-[#ccc8aa] atif"
          data-text="ATIF"
        >
          ATIF
        </motion.span>
        <motion.span
          style={{ left: muhammadX}}
          className="relative text-[clamp(3rem,10vw,10rem)] text-[#ccc8aa] muh"
          data-text="MUHAMMAD"
        >
          MUHAMMAD
        </motion.span>
      </div>
     


      <div className="absolute bottom-10 z-10 pointer-events-none">
        <svg
          className="float-mouse"
          width="40"
          height="60"
          viewBox="0 0 100 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="140"
            rx="40"
            stroke="black"
            strokeWidth="4"
            fill="#DDDAD0"
          />
          <line
            x1="50"
            y1="30"
            x2="50"
            y2="60"
            stroke="black"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        ref={leadRef}
        className={`absolute w-16 h-16 md:w-24 md:h-24 rounded-full border border-[#DDDAD0]/70 pointer-events-none transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"
          }`}
      />
      <div
        ref={tailRef}
        className={`absolute w-10 h-10 md:w-16 md:h-16 rounded-full border border-[#DDDAD0]/40 pointer-events-none transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"
          }`}
      />
    </div>


  )
}

