import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiLock2Line, RiEyeCloseLine, RiServerLine } from 'react-icons/ri';

// Usamos un gradiente oscuro basado en tu color primario para el "Búnker"
const SecuritySection = styled.section`
  position: relative;
  width: 100%;
  padding: 140px 0;
  /* Gradiente profundo: de un morado muy oscuro a tu primary color mezclado */
  background: linear-gradient(135deg, #1A0B2E 0%, #3B2073 100%);
  color: var(--color-white);
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

/* Líneas de "datos" animadas en el fondo para dar aspecto tecnológico */
const GridBackground = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: 
    linear-gradient(rgba(62, 209, 198, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(62, 209, 198, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
  opacity: 0.5;
`;

const GlowingOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 0;
`;

const MintOrb = styled(GlowingOrb)`
  top: -20%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: var(--color-secondary);
  opacity: 0.15;
`;

const PinkOrb = styled(GlowingOrb)`
  bottom: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: var(--color-accent);
  opacity: 0.15;
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
  max-width: 800px;
  margin-bottom: 80px;
`;

const Badge = styled.span`
  background: rgba(62, 209, 198, 0.15); /* Menta translúcido */
  color: var(--color-secondary);
  border: 1px solid rgba(62, 209, 198, 0.3);
  padding: 8px 16px;
  border-radius: 30px;
  font-family: var(--font-subtitle);
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: inline-block;
  box-shadow: 0 0 20px rgba(62, 209, 198, 0.2);
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-family: var(--font-subtitle);
  color: var(--color-white);
  line-height: 1.1;
  margin-bottom: 20px;

  span {
    color: var(--color-secondary); /* Resaltamos con el color menta */
  }
`;

const Subtitle = styled.p`
  font-family: var(--font-text);
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

/* ----- Glassmorphism Oscuro (Búnker) ----- */
const BunkerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const BunkerCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03); /* Casi transparente */
  backdrop-filter: blur(24px); /* Cristal esmerilado fuerte */
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 45px 35px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  /* Resplandor superior en la tarjeta */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, ${props => props.glowcolor}, transparent);
    opacity: 0.5;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    &::before { opacity: 1; }
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props => props.bg};
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 25px;
  box-shadow: 0 0 30px ${props => props.bg}; /* Efecto neón */
`;

const CardTitle = styled.h3`
  font-family: var(--font-subtitle);
  font-size: 24px;
  margin-bottom: 15px;
  color: var(--color-white);
`;

const CardText = styled.p`
  font-family: var(--font-text);
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
`;

const Security = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <SecuritySection id="seguridad">
      <GridBackground />
      <MintOrb />
      <PinkOrb />

      <ContentWrapper>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Badge>Nivel Bancario</Badge>
          <Title>Tu privacidad es <span>innegociable</span></Title>
          <Subtitle>
            Construimos Kora bajo el principio de "Privacidad por Diseño". Lo que hablas con Kora, se queda únicamente contigo. Sin excepciones.
          </Subtitle>
        </SectionHeader>

        <BunkerGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <BunkerCard variants={itemVariants} glowcolor="var(--color-secondary)">
            <IconWrapper bg="rgba(62, 209, 198, 0.2)" color="var(--color-secondary)">
              <RiEyeCloseLine />
            </IconWrapper>
            <CardTitle>100% Anónimo</CardTitle>
            <CardText>No necesitas crear una cuenta con tu nombre real. Tu identidad y tus consultas son completamente anónimas.</CardText>
          </BunkerCard>

          <BunkerCard variants={itemVariants} glowcolor="var(--color-accent)">
            <IconWrapper bg="rgba(247, 198, 217, 0.2)" color="var(--color-accent)">
              <RiLock2Line />
            </IconWrapper>
            <CardTitle>Encriptación Total</CardTitle>
            <CardText>Todas las conversaciones viajan encriptadas. Ni siquiera nuestro equipo de desarrollo puede leer tus mensajes.</CardText>
          </BunkerCard>

          <BunkerCard variants={itemVariants} glowcolor="var(--color-primary)">
            <IconWrapper bg="rgba(123, 92, 250, 0.3)" color="#B8A3FF">
              <RiServerLine />
            </IconWrapper>
            <CardTitle>Cero Rastros</CardTitle>
            <CardText>No vendemos tus datos. Al cerrar tu sesión, el contexto de la conversación se destruye permanentemente de nuestros servidores.</CardText>
          </BunkerCard>
        </BunkerGrid>
      </ContentWrapper>
    </SecuritySection>
  );
};

export default Security;