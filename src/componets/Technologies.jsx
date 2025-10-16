
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobeaftereffects , SiAdobephotoshop , SiAdobeindesign, SiAdobepremierepro, SiBlender, SiCanva  } from "react-icons/si";
import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Stagger effect
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

// Icon bounce effect
const iconVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: [0, -15, 0], // Bounce effect
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Technologies = () => {
  const techStack = [
    { Icon: SiAdobephotoshop, color: "#31A8FF", name: "Photoshop" },
    { Icon: SiAdobeindesign, color: "#FF3366", name: "InDesign" },
    { Icon: SiAdobepremierepro, color: "#9999FF", name: "Premiere Pro" },
    { Icon: SiAdobeaftereffects, color: "#9999FF", name: "After Effects" },
    { Icon: SiBlender, color: "#F5792A", name: "Blender" },
    { Icon: IoLogoFigma, color: "#F24E1E", name: "Figma" },
    { Icon: SiCanva, color: "#00C4CC", name: "Canva" },
    
  ];
  return (
    <div className="pb-24">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-center gap-10"
      >
        {techStack.map(({ Icon, color, name }, index) => (
          <motion.div
            key={index}
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }} // Hover effect
            className="flex flex-col items-center cursor-pointer transition-transform duration-300"
          >
            <Icon className={`text-7xl ${color}`} />
            <p className="mt-2 text-lg font-semibold">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
