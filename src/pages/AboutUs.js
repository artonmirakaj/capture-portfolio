import React from 'react'
import AboutSection from '../components/AboutSection'
import FAQSection from '../components/FAQSection';
import ServiceSection from '../components/ServiceSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
  return (
    <motion.div 
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <AboutSection />
      <ServiceSection />
      <FAQSection />
    </motion.div>
  );
}

export default AboutUs
