import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Asumiendo que tienes tu panda grande en assets/images/hero-panda.png
import pandaHeroImg from '../assets/images/PandaAbrazando.png'; 

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 8% 120px;
  background-color: var(--color-accent); /* Rosa pastel */
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  gap: 5%;
`;

const PandaWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PandaImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
`;

const TextBlockWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBlock = styled.div`
  background-color: #DDE8FD; /* Un azul lavanda suave basado en el diseño original */
  padding: 60px 50px;
  border-radius: 40px;
  text-align: center;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
`;

const Title = styled.h1`
  font-family: var(--font-title); /* Caveat */
  font-size: 52px;
  line-height: 1.1;
  margin-bottom: 25px;
  color: #1A1A1A;
`;

const Description = styled.p`
  font-family: var(--font-text); /* Patrick Hand */
  font-size: 20px;
  color: #4D4D4D;
  margin-bottom: 40px;
  line-height: 1.5;
`;

const HeroCTAButton = styled(motion.button)`
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 15px 40px;
  border-radius: 50px;
  font-family: var(--font-text); /* Patrick Hand */
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
`;

const Hero = () => {
  // Variantes para animación de entrada suave y escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Retraso entre hijos
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <HeroSection id="inicio">
      <ContentWrapper>
        {/* Entrada animada del Panda desde la izquierda */}
        <PandaWrapper
          initial={{ x: -100, opacity: 0, rotate: -5 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 70, 
            damping: 12,
            delay: 0.2
          }}
        >
          <PandaImage src={pandaHeroImg} alt="Kora Panda Asistente" />
        </PandaWrapper>

        {/* Bloque de texto con animación de entrada escalonada */}
        <TextBlockWrapper
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <TextBlock>
            <motion.div variants={itemVariants}>
              <Title>Un espacio seguro para hablar y aprender</Title>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Description>
                Kora es tu asistente virtual que te brinda información sobre temas sensibles de manera segura, privada y sin prejuicios.
              </Description>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroCTAButton
                whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#6A4DFA" // Un morado más oscuro al hover
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Hablar con Kora 🐼
              </HeroCTAButton>
            </motion.div>
          </TextBlock>
        </TextBlockWrapper>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;