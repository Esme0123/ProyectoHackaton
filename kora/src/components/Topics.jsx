// src/components/Topics.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TopicsSection = styled.section`
  position: relative;
  width: 100%;
  padding: 120px 0;
  background-color: var(--color-white); /* Fondo blanco limpio para contraste */
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130%;
  height: 130%;
  background-image: radial-gradient(rgba(123, 92, 250, 0.05) 2px, transparent 2px);
  background-size: 50px 50px;
  opacity: 0.5;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  max-width: 700px;
  margin-bottom: 70px;
`;

const SectionBadge = styled.span`
  background: rgba(62, 209, 198, 0.1);
  color: var(--color-secondary);
  padding: 8px 16px;
  border-radius: 30px;
  font-family: var(--font-subtitle);
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 15px;
  display: inline-block;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  color: #1A1A1A;
  line-height: 1.1;
`;

/* ----- Nube de Conocimiento Interactiva ----- */
const TopicsCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
`;

const TopicCapsule = styled(motion.button)`
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  color: #333333;
  padding: 18px 35px;
  border-radius: 50px;
  font-family: var(--font-text);
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.03);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  /* Efecto de resplandor (glow) en hover */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-radius: 50%;
    opacity: 0;
    transition: width 0.4s ease, height 0.4s ease, opacity 0.4s ease;
  }

  /* Variaciones de color en hover */
  &.topic-primary:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    box-shadow: 0 10px 30px rgba(123, 92, 250, 0.2);
    &::before {
      width: 120%;
      height: 200px;
      background: radial-gradient(circle, rgba(123, 92, 250, 0.1) 0%, rgba(255,255,255,0) 70%);
      opacity: 1;
    }
  }

  &.topic-secondary:hover {
    border-color: var(--color-secondary);
    color: var(--color-secondary);
    box-shadow: 0 10px 30px rgba(62, 209, 198, 0.2);
    &::before {
      width: 120%;
      height: 200px;
      background: radial-gradient(circle, rgba(62, 209, 198, 0.1) 0%, rgba(255,255,255,0) 70%);
      opacity: 1;
    }
  }
`;

const Topics = () => {
  const topicsData = [
    { text: "Salud Sexual", type: "primary" },
    { text: "Identidad de Género", type: "secondary" },
    { text: "Bienestar Emocional", type: "primary" },
    { text: "Métodos Anticonceptivos", type: "secondary" },
    { text: "Relaciones Saludables", type: "primary" },
    { text: "Prevención de ITS", type: "secondary" },
    { text: "Amor Propio", type: "primary" },
    { text: "Consentimiento", type: "secondary" },
  ];

  // Variantes para la nube de temas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3 
      } 
    }
  };

  const capsuleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <TopicsSection id="temas">
      <BackgroundShape />
      
      <ContentWrapper>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionBadge>Tu enciclopedia personal</SectionBadge>
          <SectionTitle>Explora los temas clave que podemos hablar juntos</SectionTitle>
        </SectionHeader>
        
        <TopicsCloud
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          {topicsData.map((topic, index) => {
            // MAGIA AQUÍ: Fórmulas basadas en el index. 
            // Esto genera valores variados que parecen aleatorios, pero son puros.
            const pseudoRandomY = -5 - (index % 3) * 4;     // Alterna entre -5, -9, -13
            const pseudoRandomDuration = 3 + (index % 4) * 0.5; // Alterna entre 3, 3.5, 4, 4.5
            const pseudoRandomDelay = (index % 5) * 0.3;    // Alterna retrasos

            return (
              <TopicCapsule
                key={index}
                variants={capsuleVariants}
                className={`topic-${topic.type}`}
                // Aplicamos los valores pseudo-aleatorios
                animate={{ 
                  y: [0, pseudoRandomY, 0],
                  transition: {
                    duration: pseudoRandomDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: pseudoRandomDelay
                  }
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2, y: { duration: 0 } }
                }}
              >
                {topic.text}
              </TopicCapsule>
            );
          })}
        </TopicsCloud>
      </ContentWrapper>
    </TopicsSection>
  );
};

export default Topics;