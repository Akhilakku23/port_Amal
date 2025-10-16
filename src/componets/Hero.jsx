import profilePic from '../assets/AK/Amal.webp.jpg';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Amal Manoj"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-8xl tracking-tighter lg-text-8xl"
            >
              Amal Manoj
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
             3D Artist & Designer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
             I’m a creative, detail-oriented designer with a passion for bringing ideas to life through both 3D modeling and graphic design. Skilled in Blender, Photoshop, and Illustrator, I love creating visually engaging assets for games, branding, and digital media. My 3D work focuses on modeling and texturing, while my design projects highlight strong composition, typography, and storytelling. Over time, I’ve worked on various freelance and personal projects that strengthened my adaptability and creative problem-solving skills. I’m driven by the challenge of blending artistry with technology and am eager to join a creative team in gaming, animation, or digital marketing where I can grow and make a real impact.
            </motion.p>

            
  <div className="flex justify-center gap-6 mb-10">
  <motion.a
    variants={childVariants}
    href="amal_resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="bg-white rounded-full px-6 py-3 text-sm font-medium text-stone-800 shadow-md hover:bg-blue-300 transition"
  >
    Download Resume
  </motion.a>

  <motion.a
    variants={childVariants}
    href="pr_new.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="bg-white rounded-full px-6 py-3 text-sm font-medium text-stone-800 shadow-md hover:bg-blue-300 transition"
  >
    View Portfolio
  </motion.a>
</div>






          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
