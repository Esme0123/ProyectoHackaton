import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import koraProfileImg from '../assets/images/PandaAlmohada.png'; 

const AboutSection = styled.section`
  position: relative;
  width: 100%;
  padding: 120px 0;
  background-color: #FAFAFA; /* <-- FONDO CLARO */
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Glow = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: var(--color-primary);
  filter: blur(120px);
  border-radius: 50%;
  opacity: 0.1; /* <-- Luz suave para modo claro */
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 0;
`;

const ImageColumn = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

const HolographicCard = styled.div`
  background: rgba(255, 255, 255, 0.6); /* <-- Cristal claro */
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 20px;
  border: 1px solid rgba(123, 92, 250, 0.2);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -2px; left: -2px; right: -2px; bottom: -2px;
    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary), var(--color-accent));
    z-index: -1;
    border-radius: 32px;
    opacity: 0.5;
    animation: glowBorder 3s linear infinite;
  }

  @keyframes glowBorder {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  object-fit: cover;
`;

const TextColumn = styled(motion.div)`
  flex: 1.2;
  display: flex;
  flex-direction: column;
`;

const Badge = styled.span`
  background: rgba(247, 198, 217, 0.3);
  color: #D65A8D; /* Rosa más fuerte para contraste en blanco */
  padding: 8px 16px;
  border-radius: 30px;
  font-family: var(--font-subtitle);
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  width: fit-content;

  @media (max-width: 968px) {
    margin: 0 auto 20px auto;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-family: var(--font-subtitle);
  color: #1A1A1A; /* <-- TEXTO OSCURO */
  line-height: 1.1;
  margin-bottom: 25px;

  span { color: var(--color-primary); }
`;

const StoryText = styled.p`
  font-family: var(--font-text);
  font-size: 20px;
  color: #555555; /* <-- GRIS OSCURO */
  line-height: 1.7;
  margin-bottom: 30px;
`;

const MissionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MissionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: #FFFFFF; /* <-- Cajas blancas */
  padding: 15px 20px;
  border-radius: 15px;
  border-left: 4px solid var(--color-primary);
  box-shadow: 0 5px 15px rgba(0,0,0,0.03);

  p {
    font-family: var(--font-text);
    font-size: 18px;
    color: #333333; /* <-- Texto oscuro */
    margin: 0;
  }
`;

const About = () => {
  return (
    <AboutSection id="sobrekora">
      <Glow />
      <ContentWrapper>
        <ImageColumn initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
          <HolographicCard>
            <ProfileImage src={koraProfileImg} alt="Conoce a Kora" />
          </HolographicCard>
        </ImageColumn>

        <TextColumn initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Badge>Nuestra Historia</Badge>
          <Title>Más que un bot, <br /><span>tu aliado de confianza</span></Title>
          <StoryText>
            Kora nació de una necesidad urgente: crear un espacio donde las preguntas difíciles, esas que a veces nos da miedo hacer en voz alta, encuentren respuestas basadas en la ciencia, la empatía y el respeto absoluto.
          </StoryText>
          <MissionList>
            <MissionItem><p>🌱 <strong>Misión:</strong> Democratizar el acceso a la educación emocional y sexual.</p></MissionItem>
            <MissionItem><p>🤖 <strong>Tecnología:</strong> IA entrenada por expertos en salud y psicología.</p></MissionItem>
            <MissionItem><p>💜 <strong>Visión:</strong> Un mundo donde la ignorancia no sea motivo de vergüenza, sino el primer paso para aprender.</p></MissionItem>
          </MissionList>
        </TextColumn>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;