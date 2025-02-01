import React from "react";
import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 space-y-6 text-white text-[18px]'>
          <div>
            <p className='font-medium'>📧 Email:</p>
            <p>jainmanya2701@gmail.com</p>
          </div>

          <div>
            <p className='font-medium'>📞 Phone:</p>
            <p>+91 8879424209</p>
          </div>

          <div>
            <p className='font-medium'>📍 Location:</p>
            <p>Charni Road, Mumbai</p>
          </div>

          <div className='flex gap-6 mt-4'>
            <a href='https://github.com/manyajain27/' target='_blank' rel='noopener noreferrer'>
              <UseAnimations animation={github} size={36} strokeColor="white" />
            </a>
            <a href='https://www.linkedin.com/in/manya-jain-7a3200284/' target='_blank' rel='noopener noreferrer'>
              <UseAnimations animation={linkedin} size={36} strokeColor="white" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
