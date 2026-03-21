import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiShieldFlashLine, RiLockPasswordLine, RiHeartsLine } from 'react-icons/ri';

const FeaturesContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 120px 0;
  background-color: #0B041C; /* <-- FONDO OSCURO */
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const BlobAccent = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  z-index: 0;
`;

const TopBlob = styled(BlobAccent)`
  top: -10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: var(--color-accent);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  max-width: 700px;
  margin-bottom: 80px;
`;

const SectionBadge = styled.span`
  background: rgba(123, 92, 250, 0.15);
  color: #B8A3FF;
  border: 1px solid rgba(123, 92, 250, 0.3);
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
  color: var(--color-white); /* <-- TEXTO BLANCO */
  line-height: 1.1;
`;

const PanelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Panel = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03); /* <-- CRISTAL OSCURO */
  backdrop-filter: blur(20px);
  border-radius: 32px;
  padding: 50px 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: radial-gradient(circle at top right, rgba(123, 92, 250, 0.15) 0%, rgba(255,255,255,0) 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    box-shadow: 0 20px 60px rgba(123, 92, 250, 0.2);
    border: 1px solid rgba(123, 92, 250, 0.3);
    &::after { opacity: 1; }
  }
`;

const IconContainer = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin-bottom: 35px;
  position: relative;
  z-index: 2;

  &.icon-confiable {
    background: rgba(62, 209, 198, 0.15);
    color: var(--color-secondary);
  }
  &.icon-privado {
    background: rgba(123, 92, 250, 0.15);
    color: #B8A3FF;
  }
  &.icon-juicios {
    background: rgba(247, 198, 217, 0.15);
    color: var(--color-accent);
  }
`;

const PanelTitle = styled.h3`
  font-family: var(--font-subtitle);
  font-size: 26px;
  color: var(--color-white); /* <-- TEXTO BLANCO */
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
`;

const PanelText = styled.p`
  font-family: var(--font-text);
  font-size: 19px;
  color: rgba(255, 255, 255, 0.6); /* <-- GRIS CLARO PARA LEER BIEN */
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <FeaturesContainer id="caracteristicas">
      <TopBlob />
      <ContentWrapper>
        <SectionHeader initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
          <SectionBadge>Tu refugio digital</SectionBadge>
          <SectionTitle>La integridad de Kora se basa en tres pilares esenciales</SectionTitle>
        </SectionHeader>
        
        <PanelsGrid as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }}>
          <Panel variants={panelVariants} whileHover={{ y: -10 }}>
            <IconContainer className="icon-confiable" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
              <RiShieldFlashLine />
            </IconContainer>
            <PanelTitle>Información confiable</PanelTitle>
            <PanelText>Fuentes verificadas y actualizadas para tu total tranquilidad y seguridad.</PanelText>
          </Panel>

          <Panel variants={panelVariants} whileHover={{ y: -10 }}>
            <IconContainer className="icon-privado" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
              <RiLockPasswordLine />
            </IconContainer>
            <PanelTitle>Privado por diseño</PanelTitle>
            <PanelText>Conversaciones 100% confidenciales. No guardamos tus datos ni tu identidad.</PanelText>
          </Panel>

          <Panel variants={panelVariants} whileHover={{ y: -10 }}>
            <IconContainer className="icon-juicios" whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}>
              <RiHeartsLine />
            </IconContainer>
            <PanelTitle>Espacio sin juicios</PanelTitle>
            <PanelText>Encuentra empatía y apoyo seguro para absolutamente todas tus preguntas.</PanelText>
          </Panel>
        </PanelsGrid>
      </ContentWrapper>
    </FeaturesContainer>
  );
};

export default Features;