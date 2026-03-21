import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FeaturesSection = styled.section`
  padding: 80px 5%;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-subtitle);
  font-size: 42px;
  color: #1A1A1A;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap; /* Hace que sea responsive automáticamente */
`;

const Card = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 40px 30px;
  flex: 1;
  min-width: 280px; /* En celulares no será más pequeño que esto */
  max-width: 350px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0,0,0,0.02);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  background-color: #F4F0FF; /* Fondo morado claro para el icono */
  color: var(--color-primary);
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-family: var(--font-subtitle);
  font-size: 22px;
  color: #1A1A1A;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  font-family: var(--font-text);
  font-size: 18px;
  color: #666666;
  line-height: 1.5;
`;

const Features = () => {
  // Variantes para que las tarjetas aparezcan suavemente al hacer scroll
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <FeaturesSection id="caracteristicas">
      <SectionTitle>¿Por qué Kora?</SectionTitle>
      
      <CardsContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Card variants={cardVariants} whileHover={{ y: -10, boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }}>
          <IconWrapper>🛡️</IconWrapper>
          <CardTitle>Información confiable</CardTitle>
          <CardText>Fuentes verificadas y actualizadas para tu tranquilidad.</CardText>
        </Card>

        <Card variants={cardVariants} whileHover={{ y: -10, boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }}>
          <IconWrapper>🔒</IconWrapper>
          <CardTitle>Privado</CardTitle>
          <CardText>Tus conversaciones son 100% confidenciales. No guardamos tus datos.</CardText>
        </Card>

        <Card variants={cardVariants} whileHover={{ y: -10, boxShadow: "0 15px 40px rgba(0,0,0,0.1)" }}>
          <IconWrapper>💜</IconWrapper>
          <CardTitle>Sin juicios</CardTitle>
          <CardText>Un espacio seguro y empático para absolutamente todas tus preguntas.</CardText>
        </Card>
      </CardsContainer>
    </FeaturesSection>
  );
};

export default Features;